import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// This component contains patterns that typically trigger react-compiler eslint errors
export default function ReactCompilerTest() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const inputRef = useRef<TextInput>(null);

  // Pattern 1: Mutating props or state directly (should trigger react-compiler error)
  const handleMutateState = () => {
    // @ts-ignore - intentionally breaking rules for testing
    count++; // This should trigger react-compiler/react-compiler error
    setCount(count);
  };

  // Pattern 2: Mutating arrays/objects in state (should trigger react-compiler error)
  const handleMutateArray = () => {
    items.push(`Item ${items.length + 1}`); // This should trigger react-compiler/react-compiler error
    setItems(items);
  };

  // Pattern 3: Side effects in render (should trigger react-compiler error)
  const sideEffectInRender = () => {
    console.log("Side effect in render"); // This should trigger react-compiler/react-compiler error
    return `Current count: ${count}`;
  };

  // Pattern 4: Accessing DOM/refs during render (should trigger react-compiler error)
  const getDOMValue = () => {
    if (inputRef.current) {
      return inputRef.current.props.value; // This should trigger react-compiler/react-compiler error
    }
    return "";
  };

  // Pattern 5: Conditional hooks (should trigger react-compiler error)
  const handleConditionalHook = () => {
    if (count > 5) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useState("conditional"); // This should trigger react-compiler/react-compiler error
    }
  };

  // Pattern 6: Effects with missing dependencies (should trigger react-compiler error)
  useEffect(() => {
    console.log(`Count is ${count}, name is ${name}`);
    // Missing count and name in dependencies array - should trigger react-compiler error
  }, []); // Empty dependency array but using count and name

  // Pattern 7: Creating objects/functions in render without memoization
  const handleCreateObjectInRender = () => {
    const config = { theme: "dark", count }; // New object every render - should trigger react-compiler error
    return config;
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>� Back</Text>
      </Pressable>

      <Text style={styles.title}>React Compiler Test</Text>
      <Text style={styles.subtitle}>
        This screen contains code patterns that should trigger react-compiler
        eslint errors
      </Text>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Count: {count}</Text>
        <Text>{sideEffectInRender()}</Text>
        <Text>DOM Value: {getDOMValue()}</Text>
        <Text>Config: {JSON.stringify(handleCreateObjectInRender())}</Text>

        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <View style={styles.buttonContainer}>
          <Pressable onPress={() => setCount(count + 1)} style={styles.button}>
            <Text style={styles.buttonText}>Increment (Correct)</Text>
          </Pressable>

          <Pressable
            onPress={handleMutateState}
            style={[styles.button, styles.errorButton]}
          >
            <Text style={styles.buttonText}>Mutate State (Error)</Text>
          </Pressable>

          <Pressable
            onPress={handleMutateArray}
            style={[styles.button, styles.errorButton]}
          >
            <Text style={styles.buttonText}>Mutate Array (Error)</Text>
          </Pressable>

          <Pressable
            onPress={handleConditionalHook}
            style={[styles.button, styles.errorButton]}
          >
            <Text style={styles.buttonText}>Conditional Hook (Error)</Text>
          </Pressable>
        </View>

        <View style={styles.itemsList}>
          <Text style={styles.sectionTitle}>Items ({items.length}):</Text>
          {items.map((item, index) => (
            <Text key={index} style={styles.item}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  backButton: {
    alignSelf: "flex-start",
    padding: 10,
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: "#007AFF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "white",
  },
  buttonContainer: {
    gap: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  errorButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  itemsList: {
    flex: 1,
  },
  item: {
    padding: 8,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 4,
  },
});
