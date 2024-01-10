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
    <StyledContent spacing={6}>
      <Typography fontSize="35px" fontWeight="bold" lineHeight={1}>
        {title}
      </Typography>
      <Typography fontSize="17px">{subtitle}</Typography>
      <Box>{carouselBtn}</Box>
    </StyledContent>
  </StyledContainer>
);

export default BannerCard;
