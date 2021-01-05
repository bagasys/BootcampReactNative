import React, { useContext, useEffect } from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import { List } from 'react-native-paper';
import pokemonContext from "../context/pokemon/pokemonContext";
import PokemonList from "../components/PokemonList";

const PokedexScreen = ({navigation}) => {


  return (
      <PokemonList navigation={navigation}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PokedexScreen;
