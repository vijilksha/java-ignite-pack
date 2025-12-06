import { Download, ExternalLink, FileText, Video, BookOpen, Code2 } from "lucide-react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

const resources = [
  {
    category: "Setup & Installation",
    items: [
      { title: "JDK 17 Download", description: "Official Oracle JDK download", icon: Download, link: "#" },
      { title: "Eclipse IDE", description: "Popular Java IDE for beginners", icon: Download, link: "#" },
      { title: "IntelliJ IDEA", description: "Professional Java IDE", icon: Download, link: "#" },
    ],
  },
  {
    category: "Documentation",
    items: [
      { title: "Java API Documentation", description: "Official Java SE Documentation", icon: FileText, link: "#" },
      { title: "Oracle Java Tutorials", description: "Step-by-step learning guides", icon: BookOpen, link: "#" },
      { title: "Java Language Specification", description: "Detailed language reference", icon: FileText, link: "#" },
    ],
  },
  {
    category: "Practice Platforms",
    items: [
      { title: "HackerRank Java", description: "Practice coding challenges", icon: Code2, link: "#" },
      { title: "LeetCode", description: "Technical interview preparation", icon: Code2, link: "#" },
      { title: "Codecademy Java", description: "Interactive Java course", icon: Video, link: "#" },
    ],
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Additional resources to support your Java learning journey.
            Download tools, access documentation, and practice on coding platforms.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((section, sectionIndex) => (
            <div key={section.category} className="animate-fade-up" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
              <h2 className="mb-4 font-display text-xl font-bold text-foreground">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted group-hover:bg-accent/10 transition-colors">
                      <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference Card */}
        <section className="mt-12 rounded-2xl border border-border bg-card p-8">
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
            Quick Reference
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-code p-6">
              <h3 className="mb-4 font-mono text-lg font-semibold text-code-foreground">
                Compilation Commands
              </h3>
              <pre className="text-sm text-code-foreground/80">
{`# Compile Java file
javac HelloWorld.java

# Run compiled class
java HelloWorld

# Check Java version
java -version

# Check compiler version
javac -version`}
              </pre>
            </div>
            <div className="rounded-xl bg-code p-6">
              <h3 className="mb-4 font-mono text-lg font-semibold text-code-foreground">
                Basic Program Structure
              </h3>
              <pre className="text-sm text-code-foreground/80">
{`public class MyClass {
    public static void main(String[] args) {
        // Your code here
        System.out.println("Hello!");
    }
}`}
              </pre>
            </div>
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

export default Resources;
