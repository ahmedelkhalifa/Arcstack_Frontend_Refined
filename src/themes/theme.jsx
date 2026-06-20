import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#004741", // Deep Emerald
      dark: "#00342F",
      light: "rgb(14, 98, 91)",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "rgb(200, 162, 74)", // Premium Gold
      dark: "#A8842E",
      light: "#D8B96A",
      contrastText: "#111827",
    },

    background: {
      default: "#F6F8F8",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#111827",
      secondary: "#5F6368",
    },

    divider: "#E5E7EB",

    success: {
      main: "#0E625B",
    },

    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E5E7EB",
      400: "#D1D5DB",
      500: "#9CA3AF",
      600: "#6B7280",
      700: "#4B5563",
      800: "#374151",
      900: "#111827",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Manrope",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 800,
      fontSize: "4.5rem",
      lineHeight: 0.95,
      letterSpacing: "-0.04em",
    },

    h2: {
      fontWeight: 800,
      fontSize: "3.5rem",
      lineHeight: 1,
      letterSpacing: "-0.03em",
    },

    h3: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.1,
    },

    h4: {
      fontWeight: 700,
      fontSize: "2rem",
    },

    h5: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },

    h6: {
      fontWeight: 700,
      fontSize: "1.25rem",
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },

    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
  },

  shape: {
    borderRadius: 16,
  },

  shadows: [
    "none",
    "0 2px 8px rgba(17,24,39,0.03)",
    "0 4px 12px rgba(17,24,39,0.04)",
    "0 8px 24px rgba(17,24,39,0.06)",
    "0 12px 32px rgba(17,24,39,0.08)",
    ...Array(20).fill(
      "0 20px 60px rgba(17,24,39,0.10)"
    ),
  ],

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: "12px 24px",
          boxShadow: "none",
        },
        containedPrimary: {
          background:
            "linear-gradient(135deg, #004741, #0E625B)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: "1px solid #E5E7EB",
          boxShadow: "0 8px 30px rgba(17,24,39,0.06)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;