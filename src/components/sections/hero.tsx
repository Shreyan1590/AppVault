"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, InfinityIcon } from "lucide-react";

export default function HeroSection() {
    const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 md:py-32"
    >
       <div
        aria-hidden="true"
        className="absolute inset-0 z-0 animate-gradient-xy bg-[length:200%_200%] bg-gradient-to-br from-background via-primary/10 to-background"
      ></div>
       <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      ></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
         Stop Wasting Time Building Apps. <br/> Start <span className="text-primary">Launching in Minutes</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Join 10,000+ teams saving 12+ hours/week by deploying production-ready app templates with our powerful no-code editor.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse" onClick={scrollToContact}>
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-16 mx-auto max-w-5xl p-2 bg-card/50 backdrop-blur-sm border-border/20 shadow-2xl rounded-lg">
            <div className="bg-background/80 rounded-lg p-2">
                <div className="aspect-video w-full overflow-hidden rounded-md">
                     <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                        alt="A user customizing an application in the AppVault no-code editor, with a marketplace of templates visible."
                        width={1200}
                        height={675}
                        className="h-full w-full object-cover object-center"
                        data-ai-hint="app builder interface"
                        priority
                     />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
