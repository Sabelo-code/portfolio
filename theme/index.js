import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      coral: "#ff6b6b",
      blue: "#4dabf7",
      yellow: "#ffd43b",
      mint: "#e6fcf5",
    },
    text: {
      dark: "#2d3748",
      muted: "#718096",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif", // playful rounded headings
    body: "Inter, sans-serif",
  },
});

export default theme;
