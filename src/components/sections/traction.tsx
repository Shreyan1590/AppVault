import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Download, Star } from "lucide-react";

const tractionData = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "10,000+",
    label: "Beta Waitlist Signups",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    value: "15",
    label: "Pilot Agencies Onboarded",
  },
  {
    icon: <Download className="h-8 w-8 text-primary" />,
    value: "2,500+",
    label: "Template Deployments",
  },
];

export default function TractionSection() {
  return (
    <section id="traction" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Gaining Momentum
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We're just getting started, but the excitement is real.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {tractionData.map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <div className="inline-block rounded-full bg-primary/10 p-4">{item.icon}</div>
                <p className="mt-4 text-5xl font-bold">{item.value}</p>
                <p className="mt-2 text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-12 max-w-3xl mx-auto bg-card p-8 shadow-lg">
            <CardContent className="p-0 text-center">
                <p className="text-2xl italic text-foreground">
                “AppVault is a revelation. We delivered a client's MVP in two weeks instead of three months. The ability to customize high-quality templates and export the code gives us the speed of no-code with the power of a custom stack. It's a complete game-changer for our agency.”
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="Jane Doe" data-ai-hint="professional woman" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">Jane Doe</p>
                        <p className="text-sm text-muted-foreground">CTO, Innovate Solutions</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
