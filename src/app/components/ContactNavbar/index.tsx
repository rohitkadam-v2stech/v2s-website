import { Divider, Link, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { EMAIL, PHONE, socialMediaUrls } from "./constants";
import COLORS from "../../styles/colors";
import { navigateToMail } from "../../utils/helpers";

const ContactNavbar = () => {
  return (
    <Stack
      direction="row"
      py={1.6}
      bgcolor="black"
      justifyContent="space-between"
      alignItems="center"
      pl={18}
      pr={20}
      display={{ xs: "none", md: "flex", lg: "flex" }}
      sx={{ bgcolor: COLORS.DARK_BLUE }}
    >
      <Stack direction="row" alignItems="center" spacing={2} height={24} pt={1}>
        <Link target="_blank" href={socialMediaUrls.linkedIn}>
          <LinkedInIcon
            fontSize="medium"
            sx={{ color: COLORS.WHITE, borderRadius: 100, cursor: "pointer" }}
          />
        </Link>
        <Link target="_blank" href={socialMediaUrls.facebook}>
          <FacebookOutlinedIcon
            fontSize="medium"
            sx={{ color: COLORS.WHITE, cursor: "pointer" }}
          />
        </Link>
      </Stack>
      <Stack
        color={COLORS.WHITE}
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={
          <Divider color={COLORS.WHITE} orientation="vertical" flexItem />
        }
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <LocalPhoneIcon fontSize="small" />
          <Typography variant="subtitle1">{PHONE}</Typography>
        </Stack>

        <div onClick={navigateToMail} style={{ cursor: "pointer" }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <MailOutlineIcon fontSize="small" />
            <Typography variant="subtitle1">{EMAIL}</Typography>
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
};

export default ContactNavbar;
