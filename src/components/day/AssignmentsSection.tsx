import { useState } from "react";
import { ChevronDown, ChevronRight, ClipboardList, Lightbulb, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Assignment } from "@/data/curriculum";

interface AssignmentsSectionProps {
  assignments: Assignment[];
}

const AssignmentsSection = ({ assignments }: AssignmentsSectionProps) => {
  const [expandedAssignment, setExpandedAssignment] = useState<number | null>(0);

  const difficultyColors = {
    basic: "bg-success/20 text-success",
    intermediate: "bg-warning/20 text-warning",
    advanced: "bg-destructive/20 text-destructive",
  };

  if (assignments.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-12 text-center">
        <p className="text-muted-foreground">Assignments will be added for this day.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {assignments.map((assignment, index) => (
        <div
          key={assignment.id}
          className={cn(
            "rounded-xl border transition-all duration-200",
            expandedAssignment === index
              ? "border-accent/30 bg-card shadow-md"
              : "border-border bg-card hover:border-border/80"
          )}
        >
          {/* Assignment Header */}
          <button
            onClick={() => setExpandedAssignment(expandedAssignment === index ? null : index)}
            className="flex w-full items-center gap-4 p-5 text-left"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
              <ClipboardList className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Assignment #{assignment.id}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                    difficultyColors[assignment.difficulty]
                  )}
                >
                  {assignment.difficulty}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {assignment.title}
              </h3>
            </div>
            {expandedAssignment === index ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            )}
          </button>

          {/* Assignment Content */}
          {expandedAssignment === index && (
            <div className="border-t border-border px-5 pb-5 pt-4 space-y-6 animate-fade-in">
              {/* Problem Statement */}
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Problem Statement
                </h4>
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {assignment.problemStatement}
                </p>
              </div>

              {/* Hints */}
              <div className="rounded-lg bg-accent/10 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-accent" />
                  <h4 className="text-sm font-semibold text-foreground">Hints</h4>
                </div>
                <ul className="space-y-2">
                  {assignment.hints.map((hint, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-accent">•</span>
                      {hint}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expected Output */}
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Expected Output
                </h4>
                <pre className="rounded-lg bg-code p-4 font-mono text-sm text-code-foreground whitespace-pre-line">
                  {assignment.expectedOutput}
                </pre>
              </div>

              {/* Evaluation Criteria */}
              <div className="rounded-lg border border-success/30 bg-success/5 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <h4 className="text-sm font-semibold text-foreground">Evaluation Criteria</h4>
                </div>
                <ul className="space-y-2">
                  {assignment.evaluationCriteria.map((criterion, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success/60" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AssignmentsSection;
