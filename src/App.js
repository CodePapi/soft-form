import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";
import Dashboard from "./Dashboard";
import "./tailwind.build.css";

function App() {
  return (
    <div className="antialiased text-gray-900 bg-gray-200 h-full py-4">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
