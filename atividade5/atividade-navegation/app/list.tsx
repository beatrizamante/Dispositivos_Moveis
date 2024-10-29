import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { cars } from "@/mocks/cars";
import Car from "./cars/[id]";

export default function list() {
  return (
    <View style={styles.container}>
      <Link href={{ pathname: "/" }}>
        <Text style={{ color: "blue" }}>Go to Index</Text>
      </Link>

      {cars.map((car) => (
        <Link
          key={car.id}
          href={{ pathname: "./cars/[id]", params: { id: car.id } }}
          style={{ marginTop: 8 }}
        >
          <View>
            <ScrollView>
              <Car />
            </ScrollView>
          </View>
        </Link>
      ))}
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
