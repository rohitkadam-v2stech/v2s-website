import { useMemo } from "react";
import { useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet";

import AboutClients from "./components/AboutClients";
import ProblemStatement from "./components/ProblemStatement";
import ValueProposition from "./components/ValueProposition";
import Header from "./components/Header";
import ProjectImagesSlider from "./components/ProjectImagesSlider";
import { CASE_LIST } from "./config/constants";
import { messages } from "./config/messages";
import ExploreOtherCaseStudies from "./components/ExploreOtherCaseStudies";

const CaseStudiesDetails: React.FC = () => {
  const { pathname } = useLocation();

  const casePath = pathname.split("/").pop();

  const data = useMemo(
    () => CASE_LIST[casePath as keyof typeof CASE_LIST]?.data,
    [casePath]
  );

  if (!data) {
    return <>{messages.noPageFound}</>;
  }

  return (
    <>
      {/* <Helmet>
        <title>{data.title}</title>
      </Helmet> */}
      <Header state={data} />
      <ValueProposition state={data} />
      {data?.projectScreenshots && <ProjectImagesSlider state={data} />}
      <AboutClients data={data} />
      <ProblemStatement data={data} />
      <ExploreOtherCaseStudies />
    </>
  );
};

export default CaseStudiesDetails;
