import Snackbar, { type SnackbarProps } from "@mui/material/Snackbar";
import { Alert, type AlertProps } from "@mui/material";

interface IMuiSnackbarProps extends SnackbarProps {
  message: string;
  severity: AlertProps["severity"];
  onClose: (event: React.SyntheticEvent | unknown) => void;
}

const MuiSnackbar: React.FC<IMuiSnackbarProps> = (props) => (
  <Snackbar {...props}>
    <Alert
      variant="filled"
      onClose={props.onClose}
      severity={props.severity}
      sx={{ width: "100%" }}
    >
      {props.message}
    </Alert>
  </Snackbar>
);

export default MuiSnackbar;
export type { IMuiSnackbarProps };
