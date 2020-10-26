import React from "react";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import { Divider, Icon, Text } from "react-native-elements";
import Layout from "../constants/Layout";

export default function Profile(props) {
  console.log("Viewing profile right now");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri:
              "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/s320x320/121711480_202036227958843_3954371165382621540_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_ohc=4fgxyV6WwW0AX8G90BF&oh=ddf0e219a54214ff98ca3a896a7232f6&oe=5FBF65E8",
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.desc}>All my homies know is pain.</Text>
      <Divider style={styles.divider} />
      <Text style={styles.desc}>
        I suck at every game I play and am looking for more people to play with.
        Currently looking for Valorant and Rainbow Six Teammates.
      </Text>
      <Divider style={styles.divider} />
      <Text style={styles.desc}>
        Find me on Social here
        {"\n"}www.linkedin.com/in/phil-tang-227026171/
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  name: {
    color: "#5E5E5E",
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  desc: {
    color: "#5E5E5E",
    alignSelf: "flex-start",
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: "#C0C0C0",
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
});
