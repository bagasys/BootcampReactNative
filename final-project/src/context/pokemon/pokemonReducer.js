import { GET_POKEMONS } from "../types";

const pokemonReducer = (state, action) => {
  if (action.type === GET_POKEMONS) {
    return {
      ...state,
      pokemons: action.payload.pokemons,
    };
  }

  return state;
};

export default pokemonReducer;
