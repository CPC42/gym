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
  const navigation = useNavigation();

  let typeWorkout = "hard";

  let dateValue = [{ name: "Chest day" }];
  let date = "2022-05-18";

  let [items, setItems] = useState({
    "2022-05-17": dateValue,
    date: dateValue,
  });

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [
            {
              name: "Rest day",
              height: Math.max(50, Math.floor(Math.random() * 150)),
            },
          ];
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={CommonStyles.dateText}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>
              <Avatar.Text label="Workouy" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

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

      <View style={CommonStyles.calendar}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected="2022-05-17"
          renderItem={renderItem}
          renderEmptyDate={renderEmptyDate}
          rowHasChanged={rowHasChanged}
          showClosingKnob
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Schedule />
    </NativeBaseProvider>
  );
};
