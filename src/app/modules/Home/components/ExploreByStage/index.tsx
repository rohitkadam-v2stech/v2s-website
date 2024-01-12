import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import { navigateToWhatsAppContact } from "../../../../utils/helpers";

const ExploreByStage = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  const STAGE_IMAGES: Array<string> = [
    "https://v2stech.com/wp-content/uploads/2023/10/earlt-stage.png",
    "https://v2stech.com/wp-content/uploads/2023/10/funded.png",
    "https://v2stech.com/wp-content/uploads/2023/10/growth-1.png",
  ];

  return (
    <Stack spacing={10} justifyContent="center" alignItems="center" my={6}>
      <Typography
        px={12}
        color={COLORS.DARK_BLUE}
        fontWeight="600"
        fontSize="30px"
      >
        {messages.exploreByStage}
      </Typography>
      <Stack
        direction={isOnMobile || isOnTablet ? "column" : "row"}
        justifyContent="center"
        spacing={4}
        alignItems="center"
      >
        {STAGE_IMAGES.map((imgPath, id) => (
          <Paper
            key={id}
            component="img"
            src={imgPath}
            sx={{ borderRadius: "25px" }}
            elevation={16}
          />
        ))}
      </Stack>
      <Box width="40vw">
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            bgcolor: COLORS.DARK_BLUE,
            color: "white",
            fontSize: "16px",
            lineHeight: "23px",
            paddingBlock: "15px",
          }}
          onClick={navigateToWhatsAppContact}
        >
          {messages.talkToUs}
        </Button>
      </Box>
    </Stack>
  );
};

export default ExploreByStage;
