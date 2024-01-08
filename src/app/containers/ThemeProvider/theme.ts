import { createTheme } from "@mui/material";
import COLORS from "../../styles/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLORS.PRIMARY_BLUE,
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: `"Open Sans", sans-serif`,
  },
  spacing: 5,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: false,
        sx: {
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      defaultProps: {
        size: "small",
        sx: {
          borderRadius: 3,
          backgroundColor: "#fff",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTab: {
      defaultProps: {
        sx: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
