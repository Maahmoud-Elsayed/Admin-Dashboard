import { useState } from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useTheme, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBarLayout = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <NavBar open={open} handleDrawer={handleDrawer} />

      <Box
        component={isMobile ? Dialog : "div"}
        open={open}
      >
        <SideBar open={open} handleDrawer={handleDrawer} />
      </Box>
    </>
  );
};

export default NavBarLayout;
