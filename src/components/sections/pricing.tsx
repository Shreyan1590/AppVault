"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import React from "react";

const pricingTiers = {
  monthly: [
    {
      title: "Developer",
      price: "$29",
      features: [
        "Access to all app templates",
        "No-code drag-and-drop editor",
        "Deploy one project",
        "Community support",
      ],
      missingFeatures: [
        "Team collaboration",
        "Connect custom domains",
        "API integrations & webhooks",
        "Full source code export",
      ],
      buttonText: "Get Started",
      variant: "outline",
    },
    {
      title: "Business",
      price: "$99",
      features: [
        "Everything in Developer, plus:",
        "Team collaboration (up to 5 users)",
        "Connect custom domains",
        "API integrations & webhooks",
        "Priority email support",
      ],
      missingFeatures: ["Full source code export"],
      buttonText: "Start 14-Day Trial",
      variant: "default",
      badge: "Recommended 🔥",
    },
    {
      title: "Agency",
      price: "$249",
      features: [
        "Everything in Business, plus:",
        "White-labeling solution",
        "Full source code export",
        "Dedicated account manager",
        "Custom SLAs",
      ],
      missingFeatures: [],
      buttonText: "Contact Sales",
      variant: "outline",
    },
  ],
  annually: [
    {
      title: "Developer",
      price: "$24",
      features: [
        "Access to all app templates",
        "No-code drag-and-drop editor",
        "Deploy one project",
        "Community support",
      ],
      missingFeatures: [
        "Team collaboration",
        "Connect custom domains",
        "API integrations & webhooks",
        "Full source code export",
      ],
      buttonText: "Get Started",
      variant: "outline",
    },
    {
      title: "Business",
      price: "$83",
      features: [
        "Everything in Developer, plus:",
        "Team collaboration (up to 5 users)",
        "Connect custom domains",
        "API integrations & webhooks",
        "Priority email support",
      ],
      missingFeatures: ["Full source code export"],
      buttonText: "Start 14-Day Trial",
      variant: "default",
      badge: "Recommended 🔥",
    },
    {
      title: "Agency",
      price: "$208",
      features: [
        "Everything in Business, plus:",
        "White-labeling solution",
        "Full source code export",
        "Dedicated account manager",
        "Custom SLAs",
      ],
      missingFeatures: [],
      buttonText: "Contact Sales",
      variant: "outline",
    },
  ],
};

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annually">("annually");

    const scrollToContact = () => {
        const contact = document.getElementById('contact');
        if (contact) {
        contact.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="pricing" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            The No-Brainer Choice for Your Next Project
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Choose a plan that scales with you. 7-day free trial. No credit card needed.
          </p>
        </div>
        
        <div className="mt-8 flex justify-center items-center gap-4">
            <Label htmlFor="billing-cycle">Monthly</Label>
            <Switch 
                id="billing-cycle" 
                checked={billingCycle === 'annually'}
                onCheckedChange={(checked) => setBillingCycle(checked ? 'annually' : 'monthly')}
            />
            <Label htmlFor="billing-cycle">Annually <Badge variant="secondary">Save 15%</Badge></Label>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(pricingTiers[billingCycle]).map((tier, index) => (
            <Card
              key={index}
              className={`flex flex-col relative ${
                tier.variant === "default" ? "border-2 border-primary shadow-lg shadow-primary/20" : ""
              }`}
            >
              {tier.badge && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold">{tier.badge}</Badge>}
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-headline text-2xl">{tier.title}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {tier.missingFeatures.map((feature, i) => (
                     <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  variant={tier.variant as "default" | "outline"}
                  onClick={scrollToContact}
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
