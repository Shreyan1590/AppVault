import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is AppVault different from Bubble or Webflow?",
    answer:
      "AppVault is designed for speed and specialization. While platforms like Bubble are powerful general-purpose no-code builders for creating apps from scratch, AppVault starts with 50+ pre-built, production-ready app templates (like Uber or Tinder clones). Our focus is on customizing and deploying proven concepts in a fraction of the time. We also offer robust white-labeling solutions for agencies, which is a core part of our B2B offering.",
  },
  {
    question: "Can I export the code?",
    answer:
      "Yes! All our templates are built on clean, modern frameworks. With our B2B and White-Label plans, you get full access to the source code, allowing you to host it on your own infrastructure and customize it without limitations.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard encryption and security protocols to ensure your data is safe and secure. Our infrastructure is built on enterprise-grade providers to guarantee reliability and protection."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll retain access to your account and applications until the end of your billing period. There are no long-term contracts or hidden fees."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-12 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Answers to common questions about AppVault.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
