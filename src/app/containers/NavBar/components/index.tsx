import { useLocation, useNavigate } from "react-router-dom";

import { IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { StyledNavBarText } from "../style";
import COLORS from "../../../styles/colors";
import { NAVBAR_ROUTES } from "../config/constant";
import { removeAsterisk } from "../../../utils/helpers";

type TMobileViewDrawerProps = {
  toggleMobileDrawer: () => void;
};

const MobileViewDrawer: React.FC<TMobileViewDrawerProps> = ({
  toggleMobileDrawer,
}) => {
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavigate = (path: string) => {
    navigate(removeAsterisk(path));
    toggleMobileDrawer();
  };

  return (
    <Stack>
      <Stack direction="row" justifyContent="end" p={2}>
        <IconButton
          sx={{
            color: COLORS.BLACK,
            borderRadius: 1,
            border: `1px solid ${COLORS.BLACK}`,
          }}
          onClick={toggleMobileDrawer}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Stack spacing={4} alignItems="start" p={2}>
        {NAVBAR_ROUTES.map((route) => (
          <StyledNavBarText
            key={route.path}
            color={
              currentPath === route.path ? COLORS.PRIMARY_BLUE : COLORS.BLACK
            }
            onClick={() => handleNavigate(route.path)}
          >
            {route.label}
          </StyledNavBarText>
        ))}
      </Stack>
    </Stack>
  );
};

export default MobileViewDrawer;
