import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { DEFAULT_RADIUS } from "@/constants/globalStyles";

type CheckoutButtonProps = {
  onPress: () => void;
  customTitle?: string;
};

export default function CheckoutButton({
  onPress,
  customTitle = "Checkout!",
}: CheckoutButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{customTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EB4D2C",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 58,
    minWidth: 120
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
