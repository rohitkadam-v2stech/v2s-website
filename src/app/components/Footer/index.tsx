import { Stack, Typography } from "@mui/material";

import { messages } from "./messages";

const Footer = () => (
  <Stack
    bgcolor="navy"
    color="white"
    justifyContent="space-around"
    py={1}
    px={{ xs: 1 }}
    direction={{ xs: "column", sm: "row" }}
    spacing={{ xs: 1, sm: 2, md: 4 }}
  >
    <Typography variant="caption">{messages.allRightsReserved}</Typography>
    <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
      direction={{ xs: "column", sm: "row" }}
    >
      <Typography variant="caption">{messages.privacyPolicy}</Typography>
      <Typography variant="caption">{messages.termsAndConditions}</Typography>
      <Typography variant="caption">{messages.cookiePolicy}</Typography>
      <Typography variant="caption">{messages.refundPolicy}</Typography>
    </Stack>
  </Stack>
);

export default Footer;
