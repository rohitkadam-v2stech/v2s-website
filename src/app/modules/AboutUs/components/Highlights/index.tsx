import { Box, Grid, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { HIGHLIGHTS } from "../../config/constants";

const Highlights: React.FC = () => (
  <Box
    px={"10%"}
    py={4}
    sx={{
      background: `linear-gradient(to right,${COLORS.SKY_BLUE}, ${COLORS.DARK_BLUE})`,
    }}
    color={"white"}
    textAlign="center"
  >
    <Grid container>
      {HIGHLIGHTS.map((highlight) => (
        <Grid
          key={highlight.value}
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{ my: 4, p: 2 }}
        >
          <Typography fontSize={44} fontWeight={700} mb={2}>
            {highlight.value}
          </Typography>

          <Typography fontSize={16} fontWeight={400}>
            {highlight.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Highlights;
