import { Box, Grid, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import InitiativeCard from "./components/InitiativeCard";
import { messages } from "./config/messages";
import { OUR_INITIATIVES } from "./constants";

const OurInitiatives: React.FC = () => (
  <Box px="6%" pb={10} bgcolor={COLORS.LIGHT_BLUE}>
    <Typography
      fontSize="30px"
      fontWeight="600"
      color={COLORS.DARK_BLUE}
      textAlign="center"
      py={6}
    >
      {messages.ourInitiatives}
    </Typography>

    <Grid container gap={12} alignItems="center" justifyContent="center">
      {OUR_INITIATIVES.map((news, index) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          key={index}
          container
          height="100%"
        >
          <InitiativeCard
            image={news.image}
            title={news.title}
            description={news.description}
            onReadMoreClick={() => {}}
            containerProps={{ width: 640, height: 496 }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default OurInitiatives;
