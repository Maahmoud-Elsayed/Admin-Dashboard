import { Typography, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SideBarItems from "./SideBarItems";
import { Drawer, DrawerHeader } from "../../theme/ThemeComponents";

type SideBarProps = {
  open: boolean;
  handleDrawer: () => void;
};

const SideBar = ({ open, handleDrawer }: SideBarProps) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader
        sx={{
          display: "flex",
          pl: open ? "20px" : "8px",
          justifyContent: "end",
          backgroundColor: `${theme.palette.background.default}`,
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          color="secondary"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: open ? "block" : "none",
          }}
        >
          Mahmoud
        </Typography>
        <IconButton onClick={handleDrawer}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Divider />
      <SideBarItems open={open} handleDrawer={handleDrawer} />
    </Drawer>
  );
};
export default SideBar;
