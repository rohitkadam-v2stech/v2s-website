import { Box, styled } from "@mui/material";
import CareerAtV2stechImg from "../../assets/careerAtV2stech.png";

export const StyledImageContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${CareerAtV2stechImg})`,
  backgroundSize: "cover",
  display: "flex",
  [theme.breakpoints.up("xs")]: {
    height: "30vh",
    width: "100%",
    backgroundPosition: "left",
  },
  [theme.breakpoints.up("sm")]: {
    height: "30vh",
    width: "100%",
    backgroundPosition: "left",
  },
  [theme.breakpoints.up("md")]: {
    height: "30vh",
    width: "100%",
    backgroundPosition: "left",
  },
  [theme.breakpoints.up("lg")]: {
    height: "50vh",
    width: "100%",
    backgroundPosition: "left",
  },
}));
