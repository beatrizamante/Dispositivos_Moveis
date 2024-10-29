import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import React from "react";

export default function index() {
  const router = useRouter();

  const handleGotoList = () => {
    router.back();
  };

  return (
    <View>
      <Text>This is an index</Text>

      <Link href={{ pathname: "./list" }}>
        <Text style={{ color: "blue" }}>Go to List</Text>
      </Link>

      <Button title="GotoList" onPress={handleGotoList} />

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
