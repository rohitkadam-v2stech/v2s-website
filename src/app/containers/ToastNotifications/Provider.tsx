import { createContext, useContext } from "react";

import Snackbar, { type IMuiSnackbarProps } from "../../components/Snackbar";

import useToastNotifications from "./useToastNotifications";

type TToastNotificationsContext = {
  showToastNotification: (
    message: string,
    severity: IMuiSnackbarProps["severity"]
  ) => void;
};

const ToastNotificationsContext = createContext<TToastNotificationsContext>(
  {} as TToastNotificationsContext
);

const ToastNotificationsProvider = ({
  children,
  autoHideDuration,
}: React.PropsWithChildren<{ autoHideDuration?: number }>) => {
  const {
    isToastNotificationOpen,
    message,
    severity,
    showToastNotification,
    hideToastNotification,
  } = useToastNotifications();

  return (
    <ToastNotificationsContext.Provider value={{ showToastNotification }}>
      {isToastNotificationOpen && (
        <Snackbar
          autoHideDuration={autoHideDuration ? autoHideDuration : 3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={isToastNotificationOpen}
          message={message}
          severity={severity}
          onClose={hideToastNotification}
        />
      )}
      {children}
    </ToastNotificationsContext.Provider>
  );
};

const useShowToastNotifications = () => useContext(ToastNotificationsContext);

export default ToastNotificationsProvider;
export { useShowToastNotifications };
