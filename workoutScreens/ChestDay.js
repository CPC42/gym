import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Button,
} from "react-native";
import { CommonStyles, styles } from "../styles/CommonStyles";
import { NativeBaseProvider } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const App = () => {
  const navigation = useNavigation();

  const workoutTextHipertophy =
    "-Bench Press (10x4) \n-Incline Bench with dumbell (12x4) \n-Cable flies, Top and Bottom Positions, (8x4) \n - Standing Tricep Extension (12x4) \n-Tricep Pulldown (8x3)";
  const workoutTextStrength =
    "-Bench Press (5x5) \n-Incline Barbell Bench (6x4) \n-Cable flies, Top, Bottom and Mid Positions, (6x3) \n - Standing Tricep Extension (6x4) \n-Tricep Pulldown (5x3)";

  const text_workout =
    "For Chest and Triceps Day, take into account the following information: We want to work the chest first, with a lot of weight in the bench exercises and focusing more on form and reps on the cable exercises. \nThe muscles groups used are ";

  const image_link =
    "https://i.pinimg.com/736x/20/08/e3/2008e3218d914487fd636c273a0b4f3b--chest-muscles-shoulder-exercises.jpg";

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  return (
    <View style={CommonStyles.centeredView}>
      <View style={CommonStyles.tinyLogo_left}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={CommonStyles.tinyLogo_left}
            source={{
              uri: "https://previews.123rf.com/images/get4net/get4net1712/get4net171200454/91295909-%EA%B2%A9%EB%A6%AC-%EB%90%9C-%EB%B0%B0%EA%B2%BD%EC%97%90-%EB%8B%A4%EC%8B%9C-%EB%B2%84%ED%8A%BC-%EC%95%84%EC%9D%B4%EC%BD%98.jpg",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={CommonStyles.text2}>
        <Text>Click here to go to your calendar.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Text style={CommonStyles.signupText}> Calendar </Text>
        </TouchableOpacity>
      </View>
      <Text style={CommonStyles.TitleCenter}>
        Workout for Chest! Choose the option you want:
      </Text>
      <View style={styles.modalContent}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{workoutTextHipertophy}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Hipertrophy</Text>
        </Pressable>
      </View>
      <View style={styles.modalContent2}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{workoutTextStrength}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible2(true)}
        >
          <Text style={styles.textStyle}>Strength</Text>
        </Pressable>
      </View>
      <View style={CommonStyles.bottomLogo}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Information", {
              paramKey: text_workout,
              imageKey: image_link,
            })
          }
        >
          <Image
            style={CommonStyles.bottomLogo}
            source={{
              uri: "https://seeklogo.com/images/I/information-desk-symbol-logo-871156055D-seeklogo.com.png",
            }}
          />
        </TouchableOpacity>
      </View>
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
