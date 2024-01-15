import { Box, Stack, Typography } from "@mui/material";

import COLORS from "../../../../../../styles/colors";
import { navigateToMail } from "../../../../../../utils/helpers";
import GlobeIcon from "../../../../../../assets/contactUsLogos/global.png";
import EmailIcon from "../../../../../../assets/contactUsLogos/email.png";
import ContactIcon from "../../../../../../assets/contactUsLogos/telephone.png";
import { messages } from "../../../../config/messages";

const BusinessQueries: React.FC = () => (
  <Box border={`1px solid ${COLORS.LIGHT_GREY}`} height="100%">
    <Stack px={6} py={12} spacing={8}>
      <Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={GlobeIcon} alt="office" width={24} height={24} />

          <Typography fontSize={24} fontWeight={700}>
            {messages.ourOffices}
          </Typography>
        </Stack>

        <Stack pl={8}>
          <Typography fontSize={18} fontWeight={700}>
            {messages.headQuarters}
          </Typography>
          <Typography fontSize={18} fontWeight={400} color={COLORS.GREY_TEXT}>
            {messages.officeAddress}
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={EmailIcon} alt="office" width={24} height={24} />

          <Typography fontSize={24} fontWeight={700}>
            {messages.businessQueries}
          </Typography>
        </Stack>

        <Stack pl={8}>
          <div onClick={navigateToMail}>
            <Typography
              fontSize={18}
              fontWeight={400}
              color={COLORS.PRIMARY_BLUE}
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              sales@v2stech.com
            </Typography>
          </div>
          <Typography fontSize={18} fontWeight={400} color={COLORS.GREY_TEXT}>
            Phone: 001 (862) 218 0998
          </Typography>
        </Stack>
      </Stack>

      <Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={ContactIcon} alt="office" width={24} height={24} />

          <Typography fontSize={24} fontWeight={700}>
            HR Department
          </Typography>
        </Stack>

        <Stack pl={8}>
          <Typography fontSize={18} fontWeight={400} color={COLORS.GREY_TEXT}>
            Phone: +91 8291982537
          </Typography>
          <Typography fontSize={18} fontWeight={400} color={COLORS.GREY_TEXT}>
            Email: hrsupport@v2stech.com
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);

export default BusinessQueries;
