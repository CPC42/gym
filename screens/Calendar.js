import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  Pressable,
  Modal,
  TouchableHighlight,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";

import { CommonStyles } from "../styles/CommonStyles";
import { addDays, format } from "date-fns";
import ArmsDay from "../workoutScreens/ArmsDay";
import BackDay from "../workoutScreens/BackDay";
import LegDay from "../workoutScreens/LegDay";
import ChestDay from "../workoutScreens/ChestDay";
import PullDay from "../workoutScreens/PullDay";
import PushDay from "../workoutScreens/PushDay";
import ShouldersDay from "../workoutScreens/ShouldersDay";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const getWeekday = (time) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(time);
  return weekday[date.getDay()];
};

function Schedule() {
  const navigation = useNavigation();

  const typeWorkout = "hard";

  var today = new Date().toISOString().slice(0, 10);

  // values = { [date]: [{ name: "Arms day" }], [today]: [{ name: "Leg day" }] };

  let [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 155; i++) {
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
        //const current_day = strTime.slice(-2);
        //console.log(current_day);
        const current_Weekday = getWeekday(time);

        if (typeWorkout == "light") {
          if (current_Weekday == "Monday") {
            items[strTime] = [
              {
                name: "Push day",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Wednesday") {
            items[strTime] = [
              {
                name: "Pull day",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Friday") {
            items[strTime] = [
              {
                name: "Leg day",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
        }
        if (typeWorkout == "medium") {
          if (current_Weekday == "Monday") {
            items[strTime] = [
              {
                name: "Chest & Triceps",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Tuesday") {
            items[strTime] = [
              {
                name: "Back & Biceps day",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Thursday") {
            items[strTime] = [
              {
                name: "Leg day",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Saturday") {
            items[strTime] = [
              {
                name: "Shoulders",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
        }
        if (typeWorkout == "hard") {
          if (current_Weekday == "Monday") {
            items[strTime] = [
              {
                name: "Chest & Triceps",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Tuesday") {
            items[strTime] = [
              {
                name: "Back & Biceps",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Wednesday") {
            items[strTime] = [
              {
                name: "Leg day",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Thursday") {
            items[strTime] = [
              {
                name: "Arms & Abs",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Friday") {
            items[strTime] = [
              {
                name: "Shoulders",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
          if (current_Weekday == "Saturday") {
            items[strTime] = [
              {
                name: "Leg day - Cardio Day",
                height: Math.max(50, Math.floor(Math.random() * 150)),
              },
            ];
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  //const [isModalVisible, setIsModalVisible] = React.useState(true);
  //const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const renderItem = (item) => {
    const nextScreen = item.name.split(" ")[0] + "Day";

    return (
      <View style={CommonStyles.dateText}>
        <View style={{ marginTop: 22 }}>
          <View>
            <Card onPress={() => navigation.push(nextScreen)}>
              <Card.Content>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text>{item.name}</Text>
                  <Avatar.Text label="W" />
                </View>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
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

      <View style={CommonStyles.text2}>
        <Text>Click here to go to your workout.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={CommonStyles.signupText}> Homepage </Text>
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
          selected={today}
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
