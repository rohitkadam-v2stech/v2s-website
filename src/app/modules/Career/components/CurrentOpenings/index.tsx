import { Search } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { messages } from "../../config/messages";
import COLORS from "../../../../styles/colors";
import jobsData from "../../data.json";
import JobDescriptionCard from "../JobDescriptionCard";
import "./style.css";

const CurrentOpenings = () => (
  <Box bgcolor={COLORS.BACKGROUND_GREY}>
    <Stack justifyContent="center" alignItems="center" py={6} spacing="20px">
      <Typography fontSize="30px" fontWeight="700" color={COLORS.DARK_BLUE}>
        {messages.currentOpenings}
      </Typography>
      {/* <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search job role"
          style={{ backgroundColor: "white", color: "black" }}
        />
        <Search className="search-icon" style={{ fill: "black" }} />
      </div> */}
      <Grid
        container
        gap="20px"
        justifyContent="center"
        alignItems="center"
        px={{ xs: 2, sm: 2, md: 2, lg: 8 }}
        py="10px"
      >
        {jobsData.data.map((item, id) => (
          <Grid item xs={12} sm={12} md={5.6} lg={3.4} borderRadius="10px">
            <JobDescriptionCard key={id} {...item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  </Box>
);

export default CurrentOpenings;
