import { PropsWithChildren } from "react";
import { CssBaseline } from "@mui/material";

import Footer from "../../components/Footer";
import ContactNavbar from "../../components/ContactNavbar";
import { StyledProtectedLayoutWrapper } from "./style";

const ApplicationLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CssBaseline />
      <ContactNavbar />
      <StyledProtectedLayoutWrapper>{children}</StyledProtectedLayoutWrapper>
      <Footer />
    </>
  );
};

export default ApplicationLayout;
