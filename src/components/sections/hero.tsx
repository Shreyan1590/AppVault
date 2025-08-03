"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Globe, InfinityIcon } from "lucide-react";

export default function HeroSection() {
    const scrollToOfferings = () => {
    const offerings = document.getElementById('offerings');
    if (offerings) {
      offerings.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const scrollToContact = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-cyan-400"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-blue-400 to-sky-300"></div>
      </div>
       <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      ></div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build & Launch Your App <br/> in <span className="text-primary">Record Time</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Leverage our library of 50+ production-ready app templates and a powerful no-code editor to go from idea to launch faster than ever before.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={scrollToContact}>
            Start Building for Free
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToOfferings}>
            Explore Templates
          </Button>
        </div>

        <div className="mt-16">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Trusted by innovative companies worldwide
            </p>
            <div className="mt-6 flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
                <InfinityIcon className="h-8 w-auto text-muted-foreground" />
                <Globe className="h-8 w-auto text-muted-foreground" />
                <Code className="h-8 w-auto text-muted-foreground" />
                <p className="font-bold text-2xl text-muted-foreground">QuantumLeap</p>
                <p className="font-bold text-2xl text-muted-foreground">NexusCorp</p>
            </div>
        </div>

        <Card className="mt-12 mx-auto max-w-5xl p-2 bg-card/50 backdrop-blur-sm border-border/20 shadow-2xl">
            <div className="bg-background/80 rounded-lg p-2">
                <div className="aspect-video w-full overflow-hidden rounded-md">
                     <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                        alt="A user customizing an application in the AppVault no-code editor, with a marketplace of templates visible."
                        width={1200}
                        height={675}
                        className="h-full w-full object-cover object-center"
                        data-ai-hint="app builder interface"
                     />
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
