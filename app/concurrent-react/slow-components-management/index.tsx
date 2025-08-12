import { useDeferredValue, useState } from "react";
import { ActivityIndicator, Button } from "react-native";
import CounterNumber from "../CounterNumber";
import SlowComponent from "../SlowComponent";

export default function SlowComponentsManagement() {
  const [count, setCount] = useState(0);
  const deferredCount = useDeferredValue(count);
  return (
    <>
      <CounterNumber count={count} />
      <SlowComponent count={deferredCount} />
      {count !== deferredCount ? <ActivityIndicator /> : null}
      <Button onPress={() => setCount(count + 1)} title="Increment" />
    </>
  );
}
