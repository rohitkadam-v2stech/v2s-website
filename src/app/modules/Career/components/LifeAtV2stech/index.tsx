import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import lifeAtV2stech from "../../../../assets/life_at_v2stech.png";

const LifeAtV2stech = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      bgcolor={COLORS.WHITE}
      py={6}
      spacing={4}
      px={{ xs: 0, sm: 2, md: 10, lg: 22 }}
    >
      <Typography fontSize="30px" fontWeight="700" color={COLORS.DARK_BLUE}>
        {messages.lifeAtV2stech}
      </Typography>
      <Box component="img" width="100%" src={lifeAtV2stech} />
    </Stack>
  );
};

export default LifeAtV2stech;
