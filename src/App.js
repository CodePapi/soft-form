import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard";
import "./tailwind.build.css";

function App() {
  return (
    <div className="antialiased font-sans text-gray-900 bg-gray-200 h-full">
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Form} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
