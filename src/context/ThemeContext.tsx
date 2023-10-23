import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "../theme/theme";
import { CssBaseline, PaletteMode } from "@mui/material";

type ThemeContextValue = {
  toggleColorMode: () => void;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// context for color mode
export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
