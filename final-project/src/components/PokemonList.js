import React, { useContext, useEffect } from "react";
import { List } from "react-native-paper";
import { FlatList } from "react-native";
import PokeListItem from "./PokeListItem";
import pokemonContext from "../context/pokemon/pokemonContext";
const PokemonList = () => {
  const { getPokemons, pokemons } = useContext(pokemonContext);

  useEffect(() => {
    getPokemons();
  }, []);

  const renderPokemonListItem = ({ item }) => {
    return <PokeListItem name={item.name} />;
  };
  return (
    <FlatList
      data={pokemons}
      renderItem={renderPokemonListItem}
      keyExtractor={(item) => item.name}
    />
  );
};

export default PokemonList;
