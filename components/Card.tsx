import styled from "@emotion/styled";
import { Icon, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const IconContainer = styled("div")(({ color }) => ({
  width: "44px",
  height: "44px",
  borderRadius: "8px",
  backgroundColor: `${color}[400]`,
  marginBotton: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "30px",
}));

const CardContainer = styled("div")(({ color }) => ({
  backgroundColor: `${color}`[300],
  textAlign: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  juscifyContent: "flex-start",
  alignItems: "self-start",
  padding: "16px",
  position: "relative",
  borderRadius: "8px",
  overflow: "hidden",
  "& ::after": {
    content: "''",
    position: "absolute",
    bottom: "100px",
    right: "0",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: `${color}[400]`,
  },
  "& ::before": {
    content: "''",
    position: "absolute",
    bottom: "55px",
    right: "-110px",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: `${color}[500]`,
  },
}));

interface CardProps {
  icon: string;
  title: string;
  value: number;
  color: string;
}

const Card: React.FC<CardProps> = ({ color, icon, title, value }) => {
  return (
    <CardContainer color={color}>
      <IconContainer color={color}>
        <Icon>{icon}</Icon>
      </IconContainer>
      <Typography variant="h4" fontWeight={500} sx={{ color: teal }}>
        {value}
      </Typography>
      <Typography
        sx={{ marginTop: "-7px" }}
        variant="body2"
        color={`${color}`[50]}
      >
        {title}
      </Typography>
    </CardContainer>
  );
};

export default Card;
