import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { StyledContainer, StyledContent } from "../../style";
import { TCarouselData } from "../../config/types";

const BannerCard: React.FC<TCarouselData> = ({
  title,
  subtitle,
  imgPath,
  carouselBtn,
}) => (
  <StyledContainer imgPath={imgPath}>
    <StyledContent spacing={6} mt={4}>
      <Typography
        fontSize={{ xs: "18px", sm: "24px", md: "35px", lg: "35px" }}
        fontWeight="bold"
        lineHeight={1}
      >
        {title}
      </Typography>
      <Typography fontSize={{ xs: "14px", sm: "17px", md: "17px", lg: "17px" }}>
        {subtitle}
      </Typography>
      <Box>{carouselBtn}</Box>
    </StyledContent>
  </StyledContainer>
);

export default BannerCard;
