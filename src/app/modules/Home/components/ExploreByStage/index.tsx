import { Button, Paper, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";

const ExploreByStage = () => {
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
        direction="row"
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
      <Button
        variant="contained"
        size="large"
        sx={{
          width: 500,
          bgcolor: COLORS.DARK_BLUE,
          color: "white",
          fontSize: "16px",
          lineHeight: "23px",
          paddingInline: "200px",
          paddingBlock: "15px",
        }}
      >
        {messages.talkToUs}
      </Button>
    </Stack>
  );
};

export default ExploreByStage;
