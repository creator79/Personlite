import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";
import { TracingBeam } from "@/components/aceternity/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivek Upadhyay",
  description: "This is my Portfolio  Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
