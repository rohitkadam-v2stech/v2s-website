import { Box } from "@mui/material";
import COLORS from "../../styles/colors";
import NewsListing from "./NewsListing";

const News: React.FC = () => (
  <Box bgcolor={COLORS.WHITE}>
    <NewsListing />
  </Box>
);

export default News;
