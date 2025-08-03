import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 rounded-lg bg-gradient-to-br from-primary to-purple-600 p-8 md:grid-cols-2 md:p-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Launch Your Next App?
            </h2>
            <p className="mt-2 text-primary-foreground/80">
              Join our beta and discover how AppVault can accelerate your development cycle.
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
                Request Early Access
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/60">
              Sign up to get notified when we launch. No spam, we promise.
            </p>
          </div>
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
