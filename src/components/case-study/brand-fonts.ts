import { Anton, Mulish, Roboto_Serif } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--font-brand-anton",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-brand-roboto-serif",
});

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-brand-mulish",
});

export const brandFontVariables = `${anton.variable} ${robotoSerif.variable} ${mulish.variable}`;
