import { useEffect, useState } from "react";

import {
  Box,
  Divider,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import COLORS from "../../../../styles/colors";
import CaseStudiesHeader from "../../components/Header";
import FilterIcon from "../../../../assets/filter.png";
import CaseStudiesListing from "../../components/Listing";
import { messages } from "../../config/messages";
import caseStudiesData from "../../data.json";

// TODO: any type temp added

const CaseStudiesList = () => {
  const [country, setCountry] = useState<string>();
  const [allCountries, setAllCountries] = useState<
    Array<{ id: number; label: string }>
  >([]);
  const [allCaseStudies, setAllCaseStudies] = useState<any>(
    caseStudiesData.data
  );

  useEffect(() => {
    const countriesList = caseStudiesData.data
      .map((item) => ({
        id: item.id,
        label: item.country,
      }))
      .filter(
        ({ label }, index, arr) =>
          arr.findIndex((obj) => obj.label === label) === index
      );

    setAllCountries(countriesList);
  }, []);

  const handleCountryChange = (event: any) => {
    setCountry(event.target.value);
    if (event.target.value === "all") {
      setAllCaseStudies(caseStudiesData.data);
    } else {
      setAllCaseStudies(() => {
        const updatedAllCaseStudies = caseStudiesData.data.filter(
          ({ country: countryName }: any) => countryName === event.target.value
        );
        return updatedAllCaseStudies;
      });
    }
  };

  return (
    <Box bgcolor={COLORS.WHITE}>
      <Box mb={12}>
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
            value={country || "all"}
            onChange={handleCountryChange}
            size="small"
          >
            <MenuItem value="all" selected>
              {messages.all}
            </MenuItem>
            {allCountries.map(({ id, label }) => (
              <MenuItem key={id} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </Stack>

        <Divider
          sx={{ my: 1, width: "100%", height: 2, bgcolor: COLORS.DARK_BLUE }}
        />

        <CaseStudiesListing data={allCaseStudies} />
      </Box>
    </Box>
  );
};

export default CaseStudiesList;
