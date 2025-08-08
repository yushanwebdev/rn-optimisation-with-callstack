import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 40 }}>Home</Text>
      
      <View style={{ gap: 20 }}>
        <Pressable 
          onPress={() => router.push("/profiling")}
          style={{ backgroundColor: '#007AFF', padding: 15, borderRadius: 8, minWidth: 200, alignItems: 'center' }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Profiling</Text>
        </Pressable>
        
        <Pressable 
          onPress={() => router.push("/memory-leaks")}
          style={{ backgroundColor: '#007AFF', padding: 15, borderRadius: 8, minWidth: 200, alignItems: 'center' }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Memory Leaks</Text>
        </Pressable>
      </View>
    </View>
  );
}
