import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

const EntryPoint = ({ children }: PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default EntryPoint;
