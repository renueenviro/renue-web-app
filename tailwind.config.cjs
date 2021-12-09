//COLORS
const primaryMain = "#A6CF4D";
const secondaryMain = "#00BCEA";
const tertiaryMain = "#C1C1C1";
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
      "secondary-main": secondaryMain,
      "tertiary-main": tertiaryMain,
      "on-background-variant": onBackgroundVariant,
      "on-background-variant-alpha": onBackgroundVariantAlpha,
      transparent: transparent,
      danger: danger,
    },
    backgroundColor: {
      "primary-main": primaryMain,
      "secondary-main": secondaryMain,
      "tertiary-main": tertiaryMain,
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
      32: "32px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      148: "148px",
      168: "168px",
      200: "200px",
      240: "240px",
      400: "400px",
      640: "640px",
      720: "720px",
      800: "800px",
      sm: "8px",
      md: "16px",
      lg: "32px",
      xl: "48px",
    },
    maxWidth: {
      sm: "25%",
      md: "50%",
      lg: "75%",
    },
  },
};
