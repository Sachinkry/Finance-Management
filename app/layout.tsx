import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import "./globals.css";

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
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
