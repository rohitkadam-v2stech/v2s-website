import { PropsWithChildren } from "react";
import { CssBaseline } from "@mui/material";
import NavBar from "../NavBar";

import Footer from "../../components/Footer";
import ContactNavbar from "../../components/ContactNavbar";
import { StyledProtectedLayoutWrapper } from "./style";

const ApplicationLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CssBaseline />
      <ContactNavbar />
      <NavBar />
      <StyledProtectedLayoutWrapper>{children}</StyledProtectedLayoutWrapper>
      <Footer />
    </>
  );
};

export default ApplicationLayout;
