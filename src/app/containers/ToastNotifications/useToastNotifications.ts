import { useState } from 'react';
import useToggle from '../../hooks/useToggle';
import { type IMuiSnackbarProps } from '../../components/Snackbar';

const useToastNotifications = () => {
  const { value: isToastNotificationOpen, setValue: setIsToastNotificationOpen } = useToggle(false);

  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<IMuiSnackbarProps['severity'] | undefined>(undefined);

  const hideToastNotification = () => {
    setIsToastNotificationOpen(false);
    setMessage('');
    setSeverity(undefined);
  };

  const showToastNotification = (message: string, severity: IMuiSnackbarProps['severity']) => {
    setMessage(message);
    setSeverity(severity);
    setIsToastNotificationOpen(true);
  };

  return {
    isToastNotificationOpen,
    showToastNotification,
    message,
    severity,
    hideToastNotification,
  };
};

export default useToastNotifications;
