import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import COLORS from "../../../../../../styles/colors";

type TPropositionCardProps = {
  title: string;
  details: string[];
};

const PropositionCard: React.FC<TPropositionCardProps> = ({
  title,
  details,
}) => {
  return (
    <Paper
      sx={{
        borderRadius: 0,
        height: "100%",
        pb: 2,
      }}
      elevation={0}
    >
      <Typography
        p={2}
        bgcolor={COLORS.DARK_BLUE}
        color={COLORS.WHITE}
        fontWeight="bold"
        fontSize={20}
      >
        {title}
      </Typography>
      <Box component="ul" py={2} pr={2}>
        {details.map((item) => (
          <Box key={item} component="li">
            <Typography>{item}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default PropositionCard;
