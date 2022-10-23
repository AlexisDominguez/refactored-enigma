const theme = {
  backgroundColors: {
    secondary: "#EEE",
    gray: "#DDD",
  },
  spacing: {
    1: "1em",
    2: "0.5em",
  },
  colors: {
    primary: "#004299",
    secondary: "#EB3823",
    success: "#14A44D",
    danger: "#DC4C64",
  },
  fontColors: {
    white: "#FFF",
  },
  borderColors: {
    primary: "",
    secondary: "#CCC",
  },
  shadows: {
    buttonShadow: "1px 1px 5px rgba(0,0,0,0.40)",
  },
};

export type TColorsOptions = "primary" | "secondary" | "success" | "danger";

export default theme;
