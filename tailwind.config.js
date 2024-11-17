/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#FAFAFA",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        primary: {
          50: "#e2f2ff",
          100: "#baddff",
          200: "#8ac8ff",
          500: "#008fff",
          600: "#077fff",
          700: "#226cff", // 주로쓰일 색상
          800: "#2c58ec",
          900: "#3532cc",
        },
        secondary: {
          50: "#fbe8e7",
          100: "#ffc9bc",
          200: "#ffa592",
          300: "#ff8067",
          400: "#ff6347",
          500: "#ff432a",
          600: "#f43d26",
          700: "#e63621", // 주로쓰일 색상
          800: "#d82f1c",
          900: "#bf2113",
        },
        bg: {
          dark: "#1A1C1E",
          darkgray: "#292C31",
          gray: "#616161",
          backdrop: "rgba(0, 0, 0, 0.60)",
        },
        stroke: {
          1: "rgba(255, 255, 255, 0.20)",
        },
        graph: {
          error: {
            red: "#EA3449",
            follyPink: "#ED4F62",
            brightPink: "#F17E8C",
            blossom: "#F7B6BD",
            lightPink: "#FBDADE",
            yellow: "#FFD560",
          },
          success: {
            lightSkyBlue: "#87CEFA",
            brightSkyBlue: "#63ABFD",
            dodgerBlue: "#1E90FF",
            neonBlue: "#455EFF",
            darkTurquoise: "#00CED1",
            violet: "#9B58F0",
          },
        },
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1A1C1E",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#424242",
            borderRadius: "10px",
          },
        },
        ".flex-center": {
          "@apply flex items-center justify-center": "",
        },
        ".flex-col-center": {
          "@apply flex flex-col items-center justify-center": "",
        },
        ".box-common": {
          "@apply border border-stroke-1 bg-bg-darkgray": "",
        },
        ".hover-bg-default": {
          "@apply hover:bg-neutral-600 hover:bg-opacity-15": "",
        },
        ".main-background": {
          backgroundSize: "contain !important",
          backgroundRepeat: "no-repeat !important",
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0vh, rgba(26, 28, 30, 0.2) 60vh, rgba(26, 28, 30, 1) 80vh), url('/main/bg-image.jpg') no-repeat center top`,
        },
        ".main-background-mobile": {
          backgroundSize: "100vw 50vh !important",
          backgroundRepeat: "no-repeat !important",
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0vh, rgba(26, 28, 30, 0.2) 30vh, rgba(26, 28, 30, 1) 50vh), url('/main/bg-image.jpg') no-repeat center top`,
        },
        ".login-background": {
          backgroundSize: "cover !important",
          backgroundRepeat: "no-repeat !important",
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/main/bg-image.jpg')`,
        },
        ".login-background-mobile": {
          backgroundSize: "100vw  !important",
          backgroundRepeat: "no-repeat !important",
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/main/bg-image.jpg')`,
        },
        ".box-padding": {
          "@apply md:px-4 md:py-4 px-3 py-3": "",
        },
        ".checkbox-checked": {
          border: "transparent",
          borderRadius: "0.125rem",
          background: `url(/icons/utils/check.svg)`,
          backgroundColor: "#292C31", // darkgray
        },
        // 타이포그래피
        ".text-h1": {
          fontSize: "2.25rem",
          fontWeight: "600",
          lineHeight: "3.5625rem",
          letterSpacing: "-1.08px",
        },
        ".text-h2": {
          fontSize: "1.875rem",
          fontWeight: "400",
          lineHeight: "3rem",
          letterSpacing: "-0.75px",
        },
        ".text-h2-bold": {
          fontSize: "1.875rem",
          fontWeight: "600",
          lineHeight: "3rem",
          letterSpacing: "-0.9px",
        },
        ".text-h3": {
          fontSize: "1.5rem",
          fontWeight: "600",
          lineHeight: "2.25rem",
          letterSpacing: "-0.72px",
        },
        ".text-subhead1": {
          fontSize: " 1.125rem",
          fontWeight: "600",
          lineHeight: "1.6875rem",
          letterSpacing: "-0.36px",
        },
        ".text-body1-bold": {
          fontSize: "1rem",
          fontWeight: "600",
          lineHeight: "1.5rem",
          letterSpacing: "-0.32px",
        },
        ".text-body1": {
          fontSize: "1rem",
          fontWeight: "400",
          lineHeight: "1.5rem",
          letterSpacing: "-0.24px",
        },
        ".text-body2": {
          fontSize: "0.875rem",
          fontWeight: "400",
          lineHeight: "1.3125rem",
          letterSpacing: "-0.28px",
        },
        ".text-body2-bold": {
          fontSize: "0.875rem",
          fontWeight: "600",
          lineHeight: "1.3125rem",
          letterSpacing: "-0.28px",
        },
        ".text-caption": {
          fontSize: "0.75rem",
          fontWeight: "400",
          lineHeight: "1.125rem",
          letterSpacing: "-0.24px",
        },
        ".text-caption-bold": {
          fontSize: "0.75rem",
          fontWeight: "600",
          lineHeight: "1.3125rem",
          letterSpacing: "-0.24px",
        },
      });
    },
  ],
};
