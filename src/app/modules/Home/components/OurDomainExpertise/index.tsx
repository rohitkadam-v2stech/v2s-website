import { Box, Grid, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import { messages } from "./config/messages";
import {
  StyledCard,
  StyledCardContainer,
  StyledCardDescription,
  StyledCardNumberContainer,
  StyledCardNumberText,
  StyledCardTitle,
} from "./style";
import { OUR_DOMAIN_EXPERTISE } from "./constants";
import useDeviceSize from "../../../../hooks/useDeviceSize";

const OurDomainExpertise = () => {
  const { isOnMobile } = useDeviceSize();

  return (
    <Box mb={12.5} px={{ xs: 2, md: 6, lg: 8, xl: 8 }}>
      <Typography
        textAlign="center"
        color={COLORS.DARK_BLUE}
        fontWeight="600"
        fontSize="30px"
        my={{ xs: 6, sm: 6, md: 8, lg: 8 }}
      >
        {messages.ourDomainExpertise}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={6}
        px={{ xs: 0, sm: 0, md: 0, lg: 4, xl: 4 }}
      >
        {OUR_DOMAIN_EXPERTISE.map(({ id, title, description, icon }) => (
          <Grid key={id} item xs={12} sm={6} md={3.5} lg={2}>
            <StyledCard elevation={4}>
              <StyledCardNumberContainer bgcolor={COLORS.PRIMARY_BLUE}>
                <StyledCardNumberText>{id}</StyledCardNumberText>
              </StyledCardNumberContainer>
              <StyledCardTitle>{title}</StyledCardTitle>
              <StyledCardContainer spacing={4}>
                <StyledCardDescription>{description}</StyledCardDescription>
                <Box textAlign="center" width="100%" pr={2}>
                  <img
                    alt="card_icon"
                    src={icon}
                    width={isOnMobile ? 80 : 50}
                    height={isOnMobile ? 70 : 50}
                  />
                </Box>
              </StyledCardContainer>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurDomainExpertise;
