import { Box, Grid, Stack } from "@mui/material";

import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import CaseStudiesBanner from "../../../../assets/world_map.png";
import { StyledExtraLargeBoldText, StyledRegularText } from "../../style";

const CaseStudiesHeader: React.FC = () => (
  <Box px={{ xs: "5%", sm: "5%", md: "10%", lg: "15%" }}>
    <Grid container>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <Stack justifyContent="center" height="100%">
          <Box>
            <StyledExtraLargeBoldText color={COLORS.DARK_BLUE}>
              {messages.caseStudies}
            </StyledExtraLargeBoldText>

            <StyledRegularText textAlign="justify">
              {messages.caseStudiesDescription}
            </StyledRegularText>
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
        <img
          style={{ width: "100%" }}
          src={CaseStudiesBanner}
          alt="case_studies_banner"
        />
      </Grid>
    </Grid>
  </Box>
);

export default CaseStudiesHeader;
