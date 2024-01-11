import { Box, Grid, Typography } from "@mui/material";

import { OUR_APPROACH } from "../../config/constants";
import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import {
  StyledCircleIcon,
  StyledContentGrid,
  StyledOurApproachTitleContainer,
  StyledOutlinedContainer,
} from "./styles";

const OurApproach: React.FC = () => {
  return (
    <Box px="6%" py={20} bgcolor={COLORS.WHITE}>
      <StyledOutlinedContainer>
        <StyledCircleIcon />

        <StyledOurApproachTitleContainer>
          <Typography fontSize={30} fontWeight={700} color={COLORS.DARK_BLUE}>
            {messages.ourApproach}
          </Typography>
        </StyledOurApproachTitleContainer>

        <Grid container spacing={4} my={2}>
          {OUR_APPROACH.map((values, index) => (
            <StyledContentGrid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              key={index}
            >
              <Typography
                fontSize={20}
                fontWeight={700}
                color={COLORS.DARK_BLUE}
                mb={2}
              >
                {values.title}
              </Typography>

              {values?.description && (
                <Typography fontSize={14} fontWeight={400}>
                  {values.description}
                </Typography>
              )}
            </StyledContentGrid>
          ))}
        </Grid>
      </StyledOutlinedContainer>
    </Box>
  );
};

export default OurApproach;
