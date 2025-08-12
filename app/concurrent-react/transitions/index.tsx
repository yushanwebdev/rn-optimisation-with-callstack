import { useState, useTransition } from "react";
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import CounterNumber from "../CounterNumber";
import SlowComponent from "../SlowComponent";

export default function TransitionScreen() {
  const [count, setCount] = useState(0);
  const [slowCount, setSlowCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    startTransition(() => {
      setSlowCount((prevSlowCount) => prevSlowCount + 1);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <CounterNumber count={count} />
      <SlowComponent count={slowCount} />
      {isPending ? <LoadingSpinner /> : null}
      <Button onPress={handleIncrement} title="Increment" />
    </SafeAreaView>
  );
}

function LoadingSpinner() {
  return <ActivityIndicator size="large" color="#0000ff" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
