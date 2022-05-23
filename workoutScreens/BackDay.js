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
    "-Pull ups (10x4) \n-Row PullDowns (10x4) \n-Lateral Pulldowns (8x3) \n-Row (7x3) \n-Bicep Curls (10x3) \n-Hammer Curls (7x3) \n-Bar Curls (8x4)";
  const workoutTextStrength =
    "-Pull ups (7x4) \n-Lateral PullDowns (8x4) \n-Lateral Pulldowns close grip (7x3) \n-Dumbell Rows (7x3) \n-Bicep Curls (8x3) \n-Hammer Curls (5x3) \n-Bar Curls (8x4)";

  const text_workout =
    "For Back & Biceps Day, take into account the following information: We are starting with the Back and following with Biceps. \nThe muscles groups used are ";

  const image_link =
    "https://images.askmen.com/fitness/workout/back_exercises_6172021_1623946096.jpg";

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  return (
    <View style={CommonStyles.centeredView}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 5,
          top: 20,
        }}
      >
        <Text>Click here to go to your calendar.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Text style={CommonStyles.signupText}> Calendar </Text>
        </TouchableOpacity>
      </View>
      <Text style={CommonStyles.TitleCenter}>
        Workout for Back! Choose the option you want:
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
