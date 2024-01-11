import { Box, Divider, Stack, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";
import { OUR_GROWTH_STORY_LIST } from "../../config/constants";
import {
  StyledArrowIcon,
  StyledGrowthStoryCard,
  StyledGrowthStoryCardsWrapper,
} from "./styles";

const OurGrowthStory: React.FC = () => (
  <Box px="10%" bgcolor={COLORS.BACKGROUND_GREY}>
    <Typography
      fontSize={30}
      fontWeight={700}
      color={COLORS.DARK_BLUE}
      pt={8}
      pb={12}
      textAlign="center"
    >
      {messages.ourGrowthStory}
    </Typography>

    <StyledGrowthStoryCardsWrapper style={{ overflowX: "auto" }}>
      <Stack direction="row" width="100%" spacing={6} alignItems="flex-end">
        {OUR_GROWTH_STORY_LIST.map((item, index) => (
          <Stack spacing={6} height="100%" justifyContent="end">
            <StyledGrowthStoryCard>
              <Stack height="100%" justifyContent="end">
                <Typography
                  fontSize={20}
                  fontWeight={700}
                  color={COLORS.WHITE}
                  mb={2}
                >
                  {item?.year}
                </Typography>

                <Typography fontSize={16} fontWeight={400} color={COLORS.WHITE}>
                  {item?.content}
                </Typography>
              </Stack>

              <StyledArrowIcon />
            </StyledGrowthStoryCard>

            <Stack position="relative" width="100%">
              <Stack direction="row" spacing={4} pl={4} alignItems="center">
                {item?.icon}

                {index < OUR_GROWTH_STORY_LIST?.length - 1 && (
                  <Divider style={{ width: "110%", margin: 0 }} />
                )}
              </Stack>

              <Typography
                fontSize={20}
                fontWeight={700}
                color={COLORS.DARK_BLUE}
                pl={2}
                mt={2}
              >
                {item?.year}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </StyledGrowthStoryCardsWrapper>
  </Box>
);

export default OurGrowthStory;
