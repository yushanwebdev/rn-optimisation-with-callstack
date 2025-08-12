import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CounterNumberProps {
  count: number;
}

export default function CounterNumber({ count }: CounterNumberProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Current Count:</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  count: {
    fontSize: 48,
    fontWeight: "bold",
  },
});