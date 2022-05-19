// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NativeBaseProvider } from "native-base";
import React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";

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

      <View style={CommonStyles.text2}>
        <Text>Click here to go to your calendar.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Text style={CommonStyles.signupText}> Calendar </Text>
        </TouchableOpacity>
      </View>

      <View style={CommonStyles.tinyLogo}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={CommonStyles.tinyLogo}
            source={{
              uri: "http://cdn.onlinewebfonts.com/svg/img_159611.png",
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={CommonStyles.buttonStyle}>
        <Button title="Low Intensity" style={CommonStyles.button} />
      </View>

      <View style={CommonStyles.buttonStyle}>
        <Button title="Medium Intensity" style={CommonStyles.button} />
      </View>

      <View style={CommonStyles.buttonStyle}>
        <Button title="High Intensity" style={CommonStyles.button} />
      </View>

      <View style={CommonStyles.buttonStyle2}>
        <Button title="Lose Weight" style={CommonStyles.button2} />
      </View>

      <View style={CommonStyles.buttonStyle2}>
        <Button title="Gain muscle & Strength" style={CommonStyles.button2} />
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
