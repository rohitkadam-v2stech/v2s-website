import { Box, Stack, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import { OUR_OFFERINGS } from "./constants";

const OurOfferings = () => {
  const OFFERINGS_LIST: Array<{ icon: JSX.Element; title: string }> = [
    { icon: <Typography>Icon</Typography>, title: "SaaS Development" },
    {
      icon: <Typography>Icon</Typography>,
      title: "Product Ideation & Consultation",
    },
    {
      icon: <Typography>Icon</Typography>,
      title: "UI/UIX Design",
    },
    {
      icon: <Typography>Icon</Typography>,
      title: "MVP Development",
    },
    {
      icon: <Typography>Icon</Typography>,
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
      <Stack direction="row" justifyContent="space-around" mt={14}>
        {OFFERINGS_LIST.map(({ icon, title }) => (
          <Stack key={title} alignItems="center" width={160} spacing={4}>
            {icon}
            <Typography
              textAlign="center"
              fontWeight="bold"
              fontSize={18}
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
