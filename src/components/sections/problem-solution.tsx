import { ArrowRight } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Problem Side */}
          <div className="bg-background/50 p-8 rounded-lg">
            <h3 className="font-headline text-3xl font-bold flex items-center gap-3">
              The Old Way 😤
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Traditional development is a slow, expensive nightmare.
            </p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary mt-1">&bull;</span>
                <span><span className="text-foreground font-semibold">Manual Work:</span> Hundreds of hours writing boilerplate code and fixing bugs.</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="font-bold text-primary mt-1">&bull;</span>
                <span><span className="text-foreground font-semibold">Costly Errors:</span> Small mistakes lead to big delays and budget overruns.</span>
              </li>
              <li className="flex items-start gap-3">
                 <span className="font-bold text-primary mt-1">&bull;</span>
                <span><span className="text-foreground font-semibold">Wasted Money:</span> Average app development costs over $50,000 and takes 6-12 months.</span>
              </li>
            </ul>
          </div>

          {/* Solution Side */}
          <div className="bg-primary/10 p-8 rounded-lg">
             <h3 className="font-headline text-3xl font-bold flex items-center gap-3">
              The AppVault Way 😍
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              Launch faster and smarter with production-ready solutions.
            </p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><span className="text-foreground font-semibold">50+ Templates:</span> Instantly deploy clones of popular apps.</span>
              </li>
              <li className="flex items-start gap-3">
                 <ArrowRight className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><span className="text-foreground font-semibold">No-Code Editor:</span> Customize everything with drag-and-drop.</span>
              </li>
               <li className="flex items-start gap-3">
                 <ArrowRight className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><span className="text-foreground font-semibold">One-Click Deploy:</span> Go from idea to live in minutes, not months.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
