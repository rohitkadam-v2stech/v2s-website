import { Route, Routes } from "react-router-dom";

import { ROUTES_CONFIG } from "./config/routesConfig";
import ApplicationLayout from "../containers/ApplicationLayout";

const RoutingProvider = () => (
  <ApplicationLayout>
    <Routes>
      {ROUTES_CONFIG.map(({ element, path }) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  </ApplicationLayout>
);

export default RoutingProvider;
