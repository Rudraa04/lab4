import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./LandingPage"; // Ensure this is imported
import Lab4 from "./app/lab4"; // Ensure this is imported
import { RootStackParamList } from "./app/type"; // Import types

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LandingPage} /> 
        <Stack.Screen name="lab4" component={Lab4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

