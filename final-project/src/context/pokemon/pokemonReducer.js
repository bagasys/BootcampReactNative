import { GET_POKEMONS, GET_POKEMON } from "../types";

const pokemonReducer = (state, action) => {
  if (action.type === GET_POKEMONS) {
    return {
      ...state,
      pokemons: action.payload.pokemons,
    };
  }
  if (action.type === GET_POKEMON) {
    return {
      ...state,
      pokemon: action.payload.pokemon,
    };
  }

  return state;
};

export default pokemonReducer;
