import { Box, Grid, Paper, Stack, Typography, alpha } from "@mui/material";
import COLORS from "../../../../../../styles/colors";
import React from "react";

type TPhoneViewProps = {
  icon: string;
  title: string;
  subtitle: string;
};

const PhoneView: React.FC<TPhoneViewProps> = ({ icon, title, subtitle }) => {
  return (
    <Stack width="100%" spacing={2} px={2}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item container xs={2.5} alignItems="" justifyContent="flex-end">
          <img src={icon} height="37px" width="37px" alt={title} />
        </Grid>
        <Grid item container xs={9} alignItems="center" justifyContent="center">
          <Stack
            direction="row"
            spacing={2}
            width="100%"
            bgcolor={alpha(COLORS.LIGHT_BLUE, 1)}
            display="flex"
            alignItems="center"
            px={6}
            borderRadius={10}
            ml={2}
            py={5}
          >
            <Typography
              variant="h2"
              sx={{
                fullWidth: "100%",
                fontSize: "15px",
                color: COLORS.DARK_BLUE,
                fontWeight: "600",
              }}
            >
              {title}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Box mx={14}>
          <Paper
            elevation={2}
            sx={{
              p: 6,
              borderRadius: 24,
              bgcolor: alpha(COLORS.LIGHT_BLUE, 0.4),
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fullWidth: "100%",
                fontSize: "15px",
                color: COLORS.DARK_BLUE,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {subtitle}
            </Typography>
          </Paper>
        </Box>
      </Grid>
    </Stack>
  );
};

export default PhoneView;
