import { Box, Grid, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import OverviewCard from "../../../../components/OverviewCard";
import { NEWS_LIST } from "../../config/constants";
import { useNavigate } from "react-router-dom";
import { APPLICATION_URLS } from "../../../../Routing/config/appsConfig";

const News: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box px="6%" py={16}>
      <Typography
        fontSize={30}
        fontWeight={700}
        color={COLORS.DARK_BLUE}
        textAlign="center"
        mb={6}
      >
        {messages.news}
      </Typography>

      <Grid container spacing={12}>
        {NEWS_LIST.map((news, index) => (
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index}>
            <OverviewCard
              image={news.image}
              title={news.title}
              description={news.description}
              onReadMoreClick={() => {
                navigate(`${APPLICATION_URLS.NEWS}/${news?.id}`);
              }}
              isReadMoreVisible
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
