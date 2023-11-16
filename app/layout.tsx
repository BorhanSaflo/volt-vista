import { Suspense } from "react";
import "./globals.css";
import { Providers } from "./providers";
import { metadataObject } from "./metadata";

export const viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: "#2c2d30",
};
export const metadata = metadataObject;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Suspense>
          <Providers>
            <div className="relative h-screen w-screen">
              <span className="z-99999 absolute bottom-5 left-5 bg-[#b1e5c3] text-green-950 text-xs lg:text-sm font-black p-1 rounded-md opacity-60 cursor-default">
                This App Is a Prototype
              </span>
              {children}
            </div>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
