"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Loader2, Mail, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const earlyAccessFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type EarlyAccessFormValues = z.infer<typeof earlyAccessFormSchema>;

export default function Footer() {
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
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 py-12 md:py-24">
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
        <div className="mt-12 flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <a href="/" className="flex items-center gap-2">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
              <span className="font-headline text-xl font-bold">AppVault</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Custom Apps in Minutes, Not Months.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Contact</span>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border/20 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} AppVault Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}