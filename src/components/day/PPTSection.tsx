import { useState } from "react";
import { ChevronDown, ChevronRight, Lightbulb, MessageSquare, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Slide } from "@/data/curriculum";

interface PPTSectionProps {
  slides: Slide[];
}

const PPTSection = ({ slides }: PPTSectionProps) => {
  const [expandedSlide, setExpandedSlide] = useState<number | null>(0);

  if (slides.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-12 text-center">
        <p className="text-muted-foreground">PPT content will be added for this day.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "rounded-xl border transition-all duration-200",
            expandedSlide === index
              ? "border-accent/30 bg-card shadow-md"
              : "border-border bg-card hover:border-border/80"
          )}
        >
          {/* Slide Header */}
          <button
            onClick={() => setExpandedSlide(expandedSlide === index ? null : index)}
            className="flex w-full items-center gap-4 p-5 text-left"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {slide.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {slide.content.length} bullet points
                {slide.trainerNotes && " • Trainer notes included"}
              </p>
            </div>
            {expandedSlide === index ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            )}
          </button>

          {/* Slide Content */}
          {expandedSlide === index && (
            <div className="border-t border-border px-5 pb-5 pt-4 animate-fade-in">
              {/* Main Content */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Slide Content
                </h4>
                <ul className="space-y-2">
                  {slide.content.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info Grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* Trainer Notes */}
                {slide.trainerNotes && (
                  <div className="rounded-lg bg-gradient-to-br from-primary/5 to-accent/10 border border-primary/20 p-5 md:col-span-2">
                    <div className="mb-3 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <span className="text-base font-semibold text-foreground">
                        Trainer Explanation
                      </span>
                    </div>
                    <div className="prose prose-sm max-w-none text-foreground/90">
                      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed bg-transparent p-0 m-0 border-none">
                        {slide.trainerNotes}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Analogy */}
                {slide.analogy && (
                  <div className="rounded-lg bg-accent/10 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-accent" />
                      <span className="text-sm font-semibold text-foreground">
                        Real-World Analogy
                      </span>
                    </div>
                    <p className="text-sm text-foreground/80">{slide.analogy}</p>
                  </div>
                )}

                {/* Diagram */}
                {slide.diagram && (
                  <div className="rounded-lg bg-code p-4 md:col-span-2">
                    <div className="mb-2 flex items-center gap-2">
                      <Workflow className="h-4 w-4 text-code-foreground" />
                      <span className="text-sm font-semibold text-code-foreground">
                        Diagram / Flow
                      </span>
                    </div>
                    <pre className="font-mono text-sm text-code-foreground">{slide.diagram}</pre>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PPTSection;
