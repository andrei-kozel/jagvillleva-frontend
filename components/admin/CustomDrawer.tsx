import React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import MenuItem from "./MenuItem";
import { grey, teal } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import OpenCloseButton from "./OpenCloseButton";
import ButtonCustom from "../ButtonCustom";
import { Button } from "@mui/material";

const drawerWidth = 200;
const textColor = grey[800];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  border: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  border: "none",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  marginLeft: "16px",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: "white",
  color: "black",
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const ContentBox = styled(Box)(() => ({
  backgroundColor: grey[100],
  padding: "20px",
  borderRadius: "8px 8px 0px 0px",
  minWidth: "100%",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  padding: "0px",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const HeaderText = styled(Typography)({
  color: textColor,
});

interface CustomDrawerProps {
  children: React.ReactNode;
}

const menuItems: { title: string; icon: string }[] = [
  { title: "Dashboard", icon: "dashboard" },
  { title: "Users", icon: "people" },
  { title: "Dogs", icon: "pets" },
  { title: "Posts", icon: "feed" },
  { title: "FAQ", icon: "quiz" },
  { title: "Settings", icon: "settings" },
];

export const CustomDrawer: React.FC<CustomDrawerProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const [search, setSearch] = React.useState("");

  const handleDrawerOpenClose = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    console.log("logout");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <OpenCloseButton onClick={handleDrawerOpenClose} open={open} />
          {/* TODO Searchbar */}
          <Box sx={{ justifySelf: "flex-end" }}>
            <Button
              onClick={handleLogout}
              variant="outlined"
              color="error"
              sx={{ padding: "6px 16px" }}
            >
              <Icon sx={{ marginRight: "8px" }}>logout</Icon>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <HeaderText variant="h6">Jag Vill Leva</HeaderText>
        </DrawerHeader>
        <List>
          {menuItems.map((item, index) => (
            <MenuItem
              index={index}
              text={item.title}
              open={open}
              key={`${item.title}-${index}`}
            >
              <Icon>{item.icon}</Icon>
            </MenuItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ width: "100%" }}>
        <DrawerHeader />
        <ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </ContentBox>
      </Box>
    </Box>
  );
};
