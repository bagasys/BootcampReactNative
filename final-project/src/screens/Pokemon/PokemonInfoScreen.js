import React, { useContext, useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Chip,
  ProgressBar,
} from "react-native-paper";
import StatBar from "../../components/StatBar";
import pokemonContext from "../../context/pokemon/pokemonContext";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const PokemonInfoScreen = ({ route }) => {
  const { pokemon, getPokemon } = useContext(pokemonContext);

  useEffect(() => {
    getPokemon(route.params.name);

  }, [])

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
  if(!pokemon) {
    return <View>
      <Text>asdas</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title={pokemon.name}
          subtitle="Card Subtitle"
          left={renderPokemonImage}
        />
        <Card.Content></Card.Content>
      </Card>
      <ScrollView>
        <Card>
          <Card.Title title="Abilites" />
          <Card.Content>
            {pokemon.abilities.map((ability) => (
              <Chip>{ability.ability.name}</Chip>
            ))}
          </Card.Content>
        </Card>

        <Card>
          <Card.Title title="Base Stats" />
          <Card.Content>
            {pokemon.stats.map((stat) => (
              <View style={{ marginBottom: 8 }}>
                <Text>
                  {stat.stat.name}: {stat.base_stat}
                </Text>
                <ProgressBar progress={stat.base_stat / 100} />
              </View>
            ))}
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
