import { Fraunces, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import resume from "@/data/resume";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: `${resume.name} — Design Portfolio Resume`,
  description: resume.thesis,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${publicSans.variable} ${jetbrains.variable} font-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
