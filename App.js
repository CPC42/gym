import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { UsersContextProvider } from "./contexts/UsersContext";
import Calendar from "./screens/Calendar";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Workout from "./screens/Workout";
import ArmsDay from "./workoutScreens/ArmsDay";
import BackDay from "./workoutScreens/BackDay";
import ChestDay from "./workoutScreens/ChestDay";
import LegDay from "./workoutScreens/LegDay";
import PullDay from "./workoutScreens/PullDay";
import PushDay from "./workoutScreens/PushDay";
import ShoulderDay from "./workoutScreens/ShoulderDay";
import UpperBody from "./workoutScreens/UpperBody";
import Information from "./workoutScreens/Information";

const Stack = createStackNavigator();

function App() {
  return (
    <UsersContextProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="BackDay" component={BackDay} />
        <Stack.Screen name="LegDay" component={LegDay} />
        <Stack.Screen name="ChestDay" component={ChestDay} />
        <Stack.Screen name="PullDay" component={PullDay} />
        <Stack.Screen name="PushDay" component={PushDay} />
        <Stack.Screen name="ShoulderDay" component={ShoulderDay} />
        <Stack.Screen name="UpperBody" component={UpperBody} />
        <Stack.Screen name="ArmsDay" component={ArmsDay} />
        <Stack.Screen name="Information" component={Information} />
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
