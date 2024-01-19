import { Link, Stack, Tooltip } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { EMAIL, PHONE, COPY, socialMediaUrls } from "./constants";
import COLORS from "../../styles/colors";
import { copyToClipboard, navigateToMail } from "../../utils/helpers";
import FacebookIcon from "../../assets/facebook.png";
import LinkedInIcon from "../../assets/linkedin.png";
import CopyIcon from "../../assets/Copy.png";
import useDeviceSize from "../../hooks/useDeviceSize";
import { StyledContactNavbarText } from "./style";

const ContactNavbar = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <Stack
      direction="row"
      py={1.6}
      justifyContent="space-between"
      alignItems="center"
      pl={isOnMobile || isOnTablet ? 4 : 18}
      pr={isOnMobile || isOnTablet ? 4 : 20}
      sx={{ bgcolor: COLORS.DARK_BLUE }}
      spacing={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={isOnMobile || isOnTablet ? 2 : 1}
        height={24}
        pt={1}
      >
        <Link target="_blank" href={socialMediaUrls.linkedIn}>
          <img src={LinkedInIcon} alt="linkedin-icon" height={14} />
        </Link>
        <Link target="_blank" href={socialMediaUrls.facebook}>
          <img src={FacebookIcon} alt="facebook-icon" height={14} />
        </Link>
      </Stack>

      <Stack
        color={COLORS.WHITE}
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        // divider={
        //   <Divider color={COLORS.WHITE} orientation="vertical" flexItem />
        // }
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={() => copyToClipboard(PHONE)}
        >
          <LocalPhoneIcon sx={{ fontSize: 12 }} />
          <StyledContactNavbarText>{PHONE}</StyledContactNavbarText>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          onClick={navigateToMail}
          style={{ cursor: "pointer" }}
        >
          <MailOutlineIcon sx={{ fontSize: 12 }} />

          <StyledContactNavbarText>{EMAIL}</StyledContactNavbarText>
        </Stack>

        <Tooltip title={COPY} arrow>
          <img
            src={CopyIcon}
            alt="copy-icon"
            onClick={() => copyToClipboard(`Contact: ${PHONE} Email: ${EMAIL}`)}
            style={{ height: 10, cursor: "pointer" }}
          />
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default ContactNavbar;
