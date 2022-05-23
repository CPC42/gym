// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NativeBaseProvider } from "native-base";
import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import { position } from "styled-system";
import { margin } from "styled-system";
import { UsersContext } from "../contexts/UsersContext";
import { CommonStyles } from "../styles/CommonStyles";

function Workout() {
  const [intensityOp, setIntensityOp] = useState(0);
  const [typeOp, setTypeOp] = useState(0);
  const navigation = useNavigation();
  const usersContext = useContext(UsersContext);
  return (
    <View style={CommonStyles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 5,
          top: 20,
        }}
      >
        <Text>Please, select the type of workout you want!</Text>
      </View>
      <View
        style={[
          CommonStyles.buttonStyle3,
          { opacity: intensityOp === 1 ? 1 : 0.7 },
        ]}
      >
        <Button
          title="Low Intensity"
          onPress={() => {
            setIntensityOp(1);
          }}
          style={CommonStyles.button}
        />
      </View>

      <View
        style={[
          CommonStyles.buttonStyle3,
          { opacity: intensityOp === 2 ? 1 : 0.7 },
        ]}
      >
        <Button
          title="Medium Intensity"
          onPress={() => {
            setIntensityOp(2);
          }}
          style={CommonStyles.button}
        />
      </View>

      <View
        style={[
          CommonStyles.buttonStyle3,
          { opacity: intensityOp === 3 ? 1 : 0.7 },
        ]}
      >
        <Button
          title="High Intensity"
          onPress={() => {
            setIntensityOp(3);
          }}
          style={CommonStyles.button}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <View
          style={[
            { display: intensityOp === 0 ? "none" : "flex" },
            { opacity: typeOp === 1 ? 1 : 0.7 },

            CommonStyles.buttonStyle2,
          ]}
        >
          <Button
            onPress={() => {
              setTypeOp(1);
            }}
            title="Lose Weight"
            style={CommonStyles.button2}
          />
        </View>

        <View
          style={[
            { display: intensityOp === 0 ? "none" : "flex" },
            { opacity: typeOp === 2 ? 1 : 0.7 },
            CommonStyles.buttonStyle2,
          ]}
        >
          <Button
            onPress={() => {
              setTypeOp(2);
            }}
            title="Gain muscle & Strength"
            style={CommonStyles.button2}
          />
        </View>
      </View>

      <View
        style={[
          { display: typeOp === 0 && intensityOp == 0 ? "none" : "flex" },
          { marginTop: 60 },
          { backgroundColor: "#CBF10D" },
        ]}
      >
        <Button
          title="Save"
          onPress={() => {
            usersContext.editUser(typeOp, intensityOp);
            navigation.push("Calendar");
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Workout />
    </NativeBaseProvider>
  );
};
