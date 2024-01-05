import { useState } from "react";

import {
  Box,
  Divider,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import COLORS from "../../styles/colors";
import { COUNTRIES_LIST } from "./config/constants";
import CaseStudiesListing from "./components/CaseStudiesListing";
import { messages } from "./config/messages";
import FilterIcon from "../../assets/filter.png";
import CaseStudiesHeader from "./components/Header";

const CaseStudies = () => {
  const [country, setCountry] = useState<string | number | null>(null);

  return (
    <Box bgcolor={COLORS.WHITE}>
      <Box mb={12}>
        {/* Insert Background image in this box */}
        <CaseStudiesHeader />
      </Box>

      <Box px={{ xs: "5%", sm: "5%", md: "10%", lg: "15%" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <img
            style={{ width: 20, height: 20 }}
            src={FilterIcon}
            alt="filter"
          />
          <Typography color={COLORS.DARK_BLUE}>{messages.filterBy}</Typography>
          <Select
            sx={{
              color: COLORS.DARK_BLUE,
              backgroundColor: COLORS.LIGHT_BLUE,
              width: 200,
            }}
            value={country || "select"}
            onChange={(event) => setCountry(event.target.value)}
            size="small"
          >
            <MenuItem value="select" disabled>
              {messages.country}
            </MenuItem>
            {COUNTRIES_LIST.map((country) => (
              <MenuItem key={country.id} value={country.id}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
        </Stack>

        <Divider
          sx={{ my: 1, width: "100%", height: 2, bgcolor: COLORS.DARK_BLUE }}
        />

        <CaseStudiesListing />
      </Box>
    </Box>
  );
};

export default CaseStudies;
