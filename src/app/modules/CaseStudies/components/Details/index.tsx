import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { StyledRegularText } from "../../style";
import { messages } from "./config/messages";
import { CASE_STUDIES_LIST } from "../../config/constants";

const CaseStudiesDetails: React.FC = () => {
  const {
    aboutClient,
    projectRevenue,
    projectDuration,
    isProjectOngoing,
    maxTeamSize,
    minTeamSize,
  } = CASE_STUDIES_LIST[0];

  const aboutClientCards = [
    {
      label: "Project Revenue",
      value: projectRevenue,
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
    <>
      <Box
        py={2}
        px={{ xs: 1, sm: 2, md: "10%", lg: "10%", xl: "10%" }}
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

        <Stack direction="row" justifyContent="space-evenly">
          {aboutClientCards.map((data, index) => (
            <Card
              sx={{
                my: 2,
                mr: index < aboutClientCards?.length - 1 ? 2 : 0,
                width: 260,
                bgcolor: COLORS.DARK_BLUE,
                color: COLORS.WHITE,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <CardContent>
                <Typography fontSize={22} fontWeight={800} mb={1}>
                  ${data?.value}
                </Typography>
                <Typography fontSize={22} fontWeight={800}>
                  {data?.label}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default CaseStudiesDetails;
