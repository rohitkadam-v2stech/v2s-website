import { useLocation } from "react-router-dom";

import AboutClients from "./components/AboutClients";
import ProblemStatement from "./components/ProblemStatement";
import ValueProposition from "./components/ValueProposition";
import Header from "./components/Header";
import ProjectImagesSlider from "./components/ProjectImagesSlider";

const CaseStudiesDetails: React.FC = () => {
  const { state } = useLocation();

  return (
    <>
      <Header state={state} />

      <ValueProposition state={state} />

      {state?.projectScreenshots && <ProjectImagesSlider state={state} />}

      <AboutClients data={state} />
      <ProblemStatement data={state} />
    </>
  );
};

export default CaseStudiesDetails;
