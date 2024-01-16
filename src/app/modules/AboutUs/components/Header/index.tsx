import { Grid, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import { StyledHeaderWrapper } from "./style";
import { messages } from "../../config/messages";
import BannerImg1 from "../../../../assets/aboutUsLogos/About_Us_Banner_Main-1.png";
import BannerImg2 from "../../../../assets/aboutUsLogos/We100.png";

const Header: React.FC = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <Grid container pl={2} mb={12} spacing={4}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <StyledHeaderWrapper>
          <Typography
            fontSize={25}
            fontWeight={700}
            color={COLORS.DARK_BLUE}
            textTransform="uppercase"
          >
            {messages.v2sTechSolutions}
          </Typography>

          <Typography
            mt={isOnMobile || isOnTablet ? 0 : -4}
            fontSize={isOnMobile || isOnTablet ? 25 : 75}
            fontWeight={700}
            color={COLORS.DARK_BLUE}
            textTransform="uppercase"
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
          src={BannerImg1}
          alt="banner1"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} textAlign="center">
        <img
          src={BannerImg2}
          alt="banner2"
          style={{
            width: isOnMobile || isOnTablet ? "70%" : "100%",
            height: "100%",
          }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Stack height="100%" justifyContent="center">
          <Typography
            fontSize={24}
            fontWeight={700}
            color={COLORS.DARK_BLUE}
            textTransform="uppercase"
            pb={6}
          >
            {messages.whoWeAre}
          </Typography>

          <Typography
            fontSize={18}
            fontWeight={600}
            color={COLORS.DARK_BLUE}
            pb={2}
          >
            {messages.aboutUsDescription}
          </Typography>

          <Typography fontSize={14} fontWeight={600} color={COLORS.DARK_BLUE}>
            {messages.aboutUsSubDescription}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
