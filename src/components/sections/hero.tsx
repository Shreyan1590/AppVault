/*
15-Second Explainer Video Script:

(Scene: Fast-paced montage of different app UIs - social media, delivery, booking)
VO (Upbeat & Energetic): Tired of building apps from scratch? It's slow. It's expensive.

(Scene: Split screen. Left: A user scrolls through AppVault's template marketplace. Right: The same user drag-and-drops a new logo onto a template in the no-code editor.)
VO: Introducing AppVault. Choose from 50+ pre-built app templates and customize them in minutes.

(Scene: A finger taps a "Deploy" button on a screen. The app UI instantly appears on a phone.)
VO: Deploy your custom app today.

(End Scene: AppVault Logo and tagline)
On-screen text: AppVault. Custom Apps in Minutes, Not Months. Get Started Free.
*/
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
      </div>
       <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      ></div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Deploy Custom Apps in <span className="text-primary">Minutes</span>,
          <br />
          Not Months
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          The only platform that combines ready-made app templates with no-code
          customization for businesses and developers.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started Free
          </Button>
          <Button size="lg" variant="outline">
            View Templates
          </Button>
        </div>

        <Card className="mt-12 mx-auto max-w-5xl p-2 bg-card/50 backdrop-blur-sm border-border/20 shadow-2xl">
            <div className="bg-background/80 rounded-lg p-2">
                <div className="aspect-video w-full overflow-hidden rounded-md">
                     <Image
                        src="https://placehold.co/1200x600.png"
                        alt="AppVault Platform Showcase"
                        width={1200}
                        height={600}
                        className="h-full w-full object-cover object-center"
                        data-ai-hint="template marketplace no-code editor"
                     />
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
