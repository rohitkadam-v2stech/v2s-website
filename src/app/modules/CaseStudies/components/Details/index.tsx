import { useParams } from "react-router-dom";

import { CASE_STUDIES_LIST } from "../../config/constants";
import AboutClients from "./components/AboutClients";
import ProblemStatement from "./components/ProblemStatement";

const CaseStudiesDetails: React.FC = () => {
  const { id } = useParams();

  const filteredCaseStudiesDetails =
    id && CASE_STUDIES_LIST?.filter((item) => item?.id === parseInt(id));

  const data = filteredCaseStudiesDetails && filteredCaseStudiesDetails[0];

  return (
    <>
      <AboutClients data={data} />
      <ProblemStatement data={data} />
    </>
  );
};

export default CaseStudiesDetails;
