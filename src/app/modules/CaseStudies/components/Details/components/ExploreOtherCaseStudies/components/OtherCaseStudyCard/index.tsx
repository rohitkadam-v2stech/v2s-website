import { useNavigate } from "react-router-dom";
import { Paper, Typography } from "@mui/material";

import { CASE_STUDIES_LIST } from "../../../../../../config/constants";
import { APPLICATION_URLS } from "../../../../../../../../Routing/config/appsConfig";

type TOtherCaseStudyCardProps = {
  data: (typeof CASE_STUDIES_LIST)[0];
  path: string;
};

const OtherCaseStudyCard: React.FC<TOtherCaseStudyCardProps> = ({
  data,
  path,
}) => {
  const navigate = useNavigate();

  const caseStudiesPath = APPLICATION_URLS.CASE_STUDIES.replace("*", "");

  const handleClick = () => {
    navigate(`${caseStudiesPath}${path}`);
  };

  return (
    <Paper
      sx={{ height: "280px", marginInline: 1.6, cursor: "pointer" }}
      onClick={handleClick}
    >
      <img
        src={data.image}
        alt="blogs"
        height="190px"
        style={{ margin: "0px auto" }}
      />
      <Typography fontSize="14px" fontWeight="600" p={2} textAlign="justify">
        {data.title}
      </Typography>
    </Paper>
  );
};

export default OtherCaseStudyCard;
