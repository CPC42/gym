import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
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
import { TouchableOpacity } from "react-native-gesture-handler";

import { CommonStyles, styles } from "../styles/CommonStyles";
import { useRoute } from "@react-navigation/native";

const Information = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const text_workout = route.params.paramKey;
  const image_link = route.params.imageKey;

  const informationText =
    "Please, workout with caution as performing the exercises in an incorrect way may cause injuries. \n\n Definition of the terms: \n\n - Hipertrophy stands for an increase and growth of muscle cells. It shall be chosen for people wanting to add more muscle. \n\n - Resistance stands for the type of workout where a lot of sets are done, with few repetitions in a way that increases endurance. \n\n - Strength training focuses on low repetitions with a lot of weight: It is recommended for those who want to get stronger while not building as much muscle. \n\n The numbers next to each exercise indicate how many repetitions of each individual exercise shall be done, followed by the number of series that should be performed. They are estimates and shall be followed up to each person's individual capacities. ";

  return (
    <View style={CommonStyles.centeredView}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Important Information ⚠️
        </Text>
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

      <View
        style={{
          justifyContent: "center",
          marginLeft: 30,
          marginRight: 30,
          alignItems: "center",
        }}
      >
        <Text>
          {"\n"}
          {"\n"}
          {informationText}
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          marginLeft: 30,
          marginRight: 30,
          alignItems: "center",
        }}
      >
        <Text>
          {"\n"}
          {"\n"}
          {text_workout}
        </Text>
      </View>

      <View style={CommonStyles.centerImage}>
        <Image
          source={{
            uri: image_link,
          }}
          style={CommonStyles.centerImage}
        />
      </View>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Information />
    </NativeBaseProvider>
  );
};
