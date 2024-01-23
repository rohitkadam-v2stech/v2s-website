import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "../ThemeProvider";
import ToastNotificationsProvider from "../ToastNotifications/Provider";

const EntryPoint = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <ToastNotificationsProvider>{children}</ToastNotificationsProvider>
      </AppThemeProvider>
    </BrowserRouter>
  );
};

export default EntryPoint;
