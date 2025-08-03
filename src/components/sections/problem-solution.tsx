import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, DraftingCompass, Layers, Rocket } from "lucide-react";

const solutionItems = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "50+ Pre-Built Templates",
    description: "Jumpstart your project with production-ready clones of popular apps like Tinder, Uber, and more.",
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: "Drag-and-Drop Customization",
    description: "Easily modify branding, layouts, and features with our intuitive no-code editor.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "White-Label for Agencies",
    description: "Resell our app templates under your own brand and deliver projects faster than ever.",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">The Old Way is Broken</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Building apps from scratch costs an average of{" "}
            <span className="font-bold text-foreground">$50,000+</span> and takes{" "}
            <span className="font-bold text-foreground">6+ months</span>. According to CB Insights,
            60% of startups fail due to tech bottlenecks.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {solutionItems.map((item, index) => (
            <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
