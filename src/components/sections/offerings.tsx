import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

const offerings = [
  {
    title: "Developer",
    price: "$29",
    description: "per month",
    features: [
      "Access to all app templates",
      "No-code drag-and-drop editor",
      "Community support",
      "Deploy one project",
    ],
    buttonText: "Get Started",
    variant: "outline",
  },
  {
    title: "Business",
    price: "$99",
    description: "per month",
    features: [
      "Everything in Developer, plus:",
      "Team collaboration (up to 5 users)",
      "Connect custom domains",
      "API integrations & webhooks",
      "Priority email support",
    ],
    buttonText: "Start 14-Day Trial",
    variant: "default",
  },
  {
    title: "Agency & Enterprise",
    price: "Custom",
    description: "Contact us for pricing",
    features: [
      "Everything in Business, plus:",
      "White-labeling solution",
      "Full source code export",
      "Dedicated account manager",
      "Custom SLAs",
    ],
    buttonText: "Contact Sales",
    variant: "outline",
  },
];

export default function OfferingsSection() {
  return (
    <section id="offerings" className="bg-card py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Flexible Plans for Every Team
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            From solo developers to large agencies, we have a plan that fits your needs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {offerings.map((offer, index) => (
            <Card
              key={index}
              className={`flex flex-col ${
                offer.variant === "default" ? "border-primary shadow-lg shadow-primary/20" : ""
              }`}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-headline text-2xl">{offer.title}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">{offer.price}</span>
                    <span className="text-sm text-muted-foreground">{offer.price.startsWith('$') ? '/month' : ''}</span>
                </div>
                <CardDescription>{offer.price.startsWith('$') ? '' : offer.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <ul className="space-y-4">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  variant={offer.variant as "default" | "outline"}
                >
                  {offer.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
