import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import { messages } from "./messages";
import COLORS from "../../styles/colors";
import { FOOTER_LINKS } from "./constants";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (pathname: string) => {
    navigate(pathname);
  };

  return (
    <Stack
      bgcolor={COLORS.FOOTER_BACKGROUND_COLOR}
      color="white"
      justifyContent="space-between"
      alignItems="center"
      py={3.5}
      px={{ xs: 1, sm: 2, md: "6%", lg: "6%", xl: "6%" }}
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Typography variant="caption">{messages.allRightsReserved}</Typography>
      <Stack
        spacing={{ xs: 1, sm: 2, md: 4 }}
        direction={{ xs: "column", sm: "row" }}
      >
        {FOOTER_LINKS.map(({ name, pathname }) => (
          <Typography
            key={name}
            variant="caption"
            sx={{ cursor: "pointer" }}
            onClick={() => handleClick(pathname)}
          >
            {name}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
