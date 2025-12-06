import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import ContentTabs from "@/components/day/ContentTabs";
import { Button } from "@/components/ui/button";
import { curriculumData } from "@/data/curriculum";

const DayDetail = () => {
  const { dayNumber } = useParams();
  const day = parseInt(dayNumber || "1");
  
  const content = curriculumData.find((d) => d.day === day);
  const prevDay = curriculumData.find((d) => d.day === day - 1);
  const nextDay = curriculumData.find((d) => d.day === day + 1);

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-4 font-display text-3xl font-bold text-foreground">
            Day Not Found
          </h1>
          <p className="mb-8 text-muted-foreground">
            The requested day doesn't exist in the curriculum.
          </p>
          <Link to="/">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Day Header */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-foreground">Day {day}</span>
          </div>
          
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-2xl font-bold text-accent-foreground shadow-glow">
                {day}
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Day {day} of 15</span>
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  <span className="mr-3">{content.icon}</span>
                  {content.title}
                </h1>
                <p className="mt-2 text-muted-foreground max-w-2xl">
                  {content.description}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              {prevDay && (
                <Link to={`/day/${prevDay.day}`}>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Day {prevDay.day}</span>
                  </Button>
                </Link>
              )}
              {nextDay && (
                <Link to={`/day/${nextDay.day}`}>
                  <Button variant="default" size="sm" className="gap-2">
                    <span className="hidden sm:inline">Day {nextDay.day}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <ContentTabs content={content} />
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-border bg-muted/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {prevDay ? (
              <Link to={`/day/${prevDay.day}`} className="group">
                <div className="flex items-center gap-3">
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div>
                    <p className="text-xs text-muted-foreground">Previous</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      Day {prevDay.day}: {prevDay.title}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextDay && (
              <Link to={`/day/${nextDay.day}`} className="group text-right">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Next</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      Day {nextDay.day}: {nextDay.title}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DayDetail;
