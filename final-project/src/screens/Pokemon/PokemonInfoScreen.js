import React, { useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Card, Chip, ProgressBar } from "react-native-paper";
import pokemonContext from "../../context/pokemon/pokemonContext";

const PokemonInfoScreen = () => {
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

  const stat_total = pokemon.stats.length;
  return (
    <View style={styles.container}>
      <Card style={{ marginBottom: 10 }}>
        <Card.Title
          title={pokemon.name}
          subtitle={`Height: ${pokemon.height / 10}m Weight: ${
            pokemon.weight / 10
          }kg`}
          left={renderPokemonImage}
        />
      </Card>
      <ScrollView>
        <Card style={{ marginBottom: 10 }}>
          <Card.Title title="Abilites" />
          <Card.Content>
            {pokemon.abilities.map((ability) => (
              <Chip style={{ marginBottom: 5 }}>{ability.ability.name}</Chip>
            ))}
          </Card.Content>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Card.Title title="Base Stats" />
          <Card.Content>
            {pokemon.stats.map((stat) => (
              <View style={{ marginBottom: 8 }} key={stat.name}>
                <Text>
                  {stat.stat.name}: {stat.base_stat}
                </Text>
                <ProgressBar progress={stat.base_stat / 100} />
              </View>
            ))}
            <View>
              <Text>Total: {stat_total}</Text>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
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
  statBar: {
    height: 50,
    backgroundColor: "red",
    width: "50%",
  },
});

export default PokemonInfoScreen;
