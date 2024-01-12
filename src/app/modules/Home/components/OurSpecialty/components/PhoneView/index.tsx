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
    <Stack width="100%" spacing={2}>
      <Grid container direction="row">
        <Grid item container xs={2} alignItems="center" justifyContent="center">
          <Paper sx={{ px: 3, py: 2.5, borderRadius: 8 }} elevation={1}>
            <img src={icon} height="37px" width="37px" alt={title} />
          </Paper>
        </Grid>
        <Grid
          item
          container
          xs={10}
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            direction="row"
            spacing={2}
            bgcolor={alpha(COLORS.LIGHT_BLUE, 1)}
            display="flex"
            alignItems="center"
            pr={6}
            borderRadius={10}
            ml={2}
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
        <Box mr={14}>
          <Paper
            elevation={2}
            sx={{
              py: 4,
              px: 6,
              borderTopRightRadius: 24,
              borderBottomRightRadius: 24,
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
                textAlign: "right",
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
