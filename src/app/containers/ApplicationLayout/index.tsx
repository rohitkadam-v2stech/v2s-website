import { CssBaseline } from "@mui/material";

import NavBar from "../NavBar";
import ContactNavbar from "../../components/ContactNavbar";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { StyledProtectedLayoutWrapper } from "./style";

const ApplicationLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <CssBaseline />
      <ContactNavbar />
      <NavBar />
      <StyledProtectedLayoutWrapper>{children}</StyledProtectedLayoutWrapper>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default ApplicationLayout;
