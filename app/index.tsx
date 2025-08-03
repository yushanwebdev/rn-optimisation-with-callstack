import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable onPress={() => navigation.navigate("profiling")}>
        <Text>Profiling</Text>
      </Pressable>
    </View>
  );
}
