import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkVine",
  description:
    "LinkVine is your all-in-one link management platform, designed to help you effortlessly organize and share all your important links in one place. Whether you're a creator, brand, or business, LinkVine allows you to grow your online presence and connect with your audience seamlessly. With a simple interface and customizable options, LinkVine lets you build a personalized hub that branches out to every part of your digital world.",
  openGraph: {
    siteName: "LinkVine",
    url: "https://www.sswapping.dev/",
  },
  twitter: {
    title: "LinkVine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
