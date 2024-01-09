import { Box, Grid, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import InitiativeCard from "./components/InitiativeCard";
import { messages } from "./config/messages";
import { OUR_INITIATIVES } from "./constants";

const OurInitiatives: React.FC = () => (
  <Box px="6%" pb={10} bgcolor={COLORS.LIGHT_BLUE}>
    <Typography
      fontSize={30}
      fontWeight={700}
      color={COLORS.DARK_BLUE}
      textAlign="center"
      py={16}
    >
      {messages.ourInitiatives}
    </Typography>

    <Grid container gap={8} alignItems="center" justifyContent="center">
      {OUR_INITIATIVES.map((news, index) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          key={index}
          container
          justifyContent="center"
          alignItems="center"
        >
          <InitiativeCard
            image={news.image}
            title={news.title}
            description={news.description}
            onReadMoreClick={() => {}}
            containerProps={{ width: 400, height: 400 }}
            imageContainerProps={{ height: 200 }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default OurInitiatives;
