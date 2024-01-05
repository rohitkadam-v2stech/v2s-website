import { Route, Routes } from "react-router-dom";
import CaseStudiesList from "./modules/CaseStudiesList";
import CaseStudiesDetails from "./components/Details";
import { APPLICATION_URLS } from "../../Routing/config/appsConfig";
import PageNotFound from "../PageNotFound";

const CaseStudies = () => {
  return (
    <Routes>
      <Route index element={<CaseStudiesList />} />
      <Route path=":id" element={<CaseStudiesDetails />} />
      <Route
        path={APPLICATION_URLS.PAGE_NOT_FOUND}
        element={<PageNotFound />}
      />
    </Routes>
  );
};

export default CaseStudies;
