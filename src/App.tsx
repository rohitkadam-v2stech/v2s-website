import RoutingProvider from "./app/Routing";
import EntryPoint from "./app/containers/EntryPoint";

const App = () => (
  <EntryPoint>
    <RoutingProvider />
  </EntryPoint>
);

export default App;
