import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const CssButton = styled(Button)({
  boederRadius: "8px",
  padding: "12px 0px",
  color: "white",
});

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: "outlined" | "contained";
  fullWidth?: boolean;
  color?: "primary" | "secondary" | "inherit";
}

const ButtonCustom: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "contained",
  fullWidth,
  color,
}) => {
  return (
    <CssButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
      color={color}
      disableRipple={true}
    >
      {children}
    </CssButton>
  );
};

export default ButtonCustom;
