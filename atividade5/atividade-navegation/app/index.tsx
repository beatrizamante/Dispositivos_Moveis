import { Link } from "expo-router";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

export default function index() {
  return (
    <View>
      <Text>This is an index</Text>


      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
