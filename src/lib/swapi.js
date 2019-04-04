const apiUrl = "https://swapi.co/api";

export function getPlanetById(id) {
  return fetch(`${apiUrl}/planets/${id}`).then(res => res.json());
}

export function getAllPlanets() {
  return fetch(`${apiUrl}/planets/`).then(res => res.json());
}
