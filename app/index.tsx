import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("profiling")}>
        <Text>Profiling</Text>
      </TouchableOpacity>
    </View>
  );
}
