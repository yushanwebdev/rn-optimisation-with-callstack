import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  // Navigation Header
  navigation.setOptions({
    headerTitle: "Home",
  });

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
