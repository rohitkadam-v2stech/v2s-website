import { Box, Grid, Stack, Typography } from "@mui/material";

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
  const { isOnMobile, isOnDesktop } = useDeviceSize();

  return (
    <Box mb={12.5} px={{ xs: 2, md: 6 }}>
      <Typography
        textAlign="center"
        color={COLORS.DARK_BLUE}
        fontWeight="600"
        fontSize="30px"
        my={12.5}
      >
        {messages.ourDomainExpertise}
      </Typography>
      <Grid container direction="row" justifyContent="center" gap={6}>
        {OUR_DOMAIN_EXPERTISE.map(({ id, title, description, icon }) => (
          <Grid key={id} item sm={6} md={2}>
            <StyledCard elevation={4}>
              <StyledCardNumberContainer bgcolor={COLORS.PRIMARY_BLUE}>
                <StyledCardNumberText>{id}</StyledCardNumberText>
              </StyledCardNumberContainer>
              <StyledCardTitle>{title}</StyledCardTitle>
              <StyledCardContainer spacing={6} direction="column">
                <StyledCardDescription>{description}</StyledCardDescription>
                <img
                  alt="card_icon"
                  src={icon}
                  width={isOnMobile ? 80 : 70}
                  height={isOnMobile ? 70 : 60}
                  style={{ margin: "0px auto", paddingRight: "8px" }}
                />
              </StyledCardContainer>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurDomainExpertise;
