import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import DarkModeToggle from "./components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurabh Maurya - Portfolio",
  description: "MERN Developer | Blockchain Enthusiast | DevOps Learner",
  keywords: ["Saurabh Maurya", "MERN Stack", "Blockchain", "DevOps", "Full Stack Developer"],
  authors: [{ name: "Saurabh Maurya" }],
  creator: "Saurabh Maurya",
  openGraph: {
    title: "Saurabh Maurya - Portfolio",
    description: "MERN Developer | Blockchain Enthusiast | DevOps Learner",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body className={`${inter.className} bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#262626] dark:text-[#F5F5F5] transition-colors duration-300`}>
        <ThemeProvider>
          <DarkModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
