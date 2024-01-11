import { Box, CardContent, Stack, Typography } from "@mui/material";

import COLORS from "../../../../../../styles/colors";
import { StyledRegularText } from "../../../../style";
import { messages } from "../../config/messages";
import { formatAmount } from "../../../../../../utils/helpers";
import { StyledAboutClientCard } from "../../style";
import useDeviceSize from "../../../../../../hooks/useDeviceSize";

type TAboutClientsProps = {
  data: any;
};

const AboutClients: React.FC<TAboutClientsProps> = ({ data }) => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  const {
    aboutClient,
    projectRevenue,
    projectDuration,
    isProjectOngoing,
    maxTeamSize,
    minTeamSize,
  } = data;

  const aboutClientCards = [
    {
      label: "Project Revenue",
      value: formatAmount(projectRevenue),
    },
    {
      label: isProjectOngoing ? "Ongoing Project" : "Project Duration",
      value: `${projectDuration}+ Years`,
    },
    {
      label: "Team Size",
      value: `${minTeamSize}-${maxTeamSize} `,
    },
  ] as const;

  return (
    <Box
      py={6}
      px={{ xs: 4, sm: 4, md: "10%", lg: "10%", xl: "10%" }}
      bgcolor={COLORS.BACKGROUND_GREY}
    >
      <Typography
        mb={1}
        fontSize={20}
        fontWeight={800}
        color={COLORS.DARK_BLUE}
      >
        {messages.aboutClient}
      </Typography>

      <StyledRegularText mb={2} textAlign="justify">
        {aboutClient}
      </StyledRegularText>

      <Stack
        direction={isOnMobile || isOnTablet ? "column" : "row"}
        justifyContent="space-evenly"
        alignItems="center"
        spacing={6}
        mt={8}
      >
        {aboutClientCards.map((data, index) => (
          <StyledAboutClientCard
            key={index}
            // sx={{
            //   mr: index < aboutClientCards?.length - 1 ? 2 : 0,
            // }}
          >
            <CardContent>
              <Typography fontSize={22} fontWeight={800} mb={1}>
                ${data?.value}
              </Typography>
              <Typography fontSize={22} fontWeight={800}>
                {data?.label}
              </Typography>
            </CardContent>
          </StyledAboutClientCard>
        ))}
      </Stack>
    </Box>
  );
};

export default AboutClients;
