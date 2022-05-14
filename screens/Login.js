import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Input, NativeBaseProvider, Button, Icon } from "native-base";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CommonStyles } from "../styles/CommonStyles";

function Login() {
  const navigation = useNavigation();
  return (
    <View style={CommonStyles.container}>
      <View style={CommonStyles.text2}>
        <Text>Click here to go to the home page.</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={CommonStyles.signupText}> Homepage </Text>
        </TouchableOpacity>
      </View>

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
            placeholder="Username or Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
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
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Button */}
      <View style={CommonStyles.buttonStyle}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Button style={CommonStyles.buttonDesign}>LOGIN</Button>
        </TouchableOpacity>
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