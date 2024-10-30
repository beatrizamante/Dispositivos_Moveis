import { View, Text } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import db from "@/services.fake.db";

export default function ar() {
  const params = useGlobalSearchParams();

  const id = parseInt(params.id as string);

  const car = db.find(id);

  return (
    <View>
      <Text>{car.id}</Text>
      <Text>{car.brand}</Text>
      <Text>{car.model}</Text>
      <Text>{car.year}</Text>
    </View>
  );
}
