import { useDeferredValue } from "react";

import { Suspense, useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function StaleValue() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    <View>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search items..."
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          borderRadius: 5,
        }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <View style={[isStale && { opacity: 0.8 }]}>
          <SearchResults query={deferredQuery} />
        </View>
      </Suspense>
    </View>
  );
}

function SearchResults({ query }: { query: string }) {
  // Simulate expensive search operation
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Artificial delay to simulate complex filtering/searching
  }
  
  // Generate mock search results based on query
  const results = query
    ? Array.from({ length: 50 }, (_, i) => `${query} - Result ${i + 1}`)
    : [];
  
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>
        Results for: {query || "No query"}
      </Text>
      {results.map((result, index) => (
        <Text key={index} style={{ paddingVertical: 5 }}>
          {result}
        </Text>
      ))}
      {results.length === 0 && query && (
        <Text style={{ fontStyle: 'italic', color: 'gray' }}>
          No results found
        </Text>
      )}
    </View>
  );
}

function LoadingSpinner() {
  return <View>Loading...</View>;
}
