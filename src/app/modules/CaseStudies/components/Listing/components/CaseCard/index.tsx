import { Grid, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

import useDeviceSize from "../../../../../../hooks/useDeviceSize";
import {
  StyledLargeBoldText,
  StyledRegularText,
  StyledSmallText,
} from "../../../../style";
import COLORS from "../../../../../../styles/colors";
import { DashedDivider } from "../../../../../../styles/style";
import { messages } from "../../../../config/messages";
import { TCaseStudyData } from "../../../../config/types";
import { removeAsterisk } from "../../../../../../utils/helpers";
import { APPLICATION_URLS } from "../../../../../../Routing/config/appsConfig";

type TCaseCardProps = TCaseStudyData & {
  index: number;
  path: string;
};

const CaseCard: React.FC<TCaseCardProps> = ({
  index,
  description,
  title,
  image,
  isProjectOngoing,
  startYear,
  endYear,
  minTeamSize,
  maxTeamSize,
  flag,
  path,
}) => {
  const { isOnMobile, isOnTablet } = useDeviceSize();
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`${removeAsterisk(APPLICATION_URLS.CASE_STUDIES)}/${path}`);
  };

  return (
    <Grid
      container
      columnSpacing={4}
      sx={{
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        py: isOnMobile || isOnTablet ? 2 : 5,
      }}
    >
      {/* Image Grid */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img
          src={image}
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
        <Stack sx={{ cursor: "pointer" }} onClick={handleReadMore}>
          <StyledLargeBoldText mb={1} color={COLORS.DARK_BLUE} lineHeight={1.2}>
            {title}
          </StyledLargeBoldText>

          <StyledRegularText mb={2} textAlign="justify">
            {description}
          </StyledRegularText>
        </Stack>

        <Stack spacing={1}>
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            onClick={handleReadMore}
          >
            <Typography
              fontSize={16}
              fontWeight={700}
              color={COLORS.DARK_BLUE}
              sx={{ cursor: "pointer" }}
            >
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
              <img src={flag} alt="flag" style={{ paddingBlock: 4 }} />
              {isProjectOngoing ? (
                <StyledSmallText
                  color={COLORS.GREY_TEXT}
                >{`${messages.ongoingSince} ${startYear}`}</StyledSmallText>
              ) : (
                <StyledSmallText
                  color={COLORS.GREY_TEXT}
                >{`${startYear}-${endYear}`}</StyledSmallText>
              )}
              <Typography color={COLORS.GREY_TEXT}>|</Typography>

              <StyledSmallText color={COLORS.GREY_TEXT}>
                {`${messages.teamSize} ${minTeamSize}-${maxTeamSize}`}
              </StyledSmallText>
            </Stack>

            {/* {!isOnMobile && (
                  <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{ cursor: "pointer" }}
                  >
                    <StyledSmallText color={COLORS.PRIMARY_BLUE}>
                      {messages.download}
                    </StyledSmallText>

                    <FileDownloadOutlinedIcon
                      fontSize="small"
                      sx={{ color: COLORS.PRIMARY_BLUE }}
                    />
                  </Stack>
                )} */}
          </Stack>

          {isOnMobile && (
            <Stack spacing={1}>
              {/* <Stack direction="row" spacing={0.5}>
                    <StyledSmallText color={COLORS.PRIMARY_BLUE}>
                      {messages.download}
                    </StyledSmallText>

                    <FileDownloadOutlinedIcon
                      fontSize="small"
                      sx={{ color: COLORS.PRIMARY_BLUE }}
                    />
                  </Stack> */}
              <DashedDivider />
            </Stack>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CaseCard;
