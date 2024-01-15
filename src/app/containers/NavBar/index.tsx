import { useLocation, useNavigate } from "react-router-dom";

import { AppBar, Drawer, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { StyledNavBarText, StyledToolbar } from "./style";
import v2sLogo from "../../assets/v2s-logo.png";
import { NAVBAR_ROUTES } from "./config/constant";
import COLORS from "../../styles/colors";
import useToggle from "../../hooks/useToggle";
import MobileViewDrawer from "./components";
import { APPLICATION_URLS } from "../../Routing/config/appsConfig";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const { toggle: toggleMobileDrawer, value: isMobileDrawerOpen } = useToggle();

  const { pathname: currentPath } = useLocation();

  const handleNavigateHome = () => {
    navigate(APPLICATION_URLS.HOME);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{ py: 1, px: { xs: "1%", sm: "1%", md: "1%", lg: "6%" } }}
      >
        <StyledToolbar disableGutters>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <img
              alt="CompanyBrandLogo"
              src={v2sLogo}
              onClick={handleNavigateHome}
            />
          </Stack>

          <Stack direction="row" spacing={0} alignItems="center">
            {NAVBAR_ROUTES.map((route, index) => (
              <StyledNavBarText
                key={route.path}
                sx={{
                  display: { xs: "none", md: "block" },
                  color:
                    currentPath === route.path
                      ? COLORS.PRIMARY_BLUE
                      : COLORS.BLACK,
                  marginRight: index < NAVBAR_ROUTES.length - 1 ? 4 : 0,
                  ":hover": {
                    color: COLORS.PRIMARY_BLUE,
                    transition: "color 0.5s",
                  },
                }}
                onClick={() => handleNavigate(route.path)}
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
