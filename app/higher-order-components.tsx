import { FlatList, ScrollView, Text, View } from "react-native";

const NUMBER_OF_ITEMS = 5000;

export default function HigherOrderComponents() {
  const items = Array.from(
    { length: NUMBER_OF_ITEMS },
    (_, index) => `Item ${index + 1}`
  );

  return <FlatListWithItems />;
}

function ScrollViewWithItems() {
  const items = Array.from(
    { length: NUMBER_OF_ITEMS },
    (_, index) => `Item ${index + 1}`
  );

  return (
    <ScrollView>
      {items.map((item, index) => (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function FlatListWithItems() {
  const items = Array.from(
    { length: NUMBER_OF_ITEMS },
    (_, index) => `Item ${index + 1}`
  );

  return (
    <FlatList data={items} renderItem={({ item }) => <Text>{item}</Text>} />
  );
}
