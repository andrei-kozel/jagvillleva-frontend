import { IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { teal } from "@mui/material/colors";

const IconContainer = styled(IconButton)({
  "&.MuiButtonBase-root": {
    backgroundColor: teal[50],
    borderRadius: "8px",
    color: teal[600],
  },
  "&.MuiButtonBase-root:hover": {
    backgroundColor: teal[600],
    borderRadius: "8px",
    color: "white",
  },
  transition: "all 0.2s ease-in-out",
});

interface Props {
  onClick: () => void;
  open?: boolean;
}

const OpenCloseButton: React.FC<Props> = ({ onClick, open = false }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <IconContainer
      color="inherit"
      aria-label="open drawer"
      onClick={handleClick}
      edge="start"
      sx={{
        ...(!open && { marginLeft: "-5px" }),
      }}
    >
      <MenuIcon />
    </IconContainer>
  );
};

export default OpenCloseButton;
