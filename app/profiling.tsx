import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Profiling() {
  const [count, setCount] = React.useState(0);
  const [second, setSecond] = React.useState(0);

  const onPressHandler = () => {
    setCount(count + 1);
  };

  const onPressSecondHandler = () => {
    setSecond(second + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.countersContainer}>
        <View style={styles.counterBox}>
          <Text style={styles.counterLabel}>Count</Text>
          <Text style={styles.counterValue}>{count}</Text>
        </View>
        <View style={styles.counterBox}>
          <Text style={styles.counterLabel}>Second</Text>
          <Text style={styles.counterValue}>{second}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Press one" onPress={onPressHandler} />
        <Button title="Press two" onPress={onPressSecondHandler} />
      </View>
    </View>
  );
}

const Button = ({ title, onPress }: { title: string; onPress: () => void }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 40,
  },
  countersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  counterBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 120,
    alignItems: "center",
  },
  counterLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  counterValue: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#4a90e2",
  },
  buttonsContainer: {
    gap: 12,
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonPressed: {
    opacity: 0.5, // darker shade for pressed state
  },
  secondaryButton: {
    backgroundColor: "#6c757d",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
