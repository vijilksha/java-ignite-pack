import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, BookOpen, Beaker, ClipboardList } from "lucide-react";
import type { DayContent } from "@/data/curriculum";
import PPTSection from "./PPTSection";
import LessonPlanSection from "./LessonPlanSection";
import LabsSection from "./LabsSection";
import AssignmentsSection from "./AssignmentsSection";

interface ContentTabsProps {
  content: DayContent;
}

const ContentTabs = ({ content }: ContentTabsProps) => {
  const tabs = [
    { id: "ppt", label: "PPT Outline", icon: FileText, count: content.pptSlides.length },
    { id: "lesson", label: "Lesson Plan", icon: BookOpen },
    { id: "labs", label: "Labs", icon: Beaker, count: content.labs.length },
    { id: "assignments", label: "Assignments", icon: ClipboardList, count: content.assignments.length },
  ];

  return (
    <Tabs defaultValue="ppt" className="w-full">
      <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-2 rounded-xl bg-muted p-2">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="flex items-center gap-2 rounded-lg px-4 py-2.5 data-[state=active]:bg-card data-[state=active]:shadow-sm"
          >
            <tab.icon className="h-4 w-4" />
            <span className="hidden sm:inline">{tab.label}</span>
            {tab.count !== undefined && (
              <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent">
                {tab.count}
              </span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="ppt" className="animate-fade-in">
        <PPTSection slides={content.pptSlides} />
      </TabsContent>

      <TabsContent value="lesson" className="animate-fade-in">
        <LessonPlanSection plan={content.lessonPlan} />
      </TabsContent>

      <TabsContent value="labs" className="animate-fade-in">
        <LabsSection labs={content.labs} />
      </TabsContent>

      <TabsContent value="assignments" className="animate-fade-in">
        <AssignmentsSection assignments={content.assignments} />
      </TabsContent>
    </Tabs>
  );
};

export default ContentTabs;
