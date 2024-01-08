import { ThemeProvider } from "@mui/material";
import theme from "./theme";

export const AppThemeProvider = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeProvider;
