import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import useDeviceSize from "../../../../hooks/useDeviceSize";

const ExploreByStage = () => {
  const STAGE_IMAGES: Array<string> = [
    "https://v2stech.com/wp-content/uploads/2023/10/earlt-stage.png",
    "https://v2stech.com/wp-content/uploads/2023/10/funded.png",
    "https://v2stech.com/wp-content/uploads/2023/10/growth-1.png",
  ];

  return (
    <Stack
      spacing={10}
      justifyContent="center"
      alignItems="center"
      my={6}
      px={4}
    >
      <Typography
        px={12}
        color={COLORS.DARK_BLUE}
        fontWeight="600"
        fontSize="30px"
      >
        {messages.exploreByStage}
      </Typography>
      <Grid container justifyContent="space-evenly" alignItems="center" gap={4}>
        {STAGE_IMAGES.map((imgPath, id) => (
          <Grid item xs={12} sm={9} md={3} lg={3}>
            <Paper
              component="img"
              src={imgPath}
              width="100%"
              sx={{ borderRadius: "25px" }}
              elevation={16}
            />
          </Grid>
        ))}
      </Grid>
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
        >
          {messages.talkToUs}
        </Button>
      </Box>
    </Stack>
  );
};

export default ExploreByStage;
