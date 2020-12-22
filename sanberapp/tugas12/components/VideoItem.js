import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (
    (num / si[i].value).toFixed(digits).replace(rx, "$1") +
    si[i].symbol +
    " views"
  );
}

const VideoItem = ({ video }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: video.snippet.thumbnails.medium.url }}
        style={styles.videoThumbnail}
      />
      <View style={styles.descContainer}>
        <Image
          style={styles.userProfilePicture}
          source={{ uri: "https://randomuser.me/api/portraits/men/0.jpg" }}
        />
        <View style={styles.videoDetailContainer}>
          <Text style={styles.videoTitle} numberOfLines={2}>
            {video.snippet.title}
          </Text>
          <Text style={styles.videoStats}>
            {video.snippet.channelTitle +
            " · " +
            nFormatter(video.statistics.viewCount, 1) +
            " · 3 months ago "}
          </Text>
        </View>
        <TouchableOpacity>
          <MaterialIcon name="more-vert" size={20} color="#999999" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  videoThumbnail: {
    height: 200,
  },
  descContainer: {
    flexDirection: "row",
    paddingTop: 15,
  },
  videoDetailContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  videoTitle: {
    fontSize: 16,
    color: "#3c3c3c",
  },

  videoStats: {
    fontSize: 15,
    paddingTop: 3,
  },
});

export default VideoItem;
