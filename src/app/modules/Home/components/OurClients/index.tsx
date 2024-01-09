import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import { CLIENT_LOGOS } from "./constants";
import Slider from "../../../../components/Slider";

const OurClients = () => {
  return (
    <Box bgcolor={COLORS.WHITE} pb={8}>
      <Stack spacing={10} justifyContent="center" alignItems="center" my={6}>
        <Typography
          px={12}
          color={COLORS.DARK_BLUE}
          fontWeight="600"
          fontSize="30px"
        >
          {messages.ourClients}
        </Typography>
      </Stack>
      <Box ml={2} bgcolor={COLORS.WHITE}>
        <Slider>
          {CLIENT_LOGOS.map((imagePath, id) => (
            <Box
              key={id}
              justifyContent="center"
              alignItems="center"
              mx={6}
              textAlign="center"
            >
              <img alt="" src={imagePath} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default OurClients;
