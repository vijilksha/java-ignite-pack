import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DayContent } from "@/data/curriculum";

interface DayCardProps {
  day: DayContent;
  status: "completed" | "current" | "upcoming";
  index: number;
}

const DayCard = ({ day, status, index }: DayCardProps) => {
  const statusStyles = {
    completed: "border-success/30 bg-success/5",
    current: "border-accent/50 bg-accent/5 shadow-glow",
    upcoming: "border-border bg-card hover:border-border/80",
  };

  const badgeStyles = {
    completed: "bg-success text-success-foreground",
    current: "bg-accent text-accent-foreground",
    upcoming: "bg-muted text-muted-foreground",
  };

  return (
    <Link
      to={`/day/${day.day}`}
      className={cn(
        "group relative block rounded-xl border p-5 transition-all duration-300 hover:shadow-md",
        statusStyles[status],
        "animate-fade-up"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Status Icon */}
      <div className="absolute right-4 top-4">
        {status === "completed" && (
          <CheckCircle2 className="h-5 w-5 text-success" />
        )}
        {status === "current" && (
          <Clock className="h-5 w-5 text-accent animate-pulse" />
        )}
        {status === "upcoming" && (
          <Circle className="h-5 w-5 text-muted-foreground/50" />
        )}
      </div>

      {/* Day Badge */}
      <div className="mb-4 flex items-start gap-4">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold transition-transform group-hover:scale-105",
            badgeStyles[status]
          )}
        >
          {day.day}
        </div>
        <div className="flex-1 pr-6">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-2xl">{day.icon}</span>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              {day.title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {day.description}
          </p>
        </div>
      </div>

      {/* Content Preview */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
          {day.pptSlides.length} Slides
        </span>
        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
          {day.labs.length} Labs
        </span>
        {day.assignments.length > 0 && (
          <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
            {day.assignments.length} Assignment{day.assignments.length > 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Arrow */}
      <div className="absolute bottom-5 right-5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
        <ArrowRight className="h-5 w-5 text-accent" />
      </div>
    </Link>
  );
};

export default DayCard;
