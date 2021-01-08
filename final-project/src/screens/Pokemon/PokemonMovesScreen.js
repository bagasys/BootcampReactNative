import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Card, DataTable, Title } from "react-native-paper";
import pokemonContext from "../../context/pokemon/pokemonContext";
const PokemonMovesScreen = () => {
  const { pokemon } = useContext(pokemonContext);

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
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title={pokemon.name}
          subtitle={`Height: ${pokemon.height / 10}m Weight: ${
              pokemon.weight / 10
          }kg`}
          left={renderPokemonImage}
        />
      </Card>
      <Title style={{ marginLeft: 15 }}>Moves {pokemon.name}</Title>
      <Card>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
          </DataTable.Header>
          <ScrollView style={{ height: 300 }}>
            {pokemon.moves.map((move) => (
              <DataTable.Row key={move.move.name}>
                <DataTable.Cell>{move.move.name}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </ScrollView>
        </DataTable>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default PokemonMovesScreen;
