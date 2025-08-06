import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var shouldBeDark = theme === 'dark' || (!theme && prefersDark) || theme !== 'light';
                  
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                  }
                } catch (e) {
                  // Fallback to light mode if localStorage is not available
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200`}>
        {children}
      </body>
    </html>
  );
}
