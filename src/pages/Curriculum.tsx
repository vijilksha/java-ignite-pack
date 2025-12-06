import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import DayCard from "@/components/dashboard/DayCard";
import { curriculumData } from "@/data/curriculum";

const Curriculum = () => {
  const getStatus = (day: number): "completed" | "current" | "upcoming" => {
    if (day < 1) return "completed";
    if (day === 1) return "current";
    return "upcoming";
  };

  // Group days by week
  const week1 = curriculumData.filter((d) => d.day <= 5);
  const week2 = curriculumData.filter((d) => d.day > 5 && d.day <= 10);
  const week3 = curriculumData.filter((d) => d.day > 10);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Complete Curriculum
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            15-day structured Java training program covering fundamentals to advanced concepts.
            Each day includes PPT outlines, lesson plans, hands-on labs, and assignments.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Week 1 */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              W1
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                Week 1: Fundamentals
              </h2>
              <p className="text-sm text-muted-foreground">Days 1-5: Core Java basics</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {week1.map((day, index) => (
              <DayCard
                key={day.day}
                day={day}
                status={getStatus(day.day)}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Week 2 */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">
              W2
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                Week 2: Object-Oriented Programming
              </h2>
              <p className="text-sm text-muted-foreground">Days 6-10: OOPS & Collections</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {week2.map((day, index) => (
              <DayCard
                key={day.day}
                day={day}
                status={getStatus(day.day)}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Week 3 */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success text-sm font-bold text-success-foreground">
              W3
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                Week 3: Advanced Topics & Project
              </h2>
              <p className="text-sm text-muted-foreground">Days 11-15: Exceptions, IO, Java 8, Project</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {week3.map((day, index) => (
              <DayCard
                key={day.day}
                day={day}
                status={getStatus(day.day)}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Java Training Materials — Pack 1: 15-Day Curriculum
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Curriculum;
