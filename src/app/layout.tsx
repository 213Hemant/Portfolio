import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
// import { Raleway_Dots } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
// const ralewayDots = Raleway_Dots({
//   subsets: ["latin"],
//   weight: "400", // Raleway Dots only has 400
//   variable: "--font-raleway-dots",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Engineering graduate portfolio with projects, skills, and resume.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={spaceGrotesk.variable}>
        {/* <html lang="en" suppressHydrationWarning className={ralewayDots.variable}> */}

      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
