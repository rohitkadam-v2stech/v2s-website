import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "navy",
    },
  },
  typography: {
    fontSize: 12,
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
