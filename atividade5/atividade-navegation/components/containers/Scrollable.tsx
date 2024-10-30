import { Text, StyleSheet } from "react-native";
import React, { Children, ReactNode } from "react";
import {
  ScrollView,
  View,
} from "react-native-reanimated/lib/typescript/Animated";

type ScrollableProps = {
  children: ReactNode;
};

export default function Scrollable({ children }: ScrollableProps) {
  return (
    <View>
      <ScrollView>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
