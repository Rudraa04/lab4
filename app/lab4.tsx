import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import vacationDestinations from "../constants/vacationsDestinations"; 

const Lab4 = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedDestinations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selectedDestinations.includes(item.id) && styles.selectedCard]}
            onPress={() => toggleSelection(item.id)}
          >
            <Text style={styles.destinationText}>
              {item.location} - ${item.price} - {item.average_yearly_temperature} 
              {selectedDestinations.includes(item.id) && <Text> {"\u2705"}</Text>}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  card: { padding: 15, backgroundColor: "white", borderRadius: 10, marginBottom: 10, elevation: 3 },
  selectedCard: { backgroundColor: "#d4edda" }, // Light green when selected
  destinationText: { fontSize: 16 },
});

export default Lab4;
