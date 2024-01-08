import { Box, Grid, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import COLORS from "../../../../styles/colors";
import worldMap from "../../../../assets/world_map.png";
import PropositionCard from "./components/PropositionCard";
import { messages } from "./config/messages";

const CaseStudiesDetails: React.FC = () => {
  const { state } = useLocation();
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <>
      <Grid
        container
        columnSpacing={4}
        sx={{
          backgroundColor: COLORS.WHITE,
          flexDirection: "row-reverse",
          py: isOnMobile || isOnTablet ? 2 : 5,
          height: 450,
        }}
      >
        {/* Image Grid */}
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box>
            <img
              src={worldMap}
              alt="project-screenshot"
              style={{ height: "100%", width: "100%" }}
            />
            <img
              src={state.image}
              alt="project-screenshot"
              style={{
                position: "relative",
                zIndex: 1000,
                height: "60%",
                width: "60%",
                top: -200,
              }}
            />
          </Box>
        </Grid>

        {/* Content Grid */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Stack spacing={0} paddingInline={10}>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                color: COLORS.DARK_BLUE,
              }}
            >
              {messages.caseStudy}
            </Typography>
            <Typography
              sx={{
                fontSize: "80px",
                lineHeight: 1.2,
                fontWeight: "bold",
                color: COLORS.DARK_BLUE,
              }}
            >
              {state.caseName}
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: 1.2,
                fontWeight: "bold",
                color: COLORS.DARK_BLUE,
                textAlign: "justify",
              }}
            >
              {state.subtitle}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box my={4}>
        <Typography
          textAlign="center"
          sx={{ fontSize: "32px", color: COLORS.DARK_BLUE, fontWeight: "bold" }}
        >
          {messages.valueProposition}
        </Typography>
        <Grid container justifyContent="center" px={22} gap={2} mt={2}>
          {state.valueProposition.map((item: any, id: any) => (
            <Grid key={id} item>
              <PropositionCard title={item.title} details={item.details} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CaseStudiesDetails;
