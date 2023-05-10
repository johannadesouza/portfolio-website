module.exports = {
  theme: {
    extend: {
      colors: {
        Gray: {
          500: "#595959",
          700: "#999999",
          900: "#D9D9D9",
          Black: "#000000",
          White: "#FFFFFF"
        },
        Success: {
          300: "#199033",
          500: "#32A94C",
          700: "#4CC366"
        },
        Primary: {
          100: "#003EB3",
          300: "#0074F0",
          500: "#14A9FF",
          700: "#85DCFF"
        },
        Danger: {
          300: "#A22020",
          500: "#BF2626",
          700: "#E14747"
        },
        foreground: "#000000",
        background: "#FFFFFF"
      },
      spacing: {
        FourUnits: "64px",
        ThreeUnits: "48px",
        Unit: "16px",
        SixUnits: "96px",
        OneAndHalfUnits: "24px",
        TwoUnits: "32px",
        FiveUnits: "80px",
        HalfUnit: "8px"
      },
      borderRadius: {
        Round: "50%",
        Radius8: "8px",
        Radius2: "2px",
        Radius4: "4px"
      },
      scale: {
        XSmall: "16px",
        Small: "48px",
        XLarge: "192px",
        XXLarge: "288px",
        MaxWidth: "1400px",
        Large: "144px",
        Medium: "96px"
      }
    }
  },
  plugins: [],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}
