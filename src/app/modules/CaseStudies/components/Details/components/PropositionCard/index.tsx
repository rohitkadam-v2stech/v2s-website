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
      sx={{ width: 300, borderRadius: 0, height: "100%", pb: 2 }}
      elevation={0}
    >
      <Typography
        p={2}
        bgcolor={COLORS.DARK_BLUE}
        color={COLORS.WHITE}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Box component="ul" px={4} pt={1}>
        {details.map((item) => (
          <Box component="li">
            <Typography variant="body2" textAlign="justify">
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default PropositionCard;
