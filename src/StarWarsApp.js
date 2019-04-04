import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlanetListPage from "./PlanetsListPage";
import PlanetDetailsPage from "./PlanetDetailsPage";

import "./StarWarsApp.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/planet">Home</Link>
            <Link to="/planet/4">Details</Link>
            <a href="https://www.google.com">Google</a>
          </nav>

          <Route path="/" exact component={PlanetListPage} />
          <Route path="/planet" exact component={PlanetListPage} />
          <Route path="/planet/:planetId" component={PlanetDetailsPage} />
        </Router>
      </div>
    );
  }
}

export default App;
