import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [ pokemonList, setPokemonList ] = useState([])
  const [ searchNarrow, setSearchNarrow ] = useState ("")


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((r) => r.json())
    .then((pokemon) => setPokemonList(pokemon));
}, [])

  const handleSearchNarrowList = (currentSearch) => {
    setSearchNarrow(currentSearch)
  }

  
  const handleAddPokemon = (newPokemon) => {
    const updatedPokemonList = [...pokemonList, newPokemon]
    setPokemonList(updatedPokemonList)
  }

    
  

  let filteredPokemon
  searchNarrow !== "" ?
  filteredPokemon = pokemonList.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchNarrow.toLowerCase())
    }) :
  filteredPokemon = pokemonList


  

//   let filteredPokemon = []
//   if (searchNarrow === ""){
//     console.log("pokemonList in else:", [...pokemonList])
//     filteredPokemon = [...pokemonList]
//     console.log("filteredPokemon in else:", filteredPokemon)
//     debugger;
//   return filteredPokemon
//   } else { 
//     filteredPokemon = 
//     pokemonList.filter(pokemon => {
//     return pokemon.name.toLowerCase().includes(searchNarrow.toLowerCase())
//   } )  
// }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNewPokemon={handleAddPokemon}/>
      <br />
      <Search handleSearchNarrowList={handleSearchNarrowList} />
      <br />
      <PokemonCollection pokemonList={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
