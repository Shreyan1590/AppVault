
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building, Code2, Rocket } from "lucide-react";

const useCases = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "For Startups & Entrepreneurs",
    description: "Launch your MVP faster and cheaper than ever. Validate your ideas quickly, pivot without losing momentum, and get to market in record time.",
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "For Agencies & Freelancers",
    description: "Deliver high-quality applications to your clients in a fraction of the time. Use our white-label solution to expand your service offerings.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "For Developers & Teams",
    description: "Skip the boilerplate and focus on unique features. Export the code to integrate with your existing stack and host on your own infrastructure.",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Built for Innovators
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Whether you're a solo founder or a large agency, AppVault is your launchpad.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="text-center bg-background/50 border-border/20 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                  {useCase.icon}
                </div>
                <CardTitle className="font-headline text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
