import React from "react";

import NavBar from "../NavBar";

const ApplicationLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default ApplicationLayout;
