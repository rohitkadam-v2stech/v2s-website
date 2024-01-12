import { Box, Grid, Stack, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import saasDevelopment from "../../../../assets/ourOffering/saas.png";
import productIdeation from "../../../../assets/ourOffering/new-product.png";
import uiuxDesign from "../../../../assets/ourOffering/ux-design.png";
import mvp from "../../../../assets/ourOffering/mvp.png";
import scalingMaintenance from "../../../../assets/ourOffering/cube.png";
import { OUR_OFFERINGS } from "./constants";

const OurOfferings = () => {
  const OFFERINGS_LIST: Array<{ icon: string; title: string }> = [
    { icon: saasDevelopment, title: "SaaS Development" },
    {
      icon: productIdeation,
      title: "Product Ideation & Consultation",
    },
    {
      icon: uiuxDesign,
      title: "UI/UIX Design",
    },
    {
      icon: mvp,
      title: "MVP Development",
    },
    {
      icon: scalingMaintenance,
      title: "Scaling & Maintenance",
    },
  ];

  return (
    <Box bgcolor={COLORS.WHITE} px={4} py={12}>
      <Typography
        variant="h4"
        textAlign="center"
        color={COLORS.DARK_BLUE}
        fontWeight="bold"
      >
        {OUR_OFFERINGS}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        mt={10}
        rowGap={4}
        columnGap={2}
      >
        {OFFERINGS_LIST.map(({ icon, title }) => (
          <Grid
            item
            key={title}
            alignItems="center"
            textAlign="center"
            width={180}
            spacing={4}
          >
            <Stack justifyContent="space-between" spacing={2}>
              <Box>
                <img alt={title} src={icon} height="60px" />
              </Box>
              <Typography
                textAlign="center"
                fontWeight="600"
                fontSize={22}
                color={COLORS.DARK_BLUE}
              >
                {title}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurOfferings;
