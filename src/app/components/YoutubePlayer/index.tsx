import { Box, BoxProps } from "@mui/material";
import React from "react";
import { YOUTUBE_URL } from "./constants";

type TYoutubePlayer = {
  embedId: string;
  containerProps?: BoxProps;
};

const YoutubePlayer: React.FC<TYoutubePlayer> = ({
  embedId,
  containerProps,
}) => (
  <Box {...containerProps}>
    <Box
      component="iframe"
      width={{ md: 700, lg: 800 }}
      height={{ xs: 350, lg: 450 }}
      src={`${YOUTUBE_URL}${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      borderRadius={4}
      border="none"
    />
  </Box>
);

export default YoutubePlayer;
