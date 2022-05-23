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
    "-Barbell Bicep Curl \n-Dumbell Curl \n-Skull Crusher (7x4) \nCable Triceps Pulldown (6x3) \n-Plate Holding (focusing on forearms, 2x1 min) \nSit ups (30x3) \nLateral Abdominals (60x3)";
  const workoutTextStrength =
    "-Barbell Bicep Curl (6x4) \n-Chin ups (8x4) \n-Cable Bicep Curl (8x3) \nSkull Crusher (5x3) \n-Overhead Triceps Extension (7x3) \n-Plate Holding (focusing on forearms, 2x1:30 min) \nLeg raises (12x3) \nSit ups (25x3)";

  const text_workout =
    "For Arms Day, take into account the following information: We will focus on the Biceps first, then on the Triceps and later on, the Forearms will be trained. Afterwards, come some abdominal exercises shall\nThe muscles groups used are ";

  const image_link =
    "https://legionathletics.com/wp-content/uploads/2019/06/upper-body-workout-biceps-anatomy.jpg";

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
        Workout for ARMS and ABS! Choose the option you want:
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
