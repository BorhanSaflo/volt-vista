import { Metadata } from "next";

const title = "Volt Vista";
const description = "Volt Vista";
const url = "https://volt.borhansaflo.com";

export const metadataObject: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description: description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: url,
    title: title,
    description: description,
    images: `${url}/images/logo/logo-bg.png`,
  },
  twitter: {
    card: "app",
    title: title,
    description: description,
    images: {
      url: `${url}/images/logo/logo-bg.png`,
      alt: title,
    },
    app: {
      name: title,
      id: {
        iphone: url,
        ipad: url,
        googleplay: url,
      },
      url: {
        iphone: url,
        ipad: url,
      },
    },
  },
};
