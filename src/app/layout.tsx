import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UpGrad Nano Skills Prototype",
  description: "A working prototype for UpGrad Nano Skills feature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="iphone-frame">
          {children}
        </div>
      </body>
    </html>
  );
}
