import { startTransition } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AppBar, Drawer, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { StyledNavBarText, StyledToolbar } from "./style";
import v2sLogo from "../../assets/v2s-logo.png";
import { NAVBAR_ROUTES } from "./config/constant";
import COLORS from "../../styles/colors";
import useToggle from "../../hooks/useToggle";
import MobileViewDrawer from "./components";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const { toggle: toggleMobileDrawer, value: isMobileDrawerOpen } = useToggle();

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <AppBar position="sticky" color="inherit" sx={{ mb: 2, py: 1, px: "5%" }}>
        <StyledToolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <img alt="CompanyBrandLogo" src={v2sLogo} />
          </Stack>

          <Stack direction="row" spacing={4} alignItems="center">
            {NAVBAR_ROUTES.map((route) => (
              <StyledNavBarText
                key={route.path}
                color={
                  currentPath === route.path
                    ? COLORS.PRIMARY_BLUE
                    : COLORS.BLACK
                }
                sx={{ display: { xs: "none", md: "block" } }}
                onClick={() =>
                  startTransition(() => {
                    navigate(route.path);
                  })
                }
              >
                {route.label}
              </StyledNavBarText>
            ))}

            <IconButton onClick={toggleMobileDrawer}>
              <MenuIcon
                sx={{
                  display: { sm: "block", md: "none" },
                  color: COLORS.LIGHT_GREY,
                  borderRadius: 1,
                  border: `1px solid ${COLORS.LIGHT_GREY}`,
                  p: 0.5,
                }}
              />
            </IconButton>
          </Stack>
        </StyledToolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={isMobileDrawerOpen}
        onClose={toggleMobileDrawer}
        transitionDuration={800}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { md: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
        }}
      >
        <MobileViewDrawer toggleMobileDrawer={toggleMobileDrawer} />
      </Drawer>
    </>
  );
};

export default NavBar;
