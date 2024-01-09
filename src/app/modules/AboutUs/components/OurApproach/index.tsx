import { Box, Grid, Typography } from "@mui/material";
import { OUR_APPROACH } from "../../config/constants";
import COLORS from "../../../../styles/colors";
import { messages } from "../../config/messages";

const OurApproach: React.FC = () => (
  <Box px="6%" py={8}>
    <Box
      position="relative"
      border={`2px solid ${COLORS.DARK_BLUE}`}
      borderRadius="20px"
      p={2}
      mt={2}
    >
      <Box
        component="div"
        position="absolute"
        top="-35px"
        left="-5px"
        bgcolor={COLORS.WHITE}
        px={1}
        ml={1}
      >
        <Typography fontSize={30} fontWeight={700} color={COLORS.DARK_BLUE}>
          {messages.ourApproach}
        </Typography>
      </Box>

      <Grid container>
        {OUR_APPROACH.map((values, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            sx={{ my: 4, p: 2 }}
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
              <Typography
                textAlign="justify"
                fontSize={14}
                fontWeight={400}
                mr={index < OUR_APPROACH.length - 1 ? 8 : 0}
              >
                {values.description}
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default OurApproach;
