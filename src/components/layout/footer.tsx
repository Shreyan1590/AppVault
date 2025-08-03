import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 rounded-lg bg-gradient-to-br from-primary to-purple-600 p-8 md:grid-cols-2 md:p-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary-foreground md:text-4xl">
              Join Our Beta – Limited Free Access
            </h2>
            <p className="mt-2 text-primary-foreground/80">
              Be the first to experience AppVault 2.0 and shape the future of no-code.
            </p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20 focus:ring-accent"
              />
              <Button type="submit" size="lg" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Early Access
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60">
              Sign up to get notified when we launch. No spam, we promise.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="font-headline text-xl font-bold">AppVault</div>
          <div className="flex items-center gap-4">
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
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AppVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
