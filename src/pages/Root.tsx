import NavBarLayout from "../components/navBar/NavBarLayout";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { DrawerHeader } from "../theme/ThemeComponents";




const RootLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBarLayout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default RootLayout;
