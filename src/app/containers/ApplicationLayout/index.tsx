import React from "react";

import NavBar from "../NavBar";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const ApplicationLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {props.children}
      <ScrollToTopButton />
    </>
  );
};

export default ApplicationLayout;
