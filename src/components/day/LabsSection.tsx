import { useState } from "react";
import { ChevronDown, ChevronRight, Beaker, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Lab } from "@/data/curriculum";

interface LabsSectionProps {
  labs: Lab[];
}

const LabsSection = ({ labs }: LabsSectionProps) => {
  const [expandedLab, setExpandedLab] = useState<number | null>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyCode = async (code: string, index: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const difficultyColors = {
    beginner: "bg-success/20 text-success",
    intermediate: "bg-warning/20 text-warning",
    advanced: "bg-destructive/20 text-destructive",
  };

  if (labs.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-12 text-center">
        <p className="text-muted-foreground">Labs will be added for this day.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {labs.map((lab, index) => (
        <div
          key={index}
          className={cn(
            "rounded-xl border transition-all duration-200",
            expandedLab === index
              ? "border-accent/30 bg-card shadow-md"
              : "border-border bg-card hover:border-border/80"
          )}
        >
          {/* Lab Header */}
          <button
            onClick={() => setExpandedLab(expandedLab === index ? null : index)}
            className="flex w-full items-center gap-4 p-5 text-left"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-code">
              <Beaker className="h-6 w-6 text-code-foreground" />
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-3">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {lab.title}
                </h3>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                    difficultyColors[lab.difficulty]
                  )}
                >
                  {lab.difficulty}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{lab.description}</p>
            </div>
            {expandedLab === index ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            )}
          </button>

          {/* Lab Content */}
          {expandedLab === index && (
            <div className="border-t border-border px-5 pb-5 pt-4 animate-fade-in">
              {/* Steps */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Steps
                </h4>
                <ol className="space-y-2">
                  {lab.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="text-foreground pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Code Block */}
              {lab.code && (
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Sample Code
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopyCode(lab.code!, index)}
                      className="h-8 gap-2"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="h-4 w-4 text-success" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="code-block overflow-x-auto">
                    <code>{lab.code}</code>
                  </pre>
                </div>
              )}

              {/* Sample Output */}
              {lab.sampleOutput && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Expected Output
                  </h4>
                  <pre className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground">
                    {lab.sampleOutput}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LabsSection;
