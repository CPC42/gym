import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { UsersContextProvider } from "./contexts/UsersContext";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Workout from "./screens/Workout";

const Stack = createStackNavigator();

function App() {
  return (
    <UsersContextProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Workout" component={Workout} />
      </Stack.Navigator>
    </UsersContextProvider>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
