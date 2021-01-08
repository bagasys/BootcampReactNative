import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import PokeListItem from "./PokeListItem";
import { Text } from "react-native-paper";
import axios from "axios";

const PokemonList = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118`
      );
      setPokemons(res.data.results);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const renderPokemonListItem = ({ item }) => {
    return <PokeListItem name={item.name} navigation={navigation} />;
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
