import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import data from "./tugas12/data.json";
import VideoItem from "./tugas12/components/VideoItem";
function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image style={styles.image} source={require("./assets/logo.png")} />
        <View style={styles.rightNav}>
          <TouchableOpacity>
            <MaterialIcon style={styles.rightNavItem} name="search" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcon
              style={styles.rightNavItem}
              name="account-circle"
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={data.items}
          renderItem={({ item }) => <VideoItem video={item}/>}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View style={{height: 0.5, backgroundColor: '#e5e5e5'}}/>
          )}
        />
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <MaterialIcon name="home" size={25} />
          <Text style={styles.bottomNavTitle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <MaterialIcon name="whatshot" size={25} />
          <Text style={styles.bottomNavTitle}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <MaterialIcon name="subscriptions" size={25} />
          <Text style={styles.bottomNavTitle}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <MaterialIcon name="folder" size={25} />
          <Text style={styles.bottomNavTitle}>Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: "white",
    height: 55,
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 22,
  },
  rightNav: {
    flexDirection: "row",
  },
  rightNavItem: {
    marginLeft: 25,
  },
  bottomNav: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 60,
    borderColor: "#e5e5e5",
    borderTopWidth: 0.5,
  },
  bottomNavItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavTitle: {
    fontSize: 11,
    color: "#3c3c3c",
    paddingTop: 4,
  },
});

export default App;
