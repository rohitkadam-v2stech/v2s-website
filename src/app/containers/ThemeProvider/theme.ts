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
});

export default theme;
