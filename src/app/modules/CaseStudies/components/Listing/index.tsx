import { TCaseStudyData } from "../../config/types";
import { CASE_LIST } from "../Details/config/constants";
import CaseCard from "./components/CaseCard";

type TCaseStudiesListingProps = {
  data: Array<TCaseStudyData>;
};

const CaseStudiesListing: React.FC<TCaseStudiesListingProps> = ({ data }) => {
  return (
    <>
      {Object.keys(CASE_LIST).map((item, index) => {
        return <CaseCard index={index} path={item} {...CASE_LIST[item].data} />;
      })}
    </>
  );
};

export default CaseStudiesListing;
