import "@material-ui/core/styles";
declare module "@mui/material/styles" {
  interface Palette {
    gradient: string;
    purple: Palette["primary"];
  }

  interface PaletteOptions {
    gradient: string;
    purple: PaletteOptions["primary"];
  }
}
