import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { Fragment } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const menuItems = [
  {
    header: "Data",
    items: [
      {
        title: "Manage Team",
        to: "/team",
        icon: <PeopleOutlinedIcon />,
      },
      {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
      },
      {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    header: "Pages",
    items: [
      {
        title: "Create user",
        to: "/newUser",
        icon: <PersonOutlinedIcon />,
      },
      {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },
      {
        title: "FAQ",
        to: "/faq",
        icon: <HelpOutlineOutlinedIcon />,
      },
    ],
  },
  {
    header: "Charts",
    items: [
      {
        title: "Bar Chart",
        to: "/bar",
        icon: <BarChartOutlinedIcon />,
      },
      {
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlineOutlinedIcon />,
      },
      {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlinedIcon />,
      },
      {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlinedIcon />,
      },
    ],
  },
];

type SideBarItemsProps = {
  open: boolean;
  handleDrawer: () => void;
};

const SideBarItems = ({ open, handleDrawer }: SideBarItemsProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const drawerHandler = () => {
    if (isMobile) {
      handleDrawer();
    }
    return;
  };
  return (
    <>
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={drawerHandler}
            component={Link}
            to="/"
            selected={location.pathname === "/"}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              "&.Mui-selected": {
                background: `${theme.palette.gradient}!important`,
                color: "grey.100",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: "inherit",
              }}
            >
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              sx={{
                opacity: open ? 1 : 0,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      {menuItems.map((section, sectionIndex) => (
        <Fragment key={sectionIndex}>
          <List
            subheader={
              <ListSubheader
                sx={{
                  px: { xs: !open ? "0" : "16px", md: !open ? "20px" : "16px" },
                  textAlign: { xs: !open ? "center" : "left", md: "left" },
                }}
              >
                {section.header}
              </ListSubheader>
            }
          >
            <ListSubheader />
            {section.items.map((item, itemIndex) => (
              <ListItem
                key={itemIndex}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  onClick={drawerHandler}
                  component={Link}
                  to={item.to}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    "&.Mui-selected": {
                      background: `${theme.palette.gradient}!important`,
                      color: `${grey[100]}`,
                    },
                  }}
                  selected={location.pathname === item.to}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "inherit",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Fragment>
      ))}
    </>
  );
};

export default SideBarItems;
