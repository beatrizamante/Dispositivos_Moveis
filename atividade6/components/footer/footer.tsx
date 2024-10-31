import { View, StyleSheet, Text, Switch } from "react-native";
import React from "react";
import { router } from "expo-router";
import CheckoutButton from "../checkout/CheckoutButton";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Line from "./line";

export default function Footer() {
  const handleCheckout = () => {
    router.push("/checkout");
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerBottom}>
        <Ionicons style={styles.iconTicket} name={"ticket-outline"}></Ionicons>
        <Text style={styles.textTitle}>Cupom Shopee</Text>
        <Text style={styles.textGray}>Selecione ou insira o código</Text>
        <MaterialIcons name="keyboard-arrow-right" style={styles.arrow} />
      </View>
      <Line />
      <View style={styles.containerBottom}>
        <Feather name="circle" style={styles.iconShopee} />
        <Text style={styles.textTitle}>Saldo de moedas insuficiente</Text>
        <AntDesign name="questioncircleo" style={styles.iconQuestion} />
        <Switch style={styles.toggle} />
      </View>
      <Line />
      <View style={styles.containerBottom}>
        <MaterialCommunityIcons
          name="checkbox-blank-outline"
          style={styles.iconCheckbox}
        />
        <Text style={styles.textGray}>Tudo</Text>
        <Text style={styles.textTotal}>Sub-total:</Text>
        <Text style={styles.textMoney}>R$19,60</Text>
        <CheckoutButton
          onPress={handleCheckout}
          customTitle="Continuar (1)"
        ></CheckoutButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 12,
  },
  containerBottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 2,
  },
  textGray: {
    fontSize: 20,
    color: "gray",
  },
  textTitle: {
    fontSize: 22,
  },
  textTotal: {
    fontSize: 20,
  },
  textMoney: {
    fontSize: 28,
    fontWeight: "bold",

    color: "#EB4D2C",
  },
  iconTicket: {
    color: "#BE5F54",
    fontSize: 36,
  },
  arrow: {
    fontSize: 28,
    color: "gray",
  },
  iconCheckbox: {
    fontSize: 36,
    color: "gray",
  },
  iconQuestion: {
    color: "gray",
    fontSize: 26,
  },
  iconShopee: {
    color: "#F0C363",
    fontSize: 36,
  },
  toggle: {
    width: 22,
    height: 22,
  },
  buttonPosition: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
