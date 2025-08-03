import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const offerings = [
  {
    title: "B2C Marketplace",
    price: "$50 - $500",
    description: "One-time purchase",
    features: ["Access to a single app template", "Free updates for 1 year", "Community support"],
    buttonText: "Browse Templates",
    variant: "outline",
  },
  {
    title: "B2B SaaS Customizer",
    price: "$99+/month",
    description: "Per app subscription",
    features: [
      "No-code drag-and-drop editor",
      "API integrations",
      "Priority email support",
      "Team collaboration",
    ],
    buttonText: "Start Trial",
    variant: "default",
  },
  {
    title: "B2B White-Label",
    price: "$1K+/month",
    description: "Licensing for agencies",
    features: [
      "Resell templates under your brand",
      "Custom SLAs",
      "Full code access",
      "Dedicated account manager",
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
            Flexible Plans for Everyone
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            From solo developers to large agencies, we have a plan that fits.
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
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl">{offer.title}</CardTitle>
                <p className="text-4xl font-bold text-primary">{offer.price}</p>
                <p className="text-sm text-muted-foreground">{offer.description}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <ul className="space-y-4">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
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
