import { Link, Stack, Tooltip } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { EMAIL, PHONE, COPY, socialMediaUrls } from "./constants";
import COLORS from "../../styles/colors";
import {
  // copyToClipboard,
  navigateToMail,
} from "../../utils/helpers";
import FacebookIcon from "../../assets/facebook.png";
import LinkedInIcon from "../../assets/linkedin.png";
import CopyIcon from "../../assets/Copy.png";
import useDeviceSize from "../../hooks/useDeviceSize";
import { StyledContactNavbarText } from "./style";
import { useEffect, useState } from "react";

const ContactNavbar = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setTooltipOpen(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (tooltipOpen) {
      timeout = setTimeout(() => {
        setTooltipOpen(false);
      }, 3000); // Set the timeout for 3 seconds (3000 milliseconds)
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [tooltipOpen]);

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
          <img
            src={LinkedInIcon}
            alt="linkedin-icon"
            height={isOnMobile ? 14 : 18}
          />
        </Link>
        <Link target="_blank" href={socialMediaUrls.facebook}>
          <img
            src={FacebookIcon}
            alt="facebook-icon"
            height={isOnMobile ? 14 : 18}
          />
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
          <LocalPhoneIcon sx={{ fontSize: isOnMobile ? 12 : 14 }} />
          <StyledContactNavbarText fontSize={isOnMobile ? 10 : 14}>
            {PHONE}
          </StyledContactNavbarText>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={navigateToMail}
        >
          <MailOutlineIcon sx={{ fontSize: isOnMobile ? 12 : 14 }} />

          <StyledContactNavbarText fontSize={isOnMobile ? 10 : 14}>
            {EMAIL}
          </StyledContactNavbarText>
        </Stack>

        {/* <Tooltip title={COPY} arrow> */}
        <Tooltip
          title="Copied text to clipboard"
          open={tooltipOpen}
          placement="top"
          arrow
        >
          <img
            src={CopyIcon}
            alt="copy-icon"
            onClick={() => copyToClipboard(`Contact: ${PHONE} Email: ${EMAIL}`)}
            style={{ height: isOnMobile ? 10 : 12, cursor: "pointer" }}
          />
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default ContactNavbar;
