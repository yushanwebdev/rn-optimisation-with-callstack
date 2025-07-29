import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Profiling() {
  const [count, setCount] = React.useState(0);
  const [second, setSecond] = React.useState(0);

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
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
          <Text style={styles.buttonText}>Press one</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => setSecond(second + 1)}>
          <Text style={styles.buttonText}>Press two</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
  },
  countersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  counterBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 120,
    alignItems: 'center',
  },
  counterLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  counterValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  buttonsContainer: {
    gap: 12,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
