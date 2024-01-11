import { Box, Stack, Typography } from "@mui/material";

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

const OurDomainExpertise = () => {
  return (
    <Box mb={12.5}>
      <Typography
        textAlign="center"
        color={COLORS.DARK_BLUE}
        fontWeight="600"
        fontSize="30px"
        my={12.5}
      >
        {messages.ourDomainExpertise}
      </Typography>
      <Stack direction="row" justifyContent="space-between" spacing={4} mx={20}>
        {OUR_DOMAIN_EXPERTISE.map(({ id, title, description, icon }) => (
          <StyledCard key={id} elevation={4}>
            <StyledCardNumberContainer bgcolor={COLORS.PRIMARY_BLUE}>
              <StyledCardNumberText>{id}</StyledCardNumberText>
            </StyledCardNumberContainer>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardContainer spacing={2} direction="column">
              <StyledCardDescription>{description}</StyledCardDescription>
              <img
                alt="card_icon"
                src={icon}
                width={60}
                height={50}
                style={{ margin: "0px auto", paddingRight: "8px" }}
              />
            </StyledCardContainer>
          </StyledCard>
        ))}
      </Stack>
    </Box>
  );
};

export default OurDomainExpertise;
