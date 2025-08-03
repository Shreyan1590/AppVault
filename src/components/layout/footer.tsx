"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Download } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const isMobile = useIsMobile();
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
            <h3 className="font-headline text-2xl font-bold">Still have questions?</h3>
            <p className="mt-2 text-muted-foreground">Get in touch with our team for support or investment inquiries.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 max-w-lg">
              <a href="mailto:support@appvault.com" className="text-primary underline">Chat with us</a>
            </div>
          </div>
        </div>
        {isMobile && (
          <div className="mt-8 flex justify-center">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
          </div>
        )}
        <div className="mt-16 border-t border-border/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AppVault Inc. All rights reserved. <span className="hidden md:inline">Use code <code className="bg-secondary px-1.5 py-1 rounded-sm font-code">SCROLL10</code> for 10% off.</span></p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
