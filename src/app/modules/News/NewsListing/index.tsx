import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import COLORS from "../../../styles/colors";
import { messages } from "../config/messages";
import { NEWS_LIST } from "../config/constants";
import { APPLICATION_URLS } from "../../../Routing/config/appsConfig";
import Header from "./components/Header";

const NewsListing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <Box bgcolor={COLORS.BACKGROUND_GREY} px="6%" py={4}>
        <Typography fontSize={32} fontWeight={700}>
          {messages.allPosts}
        </Typography>
      </Box>

      <Grid container spacing={8} px="8%" py={8}>
        {NEWS_LIST.map((news: any) => (
          <>
            <Grid item xs={12} sm={6} md={4} lg={6} xl={6}>
              <img src={news?.image} alt="news" width="100%" />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={8}
              lg={6}
              xl={6}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`${APPLICATION_URLS.NEWS}/${news?.id}`)}
            >
              <Stack justifyContent="space-between" height="100%">
                <Stack justifyContent="space-between" spacing={4}>
                  <Box
                    bgcolor={COLORS.BLACK}
                    color={COLORS.WHITE}
                    width="fit-content"
                    px={2}
                    py={1}
                    mb={6}
                  >
                    <Typography
                      fontSize={12}
                      fontWeight={700}
                      textTransform="uppercase"
                    >
                      {news?.newsType}
                    </Typography>
                  </Box>

                  <Typography fontSize={24} fontWeight={600}>
                    {news?.title}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                    divider={
                      <Divider
                        color={COLORS.GREY_TEXT}
                        orientation="vertical"
                        flexItem
                      />
                    }
                  >
                    <Typography
                      fontSize={16}
                      fontWeight={400}
                      color={COLORS.GREY_TEXT}
                    >
                      By{" "}
                      <span style={{ color: COLORS.PRIMARY_BLUE }}>
                        {news?.uploadedBy}
                      </span>
                    </Typography>

                    <Typography
                      fontSize={16}
                      fontWeight={400}
                      color={COLORS.GREY_TEXT}
                    >
                      {news?.date}
                    </Typography>
                  </Stack>

                  <Typography fontSize={16} fontWeight={400}>
                    {news?.description}
                  </Typography>
                </Stack>

                <Stack spacing={1} mt={4}>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography
                      fontSize={16}
                      fontWeight={700}
                      color={COLORS.DARK_BLUE}
                    >
                      {messages.readMore}
                    </Typography>

                    <EastIcon
                      fontSize="small"
                      sx={{ color: COLORS.DARK_BLUE }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default NewsListing;
