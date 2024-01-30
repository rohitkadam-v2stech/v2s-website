import { Box, Stack, Typography } from "@mui/material";
import COLORS from "../../../../../../styles/colors";
import { APPLICATION_URLS } from "../../../../../../Routing/config/appsConfig";
import { useNavigate } from "react-router-dom";
import { messages } from "../../../../config/messages";

type TContentProps = {
  data: any;
};

const Content: React.FC<TContentProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <Stack px={"8%"}>
        <Typography fontSize={16} fontWeight={400} py={4}>
          {data?.subtitle1}
        </Typography>

        <Typography fontSize={16} fontWeight={400} py={4}>
          {data?.subtitle2}
        </Typography>

        {data?.newsImage && (
          <Box py={6}>
            <img src={data?.newsImage} alt="news-content" width="100%" />
          </Box>
        )}

        <Typography fontSize={16} fontWeight={400} py={6}>
          {messages.forCareerOpportunities}{" "}
          <span
            style={{
              color: COLORS.PRIMARY_BLUE,
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => navigate(APPLICATION_URLS.CAREER)}
          >
            {messages.careerURL}
          </span>
        </Typography>
      </Stack>

      <Box
        fontSize={16}
        fontWeight={400}
        mx={"8%"}
        p={3}
        bgcolor={COLORS.BACKGROUND_GREY}
      >
        {messages.tags}{" "}
        <span style={{ color: COLORS.GREY_TEXT }}>{messages.companyNews}</span>
      </Box>

      <Stack mx={"8%"} py={6}>
        <Typography fontSize={16} fontWeight={600}>
          {messages.leaveReply}
        </Typography>
        <Typography fontSize={16} fontWeight={400}>
          You must be{" "}
          <span style={{ color: COLORS.PRIMARY_BLUE }}>
            {messages.loggedIn}
          </span>{" "}
          to post a comment.
        </Typography>
      </Stack>
    </>
  );
};

export default Content;
