"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const earlyAccessFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type EarlyAccessFormValues = z.infer<typeof earlyAccessFormSchema>;

export default function CtaSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<EarlyAccessFormValues>({
    resolver: zodResolver(earlyAccessFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: EarlyAccessFormValues) => {
    setIsSubmitting(true);
    console.log(values);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    form.reset();

    toast({
      title: "Success!",
      description: "You've been added to our early access list. We'll be in touch soon!",
    });
  };

  return (
    <section id="cta" className="py-12 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 rounded-lg bg-gradient-to-br from-primary to-cyan-500 p-8 md:grid-cols-2 md:p-12 items-center">
                <div>
                    <h2 className="font-headline text-3xl font-bold text-primary-foreground md:text-4xl">
                    Ready to Launch Your Next App?
                    </h2>
                    <p className="mt-2 text-primary-foreground/80">
                    Join our beta and discover how AppVault can accelerate your development cycle.
                    </p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex-grow">
                            <FormControl>
                                <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20 focus:ring-accent"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-accent-foreground/80" />
                            </FormItem>
                        )}
                        />

                        <Button type="submit" size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="animate-spin" /> : "Request Early Access"}
                        </Button>
                    </div>
                    <p className="text-xs text-primary-foreground/60">
                        Sign up to get notified when we launch. No spam, we promise.
                    </p>
                    </form>
                </Form>
            </div>
        </div>
    </section>
  );
}
