import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </Router>
    </>
  );
}

export default App;
