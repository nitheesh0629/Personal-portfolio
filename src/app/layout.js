import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "B. Nitheesh Kumar — Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of experience specializing in the MERN stack. Building scalable web applications for the healthcare domain and beyond. Based in Chennai, India.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "Software Engineer",
    "Chennai",
    "Healthcare",
    "B. Nitheesh Kumar",
    "TCS",
  ],
  authors: [{ name: "B. Nitheesh Kumar" }],
  creator: "B. Nitheesh Kumar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "B. Nitheesh Kumar — Full Stack Developer",
    description:
      "Full Stack Developer specializing in the MERN stack. Building scalable web applications.",
    siteName: "Nitheesh Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "B. Nitheesh Kumar — Full Stack Developer",
    description: "Full Stack Developer specializing in the MERN stack.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-[#FAFAF8] text-[#1C1C1C] antialiased`}>
        {children}
      </body>
    </html>
  );
}
