import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import AboutClients from "./components/AboutClients";
import ProblemStatement from "./components/ProblemStatement";
import YoutubePlayer from "../../../../components/YoutubePlayer";
import { V2S_TECH_YOUTUBE_VIDEO_EMBED_ID } from "./config/constants";
import ValueProposition from "./components/ValueProposition";
import Header from "./components/Header";

const CaseStudiesDetails: React.FC = () => {
  const { state } = useLocation();

  return (
    <>
      <Header state={state} />

      <ValueProposition state={state} />

      <Box py={6} textAlign="center" bgcolor="white">
        <YoutubePlayer
          embedId={V2S_TECH_YOUTUBE_VIDEO_EMBED_ID}
          containerProps={{ borderRadius: "20px", border: "none" }}
        />
      </Box>
      <AboutClients data={state} />
      <ProblemStatement data={state} />
    </>
  );
};

export default CaseStudiesDetails;
