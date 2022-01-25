import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddNewPokemon }) {

  const [pokeFormInputs, setPokeFormInputs ] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: ""
    }
  })

  function handleFormInputs(e){
    // console.log("targetinputs name, value:", e.target.name, e.target.value)
    setPokeFormInputs({...pokeFormInputs,
      [e.target.name]: e.target.value})
    
  }
  console.log("pokeFormInPuts", pokeFormInputs)

  function handleSubmit () {

    console.log("inside submit sprites:", pokeFormInputs.sprites.front, pokeFormInputs.sprites.back)
      const { name, hp, frontUrl, backUrl } = pokeFormInputs
    const newPokeFormInputs = {
        name,
        hp,
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      }
      console.log("new form inputs:", newPokeFormInputs)
  
      fetch("http://localhost:3001/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPokeFormInputs),
      })
        .then((r) => r.json())
        .then((newPokemon) => onAddNewPokemon(newPokemon));
  
    }
  

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleFormInputs}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleFormInputs}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormInputs}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormInputs}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
