import { Divider, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { EMAIL, FOR_BUSINESS_QUERIES, PHONE } from "./constants";
import COLORS from "../../styles/colors";

const ContactNavbar = () => {
  return (
    <Stack
      direction="row"
      py={1.2}
      bgcolor="black"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      display={{ xs: "none", md: "flex", lg: "flex" }}
    >
      <Stack
        direction="row"
        spacing={2}
        height={24}
        divider={
          <Divider color={COLORS.WHITE} orientation="vertical" flexItem />
        }
      >
        <LinkedInIcon fontSize="small" sx={{ color: COLORS.WHITE }} />
        <FacebookOutlinedIcon fontSize="small" sx={{ color: COLORS.WHITE }} />
      </Stack>
      <Stack
        color={COLORS.WHITE}
        justifyContent="center"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Typography variant="subtitle2">{FOR_BUSINESS_QUERIES}</Typography>
        <Stack direction="row" spacing={1}>
          <LocalPhoneIcon fontSize="small" />
          <Typography variant="subtitle2">{PHONE}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <MailOutlineIcon fontSize="small" />
          <Typography variant="subtitle2">{EMAIL}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactNavbar;
