import React, { useReducer } from "react";
import pokemonReducer from "./pokemonReducer";
import PokemonContext from "./pokemonContext";
import { GET_POKEMONS, GET_POKEMON } from "../types";
import axios from "axios";

const PokemonState = (props) => {
  const initialState = {
    pokemons: [],
    pokemon: undefined,
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const getPokemons = async () => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118"
      );
      dispatch({
        type: GET_POKEMONS,
        payload: { pokemons: res.data.results },
      });
    } catch (e) {}
  };

  const getPokemon = async (name) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      dispatch({
        type: GET_POKEMON,
        payload: { pokemon: res.data },
      });
    } catch (e) {}
  };

  const value = {
    pokemons: state.pokemons,
    pokemon: state.pokemon,
    getPokemons,
    getPokemon
  };

  return (
    <PokemonContext.Provider value={value}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
