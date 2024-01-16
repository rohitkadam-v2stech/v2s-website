import { Box, Grid } from "@mui/material";
import BusinessQueries from "./components/BusinessQueries";
import ContactUsForm from "./components/Form";
import COLORS from "../../../../styles/colors";
import useDeviceSize from "../../../../hooks/useDeviceSize";

const Content: React.FC = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <Box bgcolor={COLORS.WHITE}>
      <Grid container p={isOnMobile || isOnTablet ? 4 : "7%"}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <BusinessQueries />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <ContactUsForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
