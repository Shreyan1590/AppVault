import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'AppVault Portfolio',
  description: 'Deploy Custom Apps in Minutes, Not Months.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@700,500,600&f[]=inter@400,500,600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}<Toaster /></body>
    </html>
  );
}
