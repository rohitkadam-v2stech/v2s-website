import { Stack, Typography } from "@mui/material";
import {
  ALL_RIGHTS_RESERVED,
  COOKIE_POLICY,
  PRIVACY_POLICY,
  REFUND_POLICY,
  TERMS_AND_CONDITIONS,
} from "./constants";

const Footer = () => (
  <Stack
    bgcolor="navy"
    color="white"
    direction="row"
    justifyContent="space-around"
    py={1}
  >
    <Typography variant="subtitle2">{ALL_RIGHTS_RESERVED}</Typography>
    <Stack direction="row" spacing={2}>
      <Typography variant="subtitle2">{PRIVACY_POLICY}</Typography>
      <Typography variant="subtitle2">{TERMS_AND_CONDITIONS}</Typography>
      <Typography variant="subtitle2">{COOKIE_POLICY}</Typography>
      <Typography variant="subtitle2">{REFUND_POLICY}</Typography>
    </Stack>
  </Stack>
);

export default Footer;
