import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const PokemonList = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then((response) => response.json())
      .then((e) => setApiData(e.results));
  }, []);

  console.log(apiData);

  return (
    <>
      <h1>Pokemon List</h1>

      <Typography>{apiData.length} Pokémons: </Typography>
    </>
  );
};
