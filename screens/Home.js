<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { CommonStyles } from "../styles/CommonStyles";
import { UsersContext } from "../contexts/UsersContext";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

function Schedule() {
  const usersContext = useContext(UsersContext);
=======
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
>>>>>>> 9841133f5b4f23ae6b7b12cc2b88028c0a4a3572
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={CommonStyles.centeredView}>
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
            <Text style={styles.modalText}>Hello World!</Text>
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
        <Text style={styles.textStyle}>Back & Biceps</Text>
      </Pressable>
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
            <Text style={styles.modalText}>Hello World!</Text>
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
        <Text style={styles.textStyle}>Chest & Triceps</Text>
      </Pressable>
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
