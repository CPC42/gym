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

// <Button title="Go back" onPress={() => navigation.goBack()} />

const LegDay = () => {
  const navigation = useNavigation();

  const workoutTextHipertophy =
    "-Squats (10x4) \n-Leg Extensions (8x3)\n-Bulgarian Squats (12x4) \n-Booty Builder Machine (10x4) \n-Calves Raises (8x3)";
  const workoutTextResistance =
    "-Squats (15x3) \n-Leg Extensions (12x3) Alternate with both legs individually\n-Bulgarian Squats (15x4) \n-Calves (25x3) \n-35 Min Incline Walk";
  const workoutTextStrength =
    "-Squats (5x4) \n-Leg Extensions (5x4) \n-Bulgarian Squats (4x4) \n-Booty Builder Machine (10x4) \n-Weighted Calves Raises (8x4)\n-20 Min Incline mild Run";

  const text_workout =
    "For Leg Day, take into account the following information: We are working the whole leg here. After the exercises, an incline walk is the best way to really work the legs well. \nThe muscles groups used are ";

  const image_link =
    "https://bodiphatlife.files.wordpress.com/2019/06/leg-muscles-e1560333208609.png";

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

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
        Workout for Legs! Choose the option you want:
      </Text>
      <View style={styles.modalContent}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={styles.modalContent}
          swipeDirection="left"
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
                <Text style={styles.textStyle}>Hide</Text>
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
          style={styles.modalContent}
          visible={modalVisible2}
          swipeDirection="left"
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{workoutTextResistance}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle}>Hide</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible2(true)}
        >
          <Text style={styles.textStyle}>Resistance</Text>
        </Pressable>
      </View>
      <View style={styles.modalContent3}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          style={styles.modalContent}
          swipeDirection="left"
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{workoutTextStrength}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible3(!modalVisible3)}
              >
                <Text style={styles.textStyle}>Hide</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible3(true)}
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
      <LegDay />
    </NativeBaseProvider>
  );
};
