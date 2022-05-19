import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import { CommonStyles, styles } from "../styles/CommonStyles";
import { NativeBaseProvider } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const navigation = useNavigation();

  const informationText =
    "Please, workout with caution as performing the exercises in an incorrect way may cause injuries. \n\n Definition of the terms: \n Hipertrophy stands for an increase and growth of muscle cells. It shall be chosen for people wanting to add more muscle. \n Resistance stands for the type of workout where a lot of sets are done, with few repetitions in a way that increases endurance. \n Strenght training focuses on low repetitions with a lot of weight: It is recommended for those who want to get stronger while not building as much muscle. ";

  return (
    <View style={CommonStyles.centeredView}>
      <View>
        <Text style={CommonStyles.TitleCenter}>Important Information ⚠️</Text>
      </View>
      <View style={CommonStyles.tinyLogo}>
        <TouchableOpacity onPress={() => navigation.navigate("Workout")}>
          <Image
            style={CommonStyles.tinyLogo}
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/01/03/11/24/gear-1119298_1280.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={CommonStyles.text2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={CommonStyles.signupText}>
            Click here to go back to your workout.
          </Text>
        </TouchableOpacity>
      </View>

      <View style={CommonStyles.text2}>{informationText}</View>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
};
