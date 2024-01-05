import { Divider, Grid, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import { CASE_STUDIES_LIST } from "../../config/constants";
import COLORS from "../../../../styles/colors";
import useDeviceSize from "../../../../hooks/useDeviceSize";
import { messages } from "../../config/messages";
import {
  StyledLargeBoldText,
  StyledRegularText,
  StyledSmallText,
} from "../../style";
import DashedDivider from "../../../../components/DashedDivider";

const CaseStudiesListing: React.FC = () => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <>
      {CASE_STUDIES_LIST.map((item, index) => (
        <Grid
          container
          columnSpacing={4}
          sx={{
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            py: isOnMobile || isOnTablet ? 2 : 5,
          }}
          key={item.id}
        >
          {/* Image Grid */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img
              src={item.image}
              alt="project-screenshot"
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>

          {/* Content Grid */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Stack>
              <StyledLargeBoldText
                mb={1}
                textAlign="justify"
                color={COLORS.DARK_BLUE}
              >
                {item.title}
              </StyledLargeBoldText>

              <StyledRegularText mb={2} textAlign="justify">
                {item.description}
              </StyledRegularText>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" spacing={0.5} alignContent="center">
                <Typography color={COLORS.DARK_BLUE}>
                  {messages.readMore}
                </Typography>

                <EastIcon fontSize="small" sx={{ color: COLORS.DARK_BLUE }} />
              </Stack>

              {!isOnMobile && <DashedDivider />}

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <img src={item.flag} alt="flag" style={{ paddingBlock: 4 }} />
                  {item.isProjectOngoing ? (
                    <StyledSmallText
                      color={COLORS.GREY_TEXT}
                    >{`${messages.ongoingSince} ${item.startYear}`}</StyledSmallText>
                  ) : (
                    <StyledSmallText
                      color={COLORS.GREY_TEXT}
                    >{`${item.startYear}-${item.endYear}`}</StyledSmallText>
                  )}
                  <Typography color={COLORS.GREY_TEXT}>|</Typography>
                  {/* <Divider
                  orientation="vertical"
                  // variant="middle"
                  flexItem
                  sx={{ bgcolor: COLORS.GREY_TEXT }}
                /> */}

                  <StyledSmallText color={COLORS.GREY_TEXT}>
                    {`${messages.teamSize} ${item.minTeamSize}-${item.maxTeamSize}`}
                  </StyledSmallText>
                </Stack>

                {!isOnMobile && (
                  <Stack direction="row" spacing={0.5}>
                    <StyledSmallText color={COLORS.PRIMARY_BLUE}>
                      {messages.download}
                    </StyledSmallText>

                    <FileDownloadOutlinedIcon
                      fontSize="small"
                      sx={{ color: COLORS.PRIMARY_BLUE }}
                    />
                  </Stack>
                )}
              </Stack>

              {isOnMobile && (
                <Stack spacing={1}>
                  <Stack direction="row" spacing={0.5}>
                    <StyledSmallText color={COLORS.PRIMARY_BLUE}>
                      {messages.download}
                    </StyledSmallText>

                    <FileDownloadOutlinedIcon
                      fontSize="small"
                      sx={{ color: COLORS.PRIMARY_BLUE }}
                    />
                  </Stack>
                  <DashedDivider />
                </Stack>
              )}
            </Stack>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CaseStudiesListing;
