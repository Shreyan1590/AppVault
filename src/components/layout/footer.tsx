
"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Linkedin, Loader2, Mail, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;


export default function Footer() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    console.log(values);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    form.reset();

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon!",
    });
  };

  return (
    <footer id="contact" className="bg-card border-t border-border/20 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
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
                 <div className="mt-8">
                    <h3 className="font-headline text-lg font-bold">Get in Touch</h3>
                    <p className="text-muted-foreground mt-2">Have questions? We'd love to hear from you.</p>
                     <a href="mailto:support@appvault.com" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
                        <Mail className="h-5 w-5" /> support@appvault.com
                    </a>
                 </div>
            </div>
            <Card className="bg-background/50 border-border/20">
                <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                            <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                            <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Message"}
                    </Button>
                    </form>
                </Form>
                </CardContent>
            </Card>
        </div>
        <div className="mt-16 border-t border-border/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AppVault Inc. All rights reserved.</p>
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
            </div>
        </div>
      </div>
    </footer>
  );
}
