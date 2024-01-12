import { useEffect } from "react";
import RoutingProvider from "./app/Routing";
import EntryPoint from "./app/containers/EntryPoint";
import { useLocation } from "react-router-dom";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <EntryPoint>
      <ScrollToTop />
      <RoutingProvider />
    </EntryPoint>
  );
};

export default App;
