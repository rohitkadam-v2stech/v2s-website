import { Box, Grid, Typography } from "@mui/material";
import PropositionCard from "../PropositionCard";
import { messages } from "../../config/messages";
import COLORS from "../../../../../../styles/colors";
import useDeviceSize from "../../../../../../hooks/useDeviceSize";

type TValuePropositionProps = {
  state: any;
};

const ValueProposition: React.FC<TValuePropositionProps> = ({ state }) => {
  const { isOnMobile, isOnTablet } = useDeviceSize();

  return (
    <Box py={6} bgcolor={COLORS.BACKGROUND_GREY}>
      <Typography
        textAlign="center"
        sx={{
          fontSize: "32px",
          color: COLORS.DARK_BLUE,
          fontWeight: "bold",
          pt: 4,
        }}
      >
        {messages.valueProposition}
      </Typography>
      <Grid
        container
        justifyContent="center"
        px={isOnMobile || isOnTablet ? 4 : 22}
        spacing={4}
        mt={2}
      >
        {state.valueProposition.map((item: any, id: number) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <PropositionCard title={item.title} details={item.details} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ValueProposition;
