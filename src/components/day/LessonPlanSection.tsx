import { Target, Clock, Edit3, MessageCircle, CheckCircle2, AlertTriangle } from "lucide-react";
import type { LessonPlan } from "@/data/curriculum";

interface LessonPlanSectionProps {
  plan: LessonPlan;
}

const LessonPlanSection = ({ plan }: LessonPlanSectionProps) => {
  if (!plan.objectives.length) {
    return (
      <div className="rounded-xl border border-dashed border-border p-12 text-center">
        <p className="text-muted-foreground">Lesson plan will be added for this day.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Learning Objectives */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Target className="h-5 w-5 text-primary-foreground" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            Learning Objectives
          </h3>
        </div>
        <ul className="space-y-2">
          {plan.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <span className="text-foreground">{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Time Split */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Clock className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            Time-Split Plan
          </h3>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Phase</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Duration</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {plan.timeSplit.map((item, i) => (
                <tr key={i} className="hover:bg-muted/50">
                  <td className="px-4 py-3 font-medium text-foreground">{item.phase}</td>
                  <td className="px-4 py-3 text-accent font-mono text-sm">{item.duration}</td>
                  <td className="px-4 py-3 text-muted-foreground">{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Whiteboard Points */}
      {plan.whiteboardPoints.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
              <Edit3 className="h-5 w-5 text-secondary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Whiteboard Points
            </h3>
          </div>
          <ul className="space-y-2">
            {plan.whiteboardPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Teaching Script */}
      {plan.teachingScript && (
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <MessageCircle className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Teaching Script (Opening)
            </h3>
          </div>
          <p className="italic text-foreground/90 leading-relaxed">
            "{plan.teachingScript}"
          </p>
        </div>
      )}

      {/* Expected Outcomes & Common Mistakes */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Expected Outcomes */}
        {plan.expectedOutcomes.length > 0 && (
          <div className="rounded-xl border border-success/30 bg-success/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                Expected Outcomes
              </h3>
            </div>
            <ul className="space-y-2">
              {plan.expectedOutcomes.map((outcome, i) => (
                <li key={i} className="text-sm text-foreground/80">• {outcome}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Common Mistakes */}
        {plan.commonMistakes.length > 0 && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                Common Mistakes
              </h3>
            </div>
            <ul className="space-y-2">
              {plan.commonMistakes.map((mistake, i) => (
                <li key={i} className="text-sm text-foreground/80">• {mistake}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonPlanSection;
