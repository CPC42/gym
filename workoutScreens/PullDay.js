import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { Alert, Modal, Pressable, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CommonStyles, styles } from "../styles/CommonStyles";

const PullDay = () => {
  const navigation = useNavigation();

  const workoutTextHipertophy =
    "-Pull Ups (8x4) \n-Cable Underhand Pulldown (5-10x4) \n-Barbell Deadlift (7x4) \nNarrow grip Barbell (8x4) \n-Calves";
  const workoutTextResistance =
    "-Pull Ups (5x6) \n-Barbell Shrugs (15x4) \n-Barbel Curl (13x3) \nBar Bicep Curl (15x4) \n-Barbell Deadlift (15x3)";
  const workoutTextStrength =
    "-Weighted Pull ups (8x3) \n-Cable Underhand Pulldown (4x4) \n-Barbell Deadlift (2x4) \nBarbell Deadlift (5x3)";

  const text_workout =
    "For Pull Day, take into account the following information: \nWe are working mostly with the upper part of our body in various ways. The goal is to do pulling exercises to improve overall strenght and posture.\n\nThe muscles groups used are ";

  const image_link =
    "https://fitbod.me/wp-content/uploads/2021/12/What-Are-Pull-Muscle-Groups.jpg";

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
        Pull Day! Choose the option you want:
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
      <PullDay />
    </NativeBaseProvider>
  );
};
