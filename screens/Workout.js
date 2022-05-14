// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NativeBaseProvider } from "native-base";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { CommonStyles } from "../styles/CommonStyles";

function Workout() {
  const navigation = useNavigation();
  return (
    <View style={CommonStyles.container}>
      <View style={CommonStyles.text2}>
        <Text>Click here to go to sign up if you do not have an account.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={CommonStyles.signupText}> SIGN UP </Text>
        </TouchableOpacity>
      </View>

      <View style={CommonStyles.text2}>
        <Text>Click here to go to log in.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={CommonStyles.signupText}> LOGIN </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Workout />
    </NativeBaseProvider>
  );
};
