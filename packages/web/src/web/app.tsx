import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Especies from "./pages/Especies";
import Experiencias from "./pages/Experiencias";
import Contacto from "./pages/Contacto";
import { Layout } from "./components/Layout";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/especies" component={Especies} />
          <Route path="/experiencias" component={Experiencias} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </Layout>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
