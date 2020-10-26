import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function Main(props) {
  console.log("Main screen");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 50, marginBottom: "60%" }}>Link Start Main</Text>
    </View>
  );
}
