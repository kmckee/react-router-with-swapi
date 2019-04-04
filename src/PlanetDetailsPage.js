import React, { Component } from "react";
import { getPlanetById, getAllPlanets } from "./lib/swapi";

class PlanetDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true
    };
  }

  componentDidMount() {
    const id = this.props.match.params.planetId;
    getPlanetById(id).then(json =>
      this.setState({ planet: json, loading: false })
    );
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>Planet Details For {this.state.planet.name}</h1>
        <p>TODO: Put some details here.</p>
      </div>
    );
  }
}

export default PlanetDetailsPage;
