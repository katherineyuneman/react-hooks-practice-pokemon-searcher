import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList }) {

  

  return (
    <Card.Group itemsPerRow={6}>
      <br/>
      {pokemonList.map(eachPokemon => <PokemonCard key={eachPokemon.id} {...eachPokemon} />)
        }
    </Card.Group>
  );
}

export default PokemonCollection;
