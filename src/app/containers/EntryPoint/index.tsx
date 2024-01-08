import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "../ThemeProvider";

const EntryPoint = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <AppThemeProvider>{children}</AppThemeProvider>
    </BrowserRouter>
  );
};

export default EntryPoint;
