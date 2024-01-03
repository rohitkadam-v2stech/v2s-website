import { startTransition } from "react";
import { AppBar, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { StyledNavBarText, StyledToolbar } from "./style";
import v2sLogo from "../../assets/v2s-logo.png";
import { NAVBAR_ROUTES } from "./config/constant";
import COLORS from "../../styles/colors";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <AppBar position="sticky" color="inherit" sx={{ mb: 2, py: 1, px: "5%" }}>
      <StyledToolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <img alt="CompanyBrandLogo" src={v2sLogo} />
        </Stack>

        <Stack direction="row" spacing={4}>
          {NAVBAR_ROUTES.map((route) => (
            <StyledNavBarText
              key={route.path}
              color={
                currentPath === route.path ? COLORS.PRIMARY_BLUE : COLORS.BLACK
              }
              onClick={() =>
                startTransition(() => {
                  navigate(route.path);
                })
              }
            >
              {route.label}
            </StyledNavBarText>
          ))}
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
