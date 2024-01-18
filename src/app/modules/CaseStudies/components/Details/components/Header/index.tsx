import { Box, Grid, Stack, Typography } from "@mui/material";
import COLORS from "../../../../../../styles/colors";
import worldMap from "../../../../../../assets/world_map.png";
import useDeviceSize from "../../../../../../hooks/useDeviceSize";
import { messages } from "../../config/messages";
import { DashedDivider } from "../../../../../../styles/style";

type THeaderProps = {
  state: any;
};

const Header: React.FC<THeaderProps> = ({ state }) => {
  const { isOnMobile, isOnTablet, isOnSmallDesktop } = useDeviceSize();
  return (
    <Grid
      container
      columnSpacing={4}
      sx={{
        backgroundColor: COLORS.WHITE,
        flexDirection: "row-reverse",
        py: isOnMobile || isOnTablet ? 2 : 5,
        height: "100%",
      }}
    >
      {/* Image Grid */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Box position="relative">
          <img
            src={worldMap}
            alt="project-screenshot"
            style={{ height: "100%", width: "100%" }}
          />
          {!isOnMobile && !isOnTablet && (
            <img
              src={state.image}
              alt="project-screenshot"
              style={{
                position: "absolute",
                height: "60%",
                width: "60%",
                top: 130,
                left: 0,
              }}
            />
          )}
        </Box>
      </Grid>

      {/* Content Grid */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Stack paddingInline={isOnMobile || isOnTablet ? 4 : 10}>
          <Typography
            sx={{
              fontSize: isOnMobile || isOnTablet ? "18px" : "32px",
              fontWeight: "bold",
              color: COLORS.DARK_BLUE,
              textTransform: "uppercase",
            }}
          >
            {messages.caseStudy}
          </Typography>

          <Typography
            sx={{
              fontSize:
                isOnMobile || isOnTablet || isOnSmallDesktop ? "32px" : "80px",
              lineHeight: 1.2,
              fontWeight: "bold",
              color: COLORS.DARK_BLUE,
              textTransform: "uppercase",
            }}
          >
            {state.caseName}
          </Typography>

          <DashedDivider sx={{ mb: 1 }} />

          <Stack direction="row" spacing={2} mb={1} alignItems="center">
            <img src={state?.domain?.logo} alt="domain-logo" height={26} />

            <Typography
              fontSize={24}
              fontWeight={600}
              color={COLORS.LIGHT_BLUE}
            >
              {state?.domain?.name}
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontSize: isOnMobile || isOnTablet ? "18px" : "32px",
              lineHeight: 1.2,
              fontWeight: "bold",
              color: COLORS.DARK_BLUE,
            }}
          >
            {state.subtitle}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
