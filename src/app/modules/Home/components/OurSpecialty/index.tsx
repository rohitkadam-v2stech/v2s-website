import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
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
    <Box bgcolor="white" mt={2}>
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
        spacing={2}
        py={2}
        mx={50}
        sx={{ borderRadius: 4 }}
      >
        {OUR_SPECIALTY.map((item, id) => (
          <Paper
            key={id}
            sx={{
              borderRadius: 20.5,
              width: "100%",
              bgcolor: COLORS.LIGHT_BLUE,
            }}
            elevation={5}
          >
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Stack
                direction="row"
                sx={{
                  borderRadius: 20.5,
                }}
                bgcolor={COLORS.PRIMARY_BLUE}
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
                <Typography fontSize="21px" fontWeight="600" lineHeight="49px">
                  {item.title}
                </Typography>
              </Stack>
              <Box
                sx={{
                  borderTopRightRadius: 20.5,
                  borderBottomRightRadius: 20.5,
                }}
              >
                <Typography fontSize="21px" fontWeight="600" lineHeight="49px">
                  {item.subtitle}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default OurSpeciality;
