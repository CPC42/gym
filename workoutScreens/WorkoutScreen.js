import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import { Alert, Modal, Pressable, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CommonStyles, styles } from "../styles/CommonStyles";

import { useRoute } from "@react-navigation/native";

const WorkoutScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();

  const workoutTextHipertophy = route.params.workoutHipertophy;
  const workoutTextResistance = route.params.workoutResitance;
  const workoutTextStrength = route.params.workoutStrength;
  const text_workout = route.params.workoutFullText;
  const isThird = route.params.isThird; // indicates if we will use two or three Modals
  const title_text = route.params.titleText;
  const image_link = route.params.imageLink;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(isThird);
  const [modalVisible3, setModalVisible3] = useState(false);

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
        <TouchableOpacity onPress={() => navigation.navigate("Workout")}>
          <Image
            style={CommonStyles.tinyLogo}
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/01/03/11/24/gear-1119298_1280.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={CommonStyles.TitleCenter}>{title_text}</Text>
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
          onPress={() => setModalVisible2({ isThird })}
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
      <WorkoutScreen />
    </NativeBaseProvider>
  );
};
