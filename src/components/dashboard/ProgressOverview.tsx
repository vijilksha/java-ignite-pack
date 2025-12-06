import { Award, BookOpen, Code2, FileText } from "lucide-react";

const stats = [
  { label: "Total Days", value: "15", icon: BookOpen, color: "text-primary" },
  { label: "PPT Slides", value: "90+", icon: FileText, color: "text-accent" },
  { label: "Hands-on Labs", value: "45+", icon: Code2, color: "text-success" },
  { label: "Assignments", value: "15+", icon: Award, color: "text-warning" },
];

const ProgressOverview = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="mb-3 flex items-center justify-between">
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {stat.label}
            </span>
          </div>
          <p className="font-display text-3xl font-bold text-foreground">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProgressOverview;
