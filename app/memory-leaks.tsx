import { Button, Text, View } from "react-native";

export default function MemoryLeaks() {
  // Global variable to store closures
  let leakyClosures: Function[] = [];
  // Additional storage for testing deallocation
  let additionalAllocations: any[] = [];

  // Generate some dummy data
  const generateLargeData = () => {
    return new Array(1000).fill(null).map(() => ({
      id: Math.random().toString(),
      data: new Array(500).fill("??").join(""),
      timestamp: new Date().toISOString(),
      nested: {
        moreData: new Array(100).fill({
          value: Math.random(),
          text: "nested data that consumes memory",
        }),
      },
    }));
  };

  const createClosure = () => {
    const newDataLeak = generateLargeData(); // Creates large data array
    return () => {
      newDataLeak;
    };
  };

  // Create many closures that each capture their own large data
  const createManyLeaks = () => {
    for (let i = 0; i < 10; i++) {
      const leakyClosure = createClosure();
      // leakyClosure();
      leakyClosures.push(leakyClosure); // Store reference to prevent GC
      // Trigger all closures to keep data "active"
      leakyClosures.forEach((closure) => closure());
    }
  };

  // Cleanup function to deallocate memory
  const clearMemoryLeaks = () => {
    // Clear all references to allow garbage collection
    leakyClosures.length = 0;
    // You can also set it to a new empty array
    // leakyClosures = [];
  };

  // Allocate additional memory to test if existing objects deallocate
  const allocateMoreMemory = () => {
    // Create large objects to consume memory
    for (let i = 0; i < 5; i++) {
      const bigArray = new Array(1000000).fill(Math.random());
      const bigObject = {
        id: `allocation-${Date.now()}-${i}`,
        data: bigArray,
        metadata: {
          created: new Date().toISOString(),
          size: bigArray.length,
          description: "Large allocation to test memory pressure",
        },
      };
      additionalAllocations.push(bigObject);
    }
    console.log(`Total allocations: ${additionalAllocations.length}`);
  };

  // Create temporary unreferenced objects to test GC
  const createUnreferencedObjects = () => {
    console.log("Creating unreferenced objects...");
    // These objects become eligible for GC immediately after function returns
    for (let i = 0; i < 10; i++) {
      const tempData = new Array(500000).fill(`temp-${i}-${Math.random()}`);
      const tempObject = {
        id: i,
        data: tempData,
        timestamp: Date.now(),
      };
      // Not storing references - these can be garbage collected
    }
    console.log("Unreferenced objects created - eligible for GC");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Memory Leaks Test</Text>
      <Button
        title="Create Unreferenced Objects"
        onPress={createUnreferencedObjects}
      />
      <Button title="Create Memory Leaks" onPress={createManyLeaks} />
      <Button title="Allocate More Memory" onPress={allocateMoreMemory} />
      <Button title="Clear Memory Leaks" onPress={clearMemoryLeaks} />
      <Text style={{ marginTop: 20 }}>
        Closures created: {leakyClosures.length}
      </Text>
      <Text style={{ marginTop: 10 }}>
        Additional allocations: {additionalAllocations.length}
      </Text>
    </View>
  );
}
