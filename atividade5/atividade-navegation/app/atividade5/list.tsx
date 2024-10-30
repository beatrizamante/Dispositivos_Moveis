import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import Car from "./cars/[id]";
import db from "@/services.fake.db";

export default function list() {
  const router = useRouter();

  const handleGotoList = () => {
    router.back();
  };

  const cars = db.all();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Link href={{ pathname: "/" }}>
          <Text style={{ color: "blue" }}>Go to Index</Text>
        </Link>

        <Button title="GotoList" onPress={handleGotoList} />

        {cars.map((car) => (
          <Link
            key={car.id}
            href={{ pathname: "./cars/[id]", params: { id: car.id } }}
            style={{ marginTop: 8 }}
          >
            <View>
              <Car />
            </View>
          </Link>
        ))}
      </ScrollView>
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
