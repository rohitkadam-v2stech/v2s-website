import { Box, Stack, Typography } from "@mui/material";
import Slider from "../../../../../../components/Slider";
import { NEWS_LIST } from "../../../../config/constants";
import { useNavigate } from "react-router-dom";
import { APPLICATION_URLS } from "../../../../../../Routing/config/appsConfig";
import useDeviceSize from "../../../../../../hooks/useDeviceSize";
import NextArrowBtn from "./components/NextArrowBtn";
import PrevArrowBtn from "./components/PrevArrowBtn";
import { messages } from "../../../../config/messages";

type TExploreMoreNewsProps = {
  id: string | undefined;
};

const ExploreMoreNews: React.FC<TExploreMoreNewsProps> = ({ id }) => {
  const navigate = useNavigate();
  const { isOnMobile, isOnTablet } = useDeviceSize();
  const filteredNewsDetails = NEWS_LIST?.filter((item) => item?.id !== id);

  return (
    <Box>
      <Typography fontSize={32} fontWeight={600} textAlign="center">
        {messages.exploreRecentNews}
      </Typography>

      <Stack px={"10%"} py={6} justifyContent="center">
        <Slider
          slidesToShow={isOnMobile || isOnTablet ? 1 : 2}
          dots={false}
          infinite={true}
          autoplay={false}
          prevArrow={<PrevArrowBtn />}
          nextArrow={<NextArrowBtn />}
          arrows
        >
          {filteredNewsDetails?.map((item: any, index: number) => (
            <div
              key={index}
              style={{
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              <img
                src={item?.image}
                alt={`news-screenshot`}
                onClick={() => navigate(`${APPLICATION_URLS.NEWS}/${item?.id}`)}
                style={{ marginRight: "20px", cursor: "pointer" }}
                width="100%"
                // height={isOnMobile ? 200 : 350}
                // height={isOnMobile || isOnTablet ? "100%" : 350}
              />
            </div>
          ))}
        </Slider>
      </Stack>
    </Box>
  );
};

export default ExploreMoreNews;
