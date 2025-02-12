import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "./app/type"; 

const LandingPage = () => {
  const navigation = useNavigation<NavigationProps>(); 

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("lab4")}>
        <Text style={styles.buttonText}>Go to Lab 4</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  button: { backgroundColor: "#007AFF", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10 },
  buttonText: { color: "#f5f5f5", fontSize: 16, fontWeight: "bold" },
});

export default LandingPage;
