import { Box, Grid, Stack, Typography } from "@mui/material";
import COLORS from "../../../../styles/colors";
import {
  OUR_VALUES,
  V2S_TECH_YOUTUBE_VIDEO_EMBED_ID,
} from "../../config/constants";
import { DashedDivider } from "../../../../styles/style";
import { messages } from "../../config/messages";
import YoutubePlayer from "../../../../components/YoutubePlayer";
import GlobalCollaboratorsImg from "../../../../assets/aboutUsLogos/GlobalCollaboratorsMap.png";

const OurVision: React.FC = () => (
  <Box bgcolor={COLORS.WHITE}>
    <Box
      bgcolor={COLORS.LIGHT_BLUE}
      px={"6%"}
      py={6}
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <Grid container spacing={4} textAlign="center">
        {OUR_VALUES.map((values, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              my: 4,
            }}
            key={index}
          >
            <img src={values.icon} alt="our_values" height={120} width={120} />

            <Typography
              textTransform="uppercase"
              fontSize={36}
              fontWeight={700}
              color={COLORS.DARK_BLUE}
            >
              {values.title}
            </Typography>

            <DashedDivider
              color={COLORS.BLACK}
              sx={{
                mt: 3,
                mb: 1,
              }}
            />

            {values?.description && (
              <Typography
                fontSize={14}
                fontWeight={400}
                color={COLORS.DARK_BLUE}
              >
                {values.description}
              </Typography>
            )}

            {values?.subDescription?.map((subValues) => (
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: COLORS.DARK_BLUE,
                  }}
                >
                  <span
                    style={{
                      paddingRight: "4px",
                      fontSize: "24px",
                      marginBlock: -6,
                    }}
                  >
                    &#8226;
                  </span>
                  <Typography
                    fontSize={14}
                    fontWeight={400}
                    color={COLORS.DARK_BLUE}
                  >
                    {subValues}
                  </Typography>
                </li>
              </ul>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box py={12} textAlign="center">
      <Stack mb={8}>
        <Typography fontSize={30} fontWeight={700} color={COLORS.DARK_BLUE}>
          {messages.v2sTechSolutions}
        </Typography>

        <Typography fontSize={30} fontWeight={600} color={COLORS.DARK_BLUE}>
          {messages.v2sTechDescription}
        </Typography>
      </Stack>

      <YoutubePlayer
        embedId={V2S_TECH_YOUTUBE_VIDEO_EMBED_ID}
        containerProps={{ borderRadius: "20px", border: "none" }}
      />
    </Box>

    <Box px={"6%"} py={4}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Stack height="100%" justifyContent="center">
            <Typography fontSize={30} fontWeight={700} color={COLORS.DARK_BLUE}>
              {messages.globalCollaboration}
            </Typography>

            <Typography fontSize={30} fontWeight={600} color={COLORS.DARK_BLUE}>
              {messages.globalCollaborationSubText}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <img
            src={GlobalCollaboratorsImg}
            alt="map"
            width="100%"
            height="100%"
          />
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default OurVision;
