//COLORS
const primaryMain = "#A6CF4D";
const primaryLight = "#D9F3A1";
const secondaryMain = "#00BCEA";
const tertiaryMain = "#C1C1C1";
const backgroundLight = "#FFFFFF";
const onBackgroundVariant = "#FFFFFF";
const onBackgroundVariantAlpha = "#ffffffde";
const transparent = "#00000000";
const danger = "#e3342f";
//

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.svelte"],
  theme: {
    textColor: {
      "primary-main": primaryMain,
      "primary-light": primaryLight,
      "secondary-main": secondaryMain,
      "tertiary-main": tertiaryMain,
      "on-background-variant": onBackgroundVariant,
      "on-background-variant-alpha": onBackgroundVariantAlpha,
      transparent: transparent,
      danger: danger,
    },
    backgroundColor: {
      "primary-main": primaryMain,
      "primary-light": primaryLight,
      "secondary-main": secondaryMain,
      "tertiary-main": tertiaryMain,
      "background-light": backgroundLight,
      "on-background-variant": onBackgroundVariant,
      "on-background-variant-alpha": onBackgroundVariantAlpha,
      transparent: transparent,
      danger: danger,
    },
    spacing: {
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      120: "120px",
      132: "132px",
      148: "148px",
      168: "168px",
      200: "200px",
      240: "240px",
      360: "360px",
      400: "400px",
      440: "440px",
      480: "480px",
      520: "520px",
      640: "640px",
      720: "720px",
      800: "800px",
      960: "960px",
      1120: "1120px",
      1200: "1200px",
      1600: "1600px",
      sm: "8px",
      md: "16px",
      lg: "32px",
      xl: "48px",
    },
    fontSize: {
      xs: "12px",
      sm: "16px",
      md: "18px",
      lg: "24px",
      xl: "36px",
      "2xl": "44px",
      "3xl": "56px",
      "4xl": "64px",
    },
    maxWidth: {
      sm: "25%",
      md: "50%",
      lg: "65%",
      xl: "75%",
      full: "100%",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      lineHeight: {
        "6xl": "96px",
        "5xl": "72px",
        "4xl": "64px",
        "3xl": "56px",
        md: "32px",
      },
    },
  },
};
