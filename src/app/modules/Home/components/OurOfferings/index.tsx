import { Box, Stack, Typography } from "@mui/material";

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
    <Box bgcolor={COLORS.WHITE} p={12}>
      <Typography
        variant="h4"
        textAlign="center"
        color={COLORS.DARK_BLUE}
        fontWeight="bold"
      >
        {OUR_OFFERINGS}
      </Typography>
      <Stack direction="row" justifyContent="space-around" mt={14} spacing={2}>
        {OFFERINGS_LIST.map(({ icon, title }) => (
          <Stack key={title} alignItems="center" width={180} spacing={4}>
            <img alt="" src={icon} height="50px" />
            <Typography
              textAlign="center"
              fontWeight="600"
              fontSize={22}
              color={COLORS.DARK_BLUE}
            >
              {title}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default OurOfferings;
