import { useState } from "react";
import { Box, Slide, useScrollTrigger, useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { InputAdornment, OutlinedInput } from "@mui/material";
import useThemeMode from "../../hooks/useThemeMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Tooltip from "@mui/material/Tooltip";
import { AppBar } from "../../theme/ThemeComponents";
import DropMenuIcon from "./DropMenuIcon";
import SearchInput from "./SearchInput";

type NavBarProps = {
  open: boolean;
  handleDrawer: () => void;
};
const accountMenu = [
  {
    title: "Profile",
    icon: (
      <Avatar
        alt="Profile Picture"
        src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
        sx={{ width: 30, height: 30 }}
      />
    ),
  },
  { title: "My account", icon: <Avatar /> },
  { title: "Add another account", icon: <PersonAdd fontSize="small" /> },
  { title: "Settings", icon: <Settings fontSize="small" /> },
  { title: "Logout", icon: <Logout fontSize="small" /> },
];
const notificationsMenu = [
  {
    title: "This is simple notification ...",
    icon: (
      <Badge variant="dot" color="error">
        <NotificationsOutlinedIcon />
      </Badge>
    ),
  },
  {
    title: "This is simple notification ...",
    icon: (
      <Badge variant="dot" color="error">
        <NotificationsOutlinedIcon />
      </Badge>
    ),
  },
  {
    title: "This is simple notification ...",
    icon: (
      <Badge variant="dot" color="error">
        <NotificationsOutlinedIcon />
      </Badge>
    ),
  },
  {
    title: "This is simple notification ...",
    icon: (
      <Badge variant="dot" color="error">
        <NotificationsOutlinedIcon />
      </Badge>
    ),
  },
];
const messagesMenu = [
  {
    title: "This is simple message from ...",
    icon: (
      <Badge variant="dot" color="error">
        <EmailOutlinedIcon />
      </Badge>
    ),
  },
  {
    title: "This is simple message from ...",
    icon: (
      <Badge variant="dot" color="error">
        <EmailOutlinedIcon />
      </Badge>
    ),
  },
  {
    title: "This is simple message from ...",
    icon: (
      <Badge variant="dot" color="error">
        <EmailOutlinedIcon />
      </Badge>
    ),
  },
];

const NavBar = ({ open, handleDrawer }: NavBarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const theme = useTheme();
  const colorMode = useThemeMode();

  const trigger = useScrollTrigger();

  const openSearchHandler = () => {
    setIsSearchOpen(true);
  };
  const closeSearchHandler = () => {
    setIsSearchOpen(false);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar open={open} enableColorOnDark color="transparent">
        <Toolbar
          sx={{
            backgroundColor: `${theme.palette.background.default}`,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              mr: { xs: 0, sm: 5 },
              ml: { xs: 0, sm: "-12px" },
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box width="100%" sx={{ position: "relative", zIndex: 1 }}>
            <Slide
              direction="down"
              in={isSearchOpen}
              mountOnEnter
              unmountOnExit
            >
              <SearchInput closeSearchHandler={closeSearchHandler} />
            </Slide>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexGrow: 1,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <OutlinedInput
                  size="small"
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    ml: open ? 0 : "6px",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton size="small" type="button" color="inherit">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Search"
                />
              </Box>

              <Box sx={{ display: { xs: "block", sm: "none" }, ml: 1 }}>
                <IconButton
                  onClick={openSearchHandler}
                  size="small"
                  type="button"
                  color="inherit"
                  sx={{ backgroundColor: theme.palette.background.paper }}
                >
                  <SearchIcon sx={{ fontSize: "22px" }} />
                </IconButton>
              </Box>

              <Box display="flex">
                <Tooltip
                  title={
                    theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"
                  }
                >
                  <IconButton
                    onClick={colorMode?.toggleColorMode}
                    size="small"
                    color="inherit"
                    aria-controls="switch-mode"
                    aria-haspopup="true"
                  >
                    {theme.palette.mode === "dark" ? (
                      <DarkModeOutlinedIcon sx={{ fontSize: "22px" }} />
                    ) : (
                      <LightModeOutlinedIcon sx={{ fontSize: "22px" }} />
                    )}
                  </IconButton>
                </Tooltip>
                <DropMenuIcon
                  menuItems={messagesMenu}
                  toolTip="Messages"
                  id="messages-menu"
                  mainIcon={
                    <Badge badgeContent={3} color="error">
                      <EmailOutlinedIcon sx={{ fontSize: "22px" }} />
                    </Badge>
                  }
                  divider={true}
                />
                <DropMenuIcon
                  menuItems={notificationsMenu}
                  toolTip="Notifications"
                  id="notifications-menu"
                  mainIcon={
                    <Badge badgeContent={4} color="error">
                      <NotificationsOutlinedIcon sx={{ fontSize: "24px" }} />
                    </Badge>
                  }
                  divider={true}
                />
                <DropMenuIcon
                  menuItems={accountMenu}
                  toolTip="Account settings"
                  id="account-menu"
                  mainIcon={
                    <Avatar
                      alt="Profile Picture"
                      src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      sx={{ width: 32, height: 32, mt: "-3px" }}
                    />
                  }
                  divider={false}
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default NavBar;
