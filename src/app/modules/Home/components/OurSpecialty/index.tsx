import { Box, Grid, Paper, Stack, Typography, alpha } from "@mui/material";
import COLORS from "../../../../styles/colors";
import advisingOnTech from "../../../../assets/Advising on Technology.png";

const OurSpeciality = () => {
  const OUR_SPECIALTY: Array<{
    icon: JSX.Element;
    title: string;
    subtitle: string;
  }> = [
    {
      icon: <></>,
      title: "Powering ideas through UI/UX",
      subtitle: "Benefit: Attract investor",
    },
    {
      icon: <></>,
      title: "Recovering Stalled Products",
      subtitle: "Benefit: Get back on Track",
    },
    {
      icon: <></>,
      title: "Scaleup ready Apps",
      subtitle: "Benefit: Seemless Growth",
    },
    {
      icon: <></>,
      title: "Advising on Technology",
      subtitle: "Benefit: Virtual CTO",
    },
  ];

  return (
    <Box bgcolor="white" mt={2} pb={10}>
      <Typography
        textAlign="center"
        p={12}
        color={COLORS.DARK_BLUE}
        fontWeight="600"
        fontSize="30px"
      >
        Our Speciality
      </Typography>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        py={2}
        mx={44}
        sx={{ borderRadius: 4 }}
      >
        {OUR_SPECIALTY.map((item, id) => (
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
                xs={7}
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
                    <img src={advisingOnTech} height={53} width={53} alt="" />
                  </Box>
                  <Typography
                    fontSize="21px"
                    fontWeight="600"
                    lineHeight="49px"
                  >
                    {item.title}
                  </Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={5}
                alignItems="center"
                justifyContent="left"
                container
                p={4}
              >
                <Typography fontSize="21px" fontWeight="600" lineHeight="49px">
                  {item.subtitle}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default OurSpeciality;
