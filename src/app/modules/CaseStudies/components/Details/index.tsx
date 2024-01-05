import { useLocation } from "react-router-dom";

const CaseStudiesDetails: React.FC = () => {
  const { state } = useLocation();

  console.log("state", state);

  return <>{state?.title}</>;
};

export default CaseStudiesDetails;
