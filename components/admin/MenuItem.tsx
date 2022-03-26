import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";

const activeColor = teal[600];
const bgColor = teal[50];
const textColor = grey[700];

const ListButton = styled(ListItemButton)({
  "&.MuiListItemButton-root": {
    margin: "2px 0",
    marginLeft: "8px",
  },
  "&.MuiButtonBase-root:hover": {
    backgroundColor: bgColor,
    borderRadius: "8px",
  },
  "&.MuiButtonBase-root:active": {
    backgroundColor: bgColor,
    borderRadius: "8px",
  },
  "&.MuiButtonBase-root:hover .MuiListItemText-primary": {
    color: activeColor,
  },
  "&.MuiButtonBase-root:hover .MuiListItemIcon-root ": {
    color: activeColor,
  },
  "&.MuiButtonBase-root:active .MuiListItemText-primary": {
    color: activeColor,
  },
  "&.MuiButtonBase-root:active .MuiListItemIcon-root ": {
    color: activeColor,
  },
  "& .MuiListItemText-primary": {
    transition: "all 0.1s ease-in-out",
  },
  "& .MuiListItemIcon-root": {
    color: textColor,
    transition: "all 0.1s ease-in-out",
  },
  "& .MuiTouchRipple-root": {
    color: teal[800],
    borderRadius: "8px",
  },
  transition: "all 0.1s ease-in-out",
});

const Text = styled(ListItemText)({
  "& .MuiListItemText-primary": {
    fontWeight: "300",
    fontSize: "14px",
  },
});

interface ItemProps {
  text: string;
  open: boolean;
  index: number;
  children: React.ReactNode;
}

const MenuItem: React.FC<ItemProps> = ({ children, text, open, index }) => {
  return (
    <ListButton
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
          marginRight: open ? "8px" : "0px",
        }}
      >
        {children}
      </ListItemIcon>
      <Text primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListButton>
  );
};

export default MenuItem;
