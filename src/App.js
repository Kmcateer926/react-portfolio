import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/" Component={Home} />
      <Route exact path="/Contact" Component={Contact} />
      <Route exact path="/Portfolio" Component={Portfolio} />
    </Router>
  );
}

export default App;
