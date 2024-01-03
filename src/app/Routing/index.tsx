import { Route, Routes } from "react-router-dom";

import { ROUTES_CONFIG } from "./config/routesConfig";

const RoutingProvider = () => (
  <Routes>
    {ROUTES_CONFIG.map(({ element, path }) => (
      <Route path={path} element={element} />
    ))}
  </Routes>
);

export default RoutingProvider;
