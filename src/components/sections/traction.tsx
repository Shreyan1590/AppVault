import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Download } from "lucide-react";

const tractionData = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "1,200+",
    label: "Waitlist Signups",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    value: "3",
    label: "Pilot Dev Agencies",
  },
  {
    icon: <Download className="h-8 w-8 text-primary" />,
    value: "500+",
    label: "Template Downloads",
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
                {item.icon}
                <p className="mt-4 text-5xl font-bold">{item.value}</p>
                <p className="mt-2 text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-12 max-w-3xl mx-auto bg-card p-8 shadow-lg">
            <CardContent className="p-0 text-center">
                <p className="text-2xl italic text-foreground">
                “AppVault cut our app development time by 90%. It's a game-changer for our agency.”
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://placehold.co/100x100.png" alt="Jane Doe" data-ai-hint="professional woman" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">Jane Doe</p>
                        <p className="text-sm text-muted-foreground">CTO @ StartupX</p>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
