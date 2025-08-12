import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 40 }}>Home</Text>

      <View style={{ gap: 20 }}>
        <Pressable
          onPress={() => router.push("/profiling")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Profiling</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/memory-leaks")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Memory Leaks</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/higher-order-components")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Higher Order Components
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/atomic-state-management")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Atomic State Management
          </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            router.push("/concurrent-react/slow-components-management")
          }
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Slow Components Management
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/concurrent-react/stale-value")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Stale Value</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/concurrent-react/transitions")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Transitions</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    minWidth: 200,
    alignItems: "center",
  },
});
