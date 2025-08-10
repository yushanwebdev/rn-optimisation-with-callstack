import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

interface SlowComponentProps {
  count: number;
}

export default function SlowComponent({ count }: SlowComponentProps) {
  const items = [];
  
  for (let i = 0; i < 10000; i++) {
    items.push(
      <Text key={i} style={styles.item}>
        Item {i} - Count: {count}
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Slow Component (10,000 items)</Text>
      <ScrollView style={styles.scrollView}>
        {items}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollView: {
    maxHeight: 300,
  },
  item: {
    fontSize: 12,
    paddingVertical: 2,
  },
});