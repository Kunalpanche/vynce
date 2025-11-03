import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vynce | Chat with Multiple AI Models at Once",
  description:
    "Unlock the power of multi-model AI. Chat with GPT-4, Claude, Gemini, and more — compare insights, streamline workflows, and get better answers faster with Vynce.",
    icons: {
    icon: "/logo.svg", // or .png, .svg
  },
  };


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
