import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Input, NativeBaseProvider, Button, Icon, Alert } from "native-base";
import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { textShadow } from "styled-system";
import { UsersContext } from "../contexts/UsersContext";
import { CommonStyles } from "../styles/CommonStyles";

function Signup() {
  const navigation = useNavigation();
  const usersContext = useContext(UsersContext);
  const [spText, setSpText] = useState("");
  const [userData, setUserData] = useState({
    user: "",
    email: "",
    password: "",
    secondPassword: "",
    workType: "",
    workIntesity: "",
  });
  const [verify, setVerify] = useState({
    user: false,
    email: false,
    password: false,
    secondPassword: false,
  });

  const checkUser = (text) => {
    if (text.match(/(?=.{4,})/)) {
      setVerify({ ...verify, user: true });
    } else {
      setVerify({ ...verify, user: false });
    }
  };
  const checkEmail = (text) => {
    if (
      text
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setVerify({ ...verify, email: true });
    } else {
      setVerify({ ...verify, email: false });
    }
  };
  const checkPass = (text) => {
    if (text.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)) {
      setVerify({ ...verify, password: true, secondPassword: false });
    } else {
      setVerify({ ...verify, password: false, secondPassword: false });
    }
    setSpText("");
  };

  const checkSamePassword = (pass) => {
    if (
      userData.password == pass &&
      pass.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)
    ) {
      setVerify({ ...verify, secondPassword: true });
    } else {
      setVerify({ ...verify, secondPassword: false });
    }
  };
  return (
    <View style={CommonStyles.container}>
      <View style={CommonStyles.text2}>
        <Text>Click here to go to the home page.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={CommonStyles.signupText}> Homepage </Text>
        </TouchableOpacity>
      </View>

      <View style={CommonStyles.Middle}>
        <Text style={CommonStyles.LoginText}>Signup</Text>
      </View>
      <View style={CommonStyles.text2}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={CommonStyles.signupText}> Login </Text>
        </TouchableOpacity>
      </View>

      {/* Username or Email Input Field */}
      <View style={CommonStyles.buttonStyle}>
        <View style={CommonStyles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Username"
            onChangeText={(text) => {
              setUserData({ ...userData, user: text });
              checkUser(text);
            }}
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        <Text style={{ color: verify.user ? "green" : "red" }}>
          {verify.user
            ? "* Correct Username"
            : "* Please introduce at least 4 character for your username"}
        </Text>
      </View>

      {/* Username or Email Input Field */}
      <View style={CommonStyles.buttonStyleX}>
        <View style={CommonStyles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Email"
            onChangeText={(text) => {
              setUserData({ ...userData, email: text });
              checkEmail(text);
            }}
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        <Text style={{ color: verify.email ? "green" : "red" }}>
          {verify.email ? "* Correct Email" : "* Incorrect email format"}
        </Text>
      </View>

      {/* Password Input Field */}
      <View style={CommonStyles.buttonStyleX}>
        <View style={CommonStyles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => {
              setUserData({ ...userData, password: text });
              checkPass(text);
            }}
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        <Text style={{ color: verify.password ? "green" : "red" }}>
          {verify.password
            ? "* Correct password"
            : "* Introduce Password of length 8 with lower and upper case and numbers"}
        </Text>
      </View>

      {/* Password Input Field */}
      <View style={CommonStyles.buttonStyleX}>
        <View style={CommonStyles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            value={spText}
            variant="outline"
            secureTextEntry
            placeholder="Confirm Password"
            onChangeText={(text) => {
              setUserData({ ...userData, secondPassword: text });
              checkSamePassword(text);
              setSpText(text);
            }}
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        <Text style={{ color: verify.secondPassword ? "green" : "red" }}>
          {verify.secondPassword
            ? "* Matching passwords"
            : verify.password
            ? "Not matching passwords"
            : "Introduce first a correct password"}
        </Text>
      </View>

      <View style={CommonStyles.buttonStyle}>
        <Button
          onPress={() => {
            console.log("aaaaaaa");
            usersContext.addUser(
              userData.user,
              userData.email,
              userData.password,
              userData.workType,
              userData.workIntesity
            );
            console.log("bbbbbbbb");
            navigation.navigate("Workout");
          }}
          style={[
            CommonStyles.buttonDesign,
            {
              opacity:
                verify.user &&
                verify.email &&
                verify.password &&
                verify.secondPassword
                  ? 1
                  : 0.5,
            },
          ]}
          disabled={
            verify.user &&
            verify.email &&
            verify.password &&
            verify.secondPassword
              ? false
              : true
          }
        >
          <Text>Sign up!</Text>
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Signup />
    </NativeBaseProvider>
  );
};
