
import { Card, CardContent } from "@/components/ui/card";
import { MousePointerClick, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MousePointerClick className="h-10 w-10 text-primary" />,
    title: "Step 1: Select Your Template",
    description: "Browse our extensive library of 50+ app templates and choose the one that best fits your vision. From social media to on-demand services, we have you covered.",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Step 2: Customize Your App",
    description: "Use our intuitive drag-and-drop editor to customize every aspect of your app. Change colors, logos, layouts, and features with no code required.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Step 3: Launch in Minutes",
    description: "Deploy your fully functional application with a single click. We handle all the technical complexities of hosting and scaling, so you can go live instantly.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            From Idea to App in Three Simple Steps
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Our streamlined process makes app creation accessible to everyone.
          </p>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 top-10 hidden h-full w-px -translate-x-1/2 border-l-2 border-dashed border-border/50 md:block" aria-hidden="true"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className={`flex-1 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold font-headline text-primary">{step.title}</h3>
                      <p className="mt-4 text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-md ring-4 ring-primary/20">
                    {step.icon}
                  </div>
                </div>
                <div className={`flex-1 hidden md:block ${index % 2 === 1 ? 'md:order-first' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
