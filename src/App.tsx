import RoutingProvider from "./app/Routing";
import EntryPoint from "./app/containers/EntryPoint";

function App() {
  return (
    <EntryPoint>
      <RoutingProvider />
    </EntryPoint>
  );
}

export default App;
