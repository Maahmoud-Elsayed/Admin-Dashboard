import { PaletteMode } from "@mui/material";
export const getDesignTokens = (mode: PaletteMode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: "#0058b2",
            },
            secondary: {
              main: "#4cceac",
            },
            background: {
              default: "#1a2035",
              paper: "#202940",
            },
            text: {
              primary: "#ffffffcc",
              secondary: "#FFFFFF",
            },
            purple: {
              main: "#800080",
              light: "#993299",
              dark: "#660066",
            },
            gradient:
              "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
          }
        : {
            primary: {
              main: "#007FFF",
            },
            secondary: {
              main: "#009d06",
            },
            text: {
              primary: "#344767",
              secondary: "#7b809a",
            },
            background: {
              default: "#f0f2f5",
              paper: "#FFFFFF",
            },
            purple: {
              main: "#993299",
              light: "#993299",
              dark: "#800080",
            },
            gradient:
              "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
          }),
    },
    components: {
      MuiPaper: {
        defaultProps: {
          variant: "outlined" as const,
        },
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
    },

    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
