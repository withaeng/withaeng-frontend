import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        main: "#FFA500",
        light: "#FFC570",
        exLight: "#FFDD95",
        pressing: "#f2a10d",
      },
      secondary: {
        main: "#3652AD",
        light: "#718EED",
      },
      nutral: {
        black: {
          "01": "#131313",
          "02": "#333333",
          "03": "#535353",
          "04": "#737373",
          "05": "#939393",
        },
        white: {
          "01": "#ffffff",
          "02": "#faf8f6",
          "03": "#dad8d6",
          "04": "#babbb6",
        },
      },
      caption: {
        "01": "ec5c53",
        "02": "f8867e",
      },
    },
    fontSize: {
      "display-01": [
        "60px",
        {
          fontWeight: "600",
          lineHeight: "auto",
        },
      ],
      "display-02": [
        "48px",
        {
          fontWeight: "600",
          lineHeight: "auto",
        },
      ],
      "headline-01": [
        "40px",
        {
          fontWeight: "600",
          lineHeight: "auto",
        },
      ],
      "headline-02": [
        "32px",
        {
          fontWeight: "600",
          lineHeight: "auto",
        },
      ],
      "headline-03": [
        "28px",
        {
          fontWeight: "600",
          lineHeight: "auto",
        },
      ],
      "headline-04": [
        "20px",
        {
          fontWeight: "600",
          lineHeight: "auto",
        },
      ],
      "subtitle-01": [
        "16px",
        {
          fontWeight: "600",
          lineHeight: "20px",
        },
      ],
      "subtitle-02": [
        "14px",
        {
          fontWeight: "600",
          lineHeight: "20px",
        },
      ],
      "body-01": [
        "18px",
        {
          fontWeight: "400",
          lineHeight: "auto",
        },
      ],
      "body-02": [
        "16px",
        {
          fontWeight: "400",
          lineHeight: "auto",
        },
      ],
      "body-03": [
        "14px",
        {
          fontWeight: "300",
          lineHeight: "auto",
        },
      ],
      "caption-01": [
        "12px",
        {
          fontWeight: "500",
          lineHeight: "auto",
        },
      ],
      "caption-02": [
        "12px",
        {
          fontWeight: "400",
          lineHeight: "auto",
        },
      ],
      "caption-03": [
        "10px",
        {
          fontWeight: "300",
          lineHeight: "auto",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
