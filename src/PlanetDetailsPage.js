import React from "react";

export default props => {
  if (props.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Planet Details For {props.planet.name}</h1>
      <p>TODO: Put some details here.</p>
    </div>
  );
};
