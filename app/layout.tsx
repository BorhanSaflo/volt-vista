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
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
