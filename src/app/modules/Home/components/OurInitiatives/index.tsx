import { Box, Grid, Typography } from "@mui/material";

import COLORS from "../../../../styles/colors";
import InitiativeCard from "./components/InitiativeCard";
import { messages } from "./config/messages";
import { OUR_INITIATIVES } from "./constants";

const OurInitiatives: React.FC = () => (
  <Box px="8%" pb={10} bgcolor={COLORS.LIGHT_BLUE}>
    <Typography
      fontSize="30px"
      fontWeight="700"
      color={COLORS.DARK_BLUE}
      textAlign="center"
      py={6}
    >
      {messages.ourInitiatives}
    </Typography>

    <Grid container spacing={16}>
      {OUR_INITIATIVES.map((initiative, index) => (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
          <InitiativeCard
            image={initiative.image}
            title={initiative.title}
            description={initiative.description}
            onReadMoreClick={() => {}}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default OurInitiatives;
