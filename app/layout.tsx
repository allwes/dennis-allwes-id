import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "./component/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dennis Adiwinata Irwan Soeroso | Data Scientist, AI Engineer",
  description:
    "Dennis Adiwinata Irwan Soeroso is a Data Scientist, AI Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}
        bg-white
        leading-relaxed
        text-slate-500
        antialiased
        selection:bg-primary
        selection:text-white
      `}
      >
        <CustomCursor />
        <div className="mx-auto max-w-screen-xl min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
