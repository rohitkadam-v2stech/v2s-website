import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { APPLICATION_URLS } from "../../../../../Routing/config/appsConfig";
import COLORS from "../../../../../styles/colors";
import { messages } from "../../../config/messages";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
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

        <Typography color={COLORS.PRIMARY_BLUE}>
          {messages.companyNews}
        </Typography>
      </Breadcrumbs>
    </Stack>
  );
};

export default Header;
