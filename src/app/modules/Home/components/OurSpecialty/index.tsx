import { Box, Grid, Paper, Stack, Typography, alpha } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import { OUR_SPECIALTY } from "./constants";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import PhoneView from "./components/PhoneView";

const OurSpeciality = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <Box bgcolor="white" mt={2} pb={10}>
      <Typography
        textAlign="center"
        px={12}
        py={6}
        color={COLORS.DARK_BLUE}
        fontWeight="600"
        fontSize="30px"
      >
        {messages.ourSpeciality}
      </Typography>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        py={2}
        mx={{ xs: 4, sm: 4, md: 20, lg: 44 }}
        sx={{ borderRadius: 4 }}
      >
        {OUR_SPECIALTY.map(({ icon, subtitle, title }, id) => {
          if (isOnMobile || isOnTablet) {
            return (
              <PhoneView
                key={id}
                icon={icon}
                subtitle={subtitle}
                title={title}
              />
            );
          }

          return (
            <Paper
              key={id}
              sx={{
                borderRadius: 20.5,
                width: "100%",
                bgcolor: alpha(COLORS.LIGHT_BLUE, 0.4),
                color: COLORS.DARK_BLUE,
              }}
              elevation={5}
            >
              <Grid container>
                <Grid
                  item
                  md={7}
                  sm={11}
                  alignItems="center"
                  justifyContent="left"
                  container
                  bgcolor={COLORS.LIGHT_BLUE}
                  borderRadius={20.5}
                >
                  <Stack
                    direction="row"
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        borderRadius: 20.5,
                        py: 3.5,
                        px: 4,
                      }}
                      bgcolor={COLORS.WHITE}
                    >
                      <img src={icon} height={53} width={53} alt={title} />
                    </Box>
                    <Typography
                      fontSize="21px"
                      fontWeight="600"
                      lineHeight="49px"
                      noWrap
                    >
                      {title}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  md={5}
                  sm={11}
                  alignItems="center"
                  justifyContent="left"
                  container
                  p={4}
                >
                  <Typography
                    fontSize="21px"
                    fontWeight="600"
                    lineHeight="49px"
                    noWrap
                  >
                    {subtitle}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default OurSpeciality;
