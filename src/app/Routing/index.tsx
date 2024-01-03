import { Route, Routes } from "react-router-dom";

import { ROUTES_CONFIG } from "./config/routesConfig";
import AsyncRenderer from "../containers/AsyncRenderer";
import AppLoader from "../components/AppLoader";
import ApplicationLayout from "../containers/ApplicationLayout";

const RoutingProvider = () => (
  <ApplicationLayout>
    <AsyncRenderer fallback={<AppLoader />}>
      <Routes>
        {ROUTES_CONFIG.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </AsyncRenderer>
  </ApplicationLayout>
);

export default RoutingProvider;
