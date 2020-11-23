import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import "./tailwind.build.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="antialiased font-sans text-gray-900 bg-gray-200 h-full">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
