import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";

const FastFacts = () => {
  const FAST_FACTS_LIST: Array<{ title: string; value: string }> = [
    {
      title: "Successful Years",
      value: "10+",
    },
    {
      title: "SaaS Products",
      value: "10+",
    },
    {
      title: "Talented People",
      value: "75+",
    },
    {
      title: "Domains",
      value: "5+",
    },
    {
      title: "Repeat Business",
      value: "80%",
    },
    {
      title: "YoY Growth",
      value: "20%",
    },
    {
      title: "B2B SaaS IPs",
      value: "2",
    },
    {
      title: "Users with V2S Tech Powered Apps",
      value: "1M",
    },
  ];

  return (
    <Box bgcolor={COLORS.PRIMARY_BLUE}>
      <Typography
        textAlign="center"
        color="white"
        variant="h4"
        fontWeight="bold"
      >
        Fast Facts
      </Typography>
      <Grid
        container
        mt={2}
        direction="row"
        gap={6}
        p={6}
        justifyContent="center"
      >
        {FAST_FACTS_LIST.map(({ title, value }) => (
          <Grid key={title} xs={2.5}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: COLORS.DARK_BLUE,
                color: COLORS.WHITE,
                paddingBlock: 2,
                paddingInline: 2,
                height: 86,
                borderRadius: 4,
              }}
            >
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                height="100%"
                divider={
                  <Divider
                    color={COLORS.LIGHT_BLUE}
                    orientation="vertical"
                    flexItem
                  />
                }
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  textAlign="center"
                  width={34}
                >
                  {value}
                </Typography>
                <Typography variant="h5">{title}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FastFacts;
