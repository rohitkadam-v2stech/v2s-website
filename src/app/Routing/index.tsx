import { Route, Routes } from "react-router-dom";

import { ROUTES_CONFIG } from "./config/routesConfig";
import AsyncRenderer from "../containers/AsyncRenderer";
import AppLoader from "../components/AppLoader";

const RoutingProvider = () => (
  <AsyncRenderer fallback={<AppLoader />}>
    <Routes>
      {ROUTES_CONFIG.map(({ element, path }) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  </AsyncRenderer>
);

export default RoutingProvider;
