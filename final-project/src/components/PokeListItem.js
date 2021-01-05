import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import axios from "axios";
import { Chip } from "react-native-paper";

const PokemonListItem = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemon(res.data);
  };

  useEffect(() => {
    getPokemon(name);
  }, []);

  if (!pokemon) {
    return (
      <Card style={styles.container}>
        <Card.Title title="loading..." />
      </Card>
    );
  }

  const renderPokemonImage = (props) => {
    return (
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `${pokemon.sprites.front_default}`,
        }}
        {...props}
      />
    );
  };

  const renderChip = ({item}) => (
    <Chip icon="" >
        {item.type.name}
    </Chip>
  );

  return (
    <Card style={styles.container}>
      <Card.Title
        title={pokemon.name}
        subtitle="Card Subtitle"
        left={renderPokemonImage}
      />
      <Card.Content>
        <FlatList data={pokemon.types} numColumns={2} renderItem={renderChip} keyExtractor={item => item.name} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
export default PokemonListItem;
