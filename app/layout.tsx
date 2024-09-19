import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "Finance App",
  description: "Finance management and analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={inter.className}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            <QueryProvider>
              <SheetProvider />
              <Toaster />
              {children}
            </QueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
