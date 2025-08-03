import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function DemoVideoSection() {
  return (
    <section id="demo" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">See AppVault in Action</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch a quick walkthrough of how you can build and launch a fully functional app in just a few minutes.
          </p>
        </div>
        <Card className="mt-12 mx-auto max-w-4xl p-2 bg-card/50 backdrop-blur-sm border-border/20 shadow-2xl">
          <div className="aspect-video w-full overflow-hidden rounded-md relative flex items-center justify-center">
            <Image
              src="https://placehold.co/1200x675.png"
              alt="Demo video thumbnail showing a sleek app interface"
              width={1200}
              height={675}
              className="h-full w-full object-cover object-center"
              data-ai-hint="app interface"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="text-white group">
                    <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    <span className="sr-only">Play Video</span>
                </button>
            </div>
          </div>
        </Card>
        <div className="mt-8 text-center">
            <Button size="lg" variant="outline">Want to try it yourself? Get a Free Demo</Button>
        </div>
      </div>
    </section>
  );
}
