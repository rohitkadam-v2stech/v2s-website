import { Box, Grid, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import Employees from "../../../../assets/employees.jpg";

const WeCareOurEmployees = () => {
  return (
    <Stack spacing={4} mx={{ xs: 2, sm: 2, md: 8, lg: 22 }} py={8}>
      <Box sx={{ textAlign: "center" }}>
        <Typography fontSize="30px" fontWeight="700" color={COLORS.DARK_BLUE}>
          {messages.weCareForOurEmployees}
        </Typography>
      </Box>
      <Grid container gap={2}>
        <Grid item xs={12} sm={12} md={7.1} lg={7.1}>
          <Typography textAlign="justify" fontSize="16px" lineHeight="26px">
            {messages.weCareForOurEmployeesContent}
          </Typography>
        </Grid>
        <Grid xs={0.1} />
        <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
          <Box component="img" src={Employees} width="100%" />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default WeCareOurEmployees;
