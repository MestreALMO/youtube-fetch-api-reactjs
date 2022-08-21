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

      <ul style={{ listStyleType: "none" }}>
        {apiData.map((pokemon, index) => (
          <li key={index}>
            {(index + 1).toString().length < apiData.length.toString().length &&
              "0".repeat(
                apiData.length.toString().length - index.toString().length
              )}
            {index + 1}
            {": "}
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </li>
        ))}
      </ul>
    </>
  );
};
