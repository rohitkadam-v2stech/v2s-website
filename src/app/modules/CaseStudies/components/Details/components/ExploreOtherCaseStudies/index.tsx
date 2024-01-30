import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";

import COLORS from "../../../../../../styles/colors";
import { messages } from "../../config/messages";
import OtherCaseStudyCard from "./components/OtherCaseStudyCard";
import Slider from "../../../../../../components/Slider";
import useDeviceSize from "../../../../../../hooks/useDeviceSize";
import { CASE_LIST } from "../../config/constants";

interface CaseStudy {
  path: string;
  data: any;
}
// {
//   path: string;
//   data: (typeof CASE_STUDIES_LIST)[0];
// }

const ExploreOtherCaseStudies = () => {
  const { isOnMobile } = useDeviceSize();

  const { pathname } = useLocation();

  const caseDetailPath = pathname.split("/").pop();

  const allCaseStudies = useMemo<any>(
    () =>
      Object.values(CASE_LIST).filter(
        (item: any) => item.path !== caseDetailPath
      ),
    [caseDetailPath]
  );

  return (
    <Box bgcolor={COLORS.BACKGROUND_GREY} p={2}>
      <Typography
        textAlign="center"
        sx={{
          fontSize: "32px",
          color: COLORS.DARK_BLUE,
          fontWeight: "bold",
          pt: 4,
        }}
      >
        {messages.exploreOtherCaseStudies}
      </Typography>
      <Stack
        pt={4}
        pb={3}
        px={{ xs: 4, sm: 10, md: 16, lg: 22 }}
        justifyContent="center"
      >
        <Slider slidesToShow={isOnMobile ? 1 : 3} dots={false} arrows>
          {allCaseStudies.map(({ data, path }: CaseStudy) => (
            <OtherCaseStudyCard key={path} data={data} path={path} />
          ))}
        </Slider>
      </Stack>
    </Box>
  );
};

export default ExploreOtherCaseStudies;
