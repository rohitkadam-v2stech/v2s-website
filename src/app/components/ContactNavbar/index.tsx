import { Divider, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { EMAIL, FOR_BUSINESS_QUERIES, PHONE } from "./constants";

const ContactNavbar = () => {
  return (
    <Stack
      direction="row"
      py={1.2}
      bgcolor="black"
      justifyContent="space-between"
      px={11}
    >
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider color="#fff" orientation="vertical" flexItem />}
      >
        <LinkedInIcon fontSize="small" sx={{ color: "white" }} />
        <FacebookOutlinedIcon fontSize="small" sx={{ color: "white" }} />
      </Stack>
      <Stack color="white" direction="row" spacing={2} justifyContent="center">
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
