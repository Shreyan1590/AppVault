
import { Card, CardContent } from "@/components/ui/card";
import { Layers, DraftingCompass, Rocket, Code, ShieldCheck, Component } from "lucide-react";

const features = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Vast Template Library",
    description: "Choose from over 50+ production-ready app templates, including clones of popular apps, to kickstart your project instantly.",
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: "Intuitive No-Code Editor",
    description: "Customize layouts, branding, and functionality with our powerful drag-and-drop editor. No coding experience required.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "One-Click Deployment",
    description: "Launch your application in minutes. We manage the hosting, scaling, and infrastructure so you can focus on your business.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Full Code Export",
    description: "With our business plans, you get full access to the clean, modern source code to host and customize without limitations.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure & Scalable",
    description: "Built on enterprise-grade infrastructure, ensuring your application is secure, scalable, and reliable from day one.",
  },
  {
    icon: <Component className="h-8 w-8 text-primary" />,
    title: "API & Integrations",
    description: "Connect to third-party services and APIs to extend your app's functionality and create powerful workflows.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">Everything You Need to Build and Launch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AppVault provides a complete toolkit to bring your ideas to life faster than ever before.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background/50 border-border/20 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
