import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { APPLICATION_URLS } from "../../../../../../Routing/config/appsConfig";
import COLORS from "../../../../../../styles/colors";
import { useNavigate } from "react-router-dom";
import { messages } from "../../../../config/messages";

type THeaderProps = {
  data: any;
};

const Header: React.FC<THeaderProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <Stack px="8%" py={4}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography
            onClick={() => navigate(APPLICATION_URLS.HOME)}
            sx={{
              cursor: "pointer",
              "&:hover": { color: COLORS.PRIMARY_BLUE },
            }}
            color={COLORS.GREY_TEXT}
          >
            {messages.v2sTech}
          </Typography>

          <Typography
            onClick={() => navigate(APPLICATION_URLS.NEWS)}
            sx={{
              cursor: "pointer",
              "&:hover": { color: COLORS.PRIMARY_BLUE },
            }}
            color={COLORS.GREY_TEXT}
          >
            {messages.companyNews}
          </Typography>

          <Typography color={COLORS.PRIMARY_BLUE}>{data?.title}</Typography>
        </Breadcrumbs>
      </Stack>

      <img src={data?.bannerImage} alt="banner" width="100%" />
    </>
  );
};

export default Header;
