import React from "react";

import { Text, View } from "react-native";

const DetailsScreen = ({ route }) => {
  return (
    <View>
      <Text>asda</Text>
      {route.params.title && <Text>{route.params.title}</Text>}
    </View>
  );
};

export default DetailsScreen;
