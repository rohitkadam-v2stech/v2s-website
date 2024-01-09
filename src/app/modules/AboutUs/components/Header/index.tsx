import { Grid, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import { StyledHeaderWrapper } from "./style";
import { messages } from "../../config/messages";

const Header: React.FC = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <Grid container p={2} spacing={4}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <StyledHeaderWrapper>
          <Typography fontSize={25} fontWeight={700} color={COLORS.DARK_BLUE}>
            {messages.v2sTechSolutions}
          </Typography>

          <Typography
            mt={isOnMobile || isOnTablet ? 0 : -4}
            fontSize={isOnMobile || isOnTablet ? 25 : 75}
            fontWeight={700}
            color={COLORS.DARK_BLUE}
          >
            {messages.aboutUs}
          </Typography>
        </StyledHeaderWrapper>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
      >
        <img
          src="https://v2stech.com/wp-content/uploads/2023/11/About_Us_Banner_Main-1.png"
          alt="banner1"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img
          src="https://v2stech.com/wp-content/uploads/2023/11/We100.png"
          alt="banner2"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Typography
          fontSize={25}
          fontWeight={700}
          color={COLORS.DARK_BLUE}
          pb={6}
        >
          {messages.whoWeAre}
        </Typography>

        <Typography
          fontSize={18}
          fontWeight={600}
          color={COLORS.DARK_BLUE}
          textAlign="justify"
          pb={2}
        >
          {messages.aboutUsDescription}
        </Typography>

        <Typography fontSize={14} fontWeight={600} color={COLORS.DARK_BLUE}>
          {messages.aboutUsSubDescription}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
