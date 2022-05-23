import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UsersContext } from "../contexts/UsersContext";
import { StatusBar } from "expo-status-bar";
import { Input, NativeBaseProvider, Button, Icon } from "native-base";
import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CommonStyles } from "../styles/CommonStyles";

function Login() {
  const navigation = useNavigation();
  const [logUser, setLogUser] = useState({
    current: -1,
    emailMsg: "* Incorrect email format",
    verEmail: false,
    passwordMsg: "* Please introduce first an existing email",
    verPassword: false,
  });

  const [passwordTxt, setPasswordxt] = useState("");
  const usersContext = useContext(UsersContext);
  const checkEmail = (email) => {
    var index = usersContext.users.findIndex(
      (object) => object.email === email
    );
    setPasswordxt("");
    if (
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      if (index >= 0) {
        setLogUser({
          ...logUser,
          current: index,
          emailMsg: "* Email found",
          verEmail: true,
          passwordMsg: "*",
        });
      } else {
        setLogUser({
          ...logUser,
          current: -1,
          emailMsg:
            "* User with this email not found. Sign up or introduce an existing user email",
          verEmail: false,
          verPassword: false,
          passwordMsg: "* * Incorrect password format",
        });
      }
    } else {
      setLogUser({
        ...logUser,
        current: -1,
        emailMsg: "* Incorrect email format",
        passwordMsg: "* Incorrect password format",
        verPassword: false,
      });
    }
  };

  const checkPass = (password) => {
    const newState = [...usersContext.users];
    if (password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)) {
      if (password === newState[logUser.current].password) {
        setLogUser({
          ...logUser,
          passwordMsg: "* Matching email and password",
          verPassword: true,
        });
      } else {
        setLogUser({
          ...logUser,
          passwordMsg: "* Email and password not matching",
          verPassword: false,
        });
      }
    } else {
      setLogUser({
        ...logUser,
        passwordMsg: "* Incorrect password format",
        verPassword: false,
      });
    }
  };
  return (
    <View style={CommonStyles.container}>
      <View style={CommonStyles.Middle}>
        <Text style={CommonStyles.LoginText}>Login</Text>
      </View>
      <View style={CommonStyles.text2}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={CommonStyles.signupText}> Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Username or Email Input Field */}
      <View style={CommonStyles.buttonStyle}>
        <View style={CommonStyles.emailInput}>
          <Input
            onChangeText={(text) => checkEmail(text)}
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
            placeholder="Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        <Text style={{ color: logUser.verEmail ? "green" : "red" }}>
          {logUser.emailMsg}
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
            onChangeText={(text) => {
              checkPass(text);
              setPasswordxt(text);
            }}
            editable={logUser.current === -1 ? false : true}
            variant="outline"
            value={passwordTxt}
            secureTextEntry
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
        <Text
          style={{
            color:
              logUser.current >= -1 && logUser.verPassword ? "green" : "red",
          }}
        >
          {logUser.current === -1
            ? "* Please introduce first an existing email"
            : logUser.passwordMsg}
        </Text>
      </View>

      {/* Button */}
      <View style={CommonStyles.buttonStyle}>
        <Button
          onPress={() => {
            console.log(logUser.verEmail && logUser.verPassword);
            usersContext.setCurrentUser(logUser.current);
            console.log(usersContext.currentUser);
            navigation.navigate("Calendar");
          }}
          style={[
            CommonStyles.buttonDesign,
            { opacity: logUser.verEmail && logUser.verPassword ? 1 : 0.5 },
          ]}
          disabled={logUser.verEmail && logUser.verPassword ? false : true}
        >
          LOGIN
        </Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
};
