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
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    form.reset();

    toast({
      title: "Success!",
      description: "You've been added to the beta waitlist. We'll be in touch!",
    });
  };

  return (
    <footer id="contact" className="border-t border-border/20 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
                <div className="flex flex-col items-start">
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
                    <p className="mt-2 text-base text-muted-foreground">
                    Custom Apps in Minutes, Not Months.
                    </p>
                </div>
                 <div className="mt-8 flex items-center gap-4">
                    <a href="mailto:support@appvault.com" className="text-muted-foreground transition-colors hover:text-primary"><Mail className="h-5 w-5" /></a>
                    <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Twitter className="h-5 w-5" /></a>
                    <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Github className="h-5 w-5" /></a>
                    <a href="#" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></a>
                </div>
            </div>
            <div className="md:col-span-8">
                <h3 className="font-headline text-2xl font-bold">Ready to Launch Your Next App?</h3>
                <p className="mt-2 text-muted-foreground">Join our beta and discover how AppVault can accelerate your development cycle.</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 flex flex-col sm:flex-row gap-4 max-w-lg">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                <Input type="email" placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                            {isSubmitting ? <Loader2 className="animate-spin" /> : "Request Early Access"}
                        </Button>
                    </form>
                    <p className="mt-2 text-sm text-muted-foreground">Sign up to get notified when we launch. No spam, we promise.</p>
                </Form>
            </div>
        </div>
        <div className="mt-16 border-t border-border/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AppVault Inc. All rights reserved. <span className="hidden md:inline">Use code <code className="bg-secondary px-1.5 py-1 rounded-sm font-code">SCROLL10</code> for 10% off.</span></p>
            <div className="flex items-center gap-4 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
                <a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
