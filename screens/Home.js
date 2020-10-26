import React from "react";
import { SafeAreaView, StyleSheet, View, Button } from "react-native";
import Swiper from "react-native-deck-swiper";
import { Card } from "../components/Card";
import { HomeScreenPics } from "../constants/Pics";

export default function HomeScreen(props) {
  function ViewProfile() {
    props.navigation.navigate("Profile");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        cards={HomeScreenPics}
        renderCard={Card}
        infinite
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={2}
      />

      <View
        style={{
          backgroundColor: "#ccc",
          flexDirection: "row",
          height: "5%",
          elevation: 6,
          justifyContent: "space-around",
          position: "absolute",
          bottom: "5%",
        }}
      >
        <Button
          //onPress={loginHandler}
          title="Home"
          color="rgb(255,255,255)"
        ></Button>
        <Button
          //onPress={loginHandler}
          title="Messages"
          color="rgb(255,255,255)"
        ></Button>
        <Button
          onPress={ViewProfile}
          title="Profile"
          color="rgb(255,255,255)"
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
