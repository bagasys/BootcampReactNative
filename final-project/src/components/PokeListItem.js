import React from "react";
import { List } from "react-native-paper";
const PokemonListItem = ({ name }) => {
  return (
    <List.Item
      title={name}
      description="Item description"
      left={(props) => <List.Icon {...props} icon="folder" />}
    />
  );
};

export default PokemonListItem;
