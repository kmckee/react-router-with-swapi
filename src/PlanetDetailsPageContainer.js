import React, { Component } from "react";
import { getPlanetById } from "./lib/swapi";
import PlanetDetailsPage from "./PlanetDetailsPage";

class PlanetDetailsPageContainer extends Component {
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
    return (
      <PlanetDetailsPage
        loading={this.state.loading}
        planet={this.state.planet}
      />
    );
  }
}

export default PlanetDetailsPageContainer;
