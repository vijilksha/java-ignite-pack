import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";
import Header from "@/components/layout/Header";
import DayCard from "@/components/dashboard/DayCard";
import ProgressOverview from "@/components/dashboard/ProgressOverview";
import { Button } from "@/components/ui/button";
import { curriculumData } from "@/data/curriculum";

const Index = () => {
  // Simulate progress - Day 1 current, rest upcoming
  const getStatus = (day: number): "completed" | "current" | "upcoming" => {
    if (day < 1) return "completed";
    if (day === 1) return "current";
    return "upcoming";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent animate-fade-up">
              <GraduationCap className="h-4 w-4" />
              Complete Training Materials
            </div>
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: "100ms" }}>
              Java Training
              <span className="block text-accent">15-Day Curriculum</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
              Complete training materials for freshers — from absolute zero to billable-ready.
              Includes PPT outlines, lesson plans, hands-on labs, and assignments.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <Link to="/day/1">
                <Button variant="accent" size="lg" className="gap-2">
                  Start Day 1
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/curriculum">
                <Button variant="outline" size="lg">
                  View Full Curriculum
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">15 Days</p>
                <p className="text-sm text-muted-foreground">Structured Learning</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">Fresher Ready</p>
                <p className="text-sm text-muted-foreground">Zero to Billable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Stats Overview */}
        <section className="mb-12">
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
            Curriculum Overview
          </h2>
          <ProgressOverview />
        </section>

        {/* Day Cards Grid */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Training Days
            </h2>
            <Link to="/curriculum" className="text-sm font-medium text-accent hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {curriculumData.map((day, index) => (
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

export default Index;
