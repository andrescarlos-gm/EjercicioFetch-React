import { useState } from "react";

function App() {
  const [loading, setLoading] = useState([true]);
  const [race, setRace] = useState([]);

  const fetching = "https://6544295e5a0b4b04436c18e0.mockapi.io/v1/races/1";
  fetch(fetching)
    .then((response) => response.json())
    .then((race) => setRace(race))
    .finally(() => setLoading(false));

  return <>{loading ? "Cargando" : <> {race.Raza}</>} </>;
}
export default App;
