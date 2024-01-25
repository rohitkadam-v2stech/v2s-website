import { Box, Grid, Typography } from "@mui/material";
import { OUR_TEAM } from "../../config/constants";
import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import OurCultureImg from "../../../../assets/aboutUsLogos/Culture.png";

const OurTeam: React.FC = () => (
  <>
    <Box px="6%" py={20}>
      <Typography
        fontSize={30}
        fontWeight={700}
        color={COLORS.DARK_BLUE}
        textAlign="center"
      >
        {messages.ourTeam}
      </Typography>

      <Grid container textAlign="center">
        {OUR_TEAM.map((team, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
            sx={{ my: 4 }}
            key={index}
          >
            <img
              src={team.avatar}
              alt="our_values"
              height={315}
              width={250}
              style={{ paddingBottom: 8 }}
            />

            <Typography fontSize={20} fontWeight={700} color={COLORS.DARK_BLUE}>
              {team.name}
            </Typography>

            <Typography fontSize={14} fontWeight={400} color={COLORS.GREY_TEXT}>
              {team.role}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>

    <img src={OurCultureImg} alt="our-culture" width="100%" />
  </>
);

export default OurTeam;
