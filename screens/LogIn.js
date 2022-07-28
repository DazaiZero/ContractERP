import React, { Component, useContext, useState } from "react";
import {
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { AuthContext } from "../context";
const { height, width } = Dimensions.get("screen");
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import AsyncStorage from "@react-native-async-storage/async-storage";
Amplify.configure(awsconfig);

export const LogIn = ({ route, navigation }) => {
  const ErpAuth = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [username, setUserN] = useState("Admin");
  const [password, setPassword] = useState("1234567890");

  const SignIn = async () => {
    console.log("Signning IN");
    Auth.signIn(username, password)
      .then((user) => {
        console.log("user");
        console.log(user);
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
          console.log("requiredAttributes");
          console.log(JSON.stringify(requiredAttributes));
          // ErpAuth.setUserToken("User");
          navigation.navigate("ProfileSetup", {
            user: JSON.stringify(user),
            userName: username,
          });
        } else {
          AsyncStorage.setItem("user", JSON.stringify(user));
          AsyncStorage.setItem("UserToken", JSON.stringify(user));
          ErpAuth.setUserToken(user);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.backGroundMain}>
            <Text style={styles.smartErp}>SMART ERP</Text>
            <Text style={styles.loremIpsum}>HexSmart Technologies .llp</Text>
            <View style={styles.rect}>
              <Text style={styles.text}>LogIn</Text>
              <View style={styles.username_textinput}>
                <TextInput
                  onChangeText={(text) => setUserN(text)}
                  placeholder="Username"
                  style={styles.username_text}
                ></TextInput>
              </View>
              <View style={styles.password_Textinput}>
                <TextInput
                  onChangeText={(text) => setPassword(text)}
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.password_text}
                ></TextInput>
              </View>
              <TouchableOpacity
                style={[styles.containerButton, styles.button]}
                onPress={() => {
                  if (password != "" && username != "") {
                    SignIn();
                  } else {
                    console.log("Password or username is Incorrect");
                  }
                }}
              >
                <Text style={styles.enter}>Enter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: "rgba(92,154,226,1)",
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "rgba(255,255,255,1)",
  },
  enter: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.025,
    textAlign: "center",
    marginTop: height * 0.025,
    marginLeft: width * 0.01,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#32E4BB",
  },
  backGroundMain: {
    width: "100%",
    height: "100%",
    backgroundColor: "#32E4BB",
  },
  smartErp: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.04,
    textAlign: "center",
    marginTop: height * 0.05,
    marginLeft: width * 0.0,
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.01,
    textAlign: "center",
    marginLeft: width * 0.0,
    marginTop: height * 0.0,
    backgroundColor: "white",
  },
  rect: {
    width: width * 1,
    height: height * 0.79,
    backgroundColor: "rgba(38,32,46,1)",
    borderRadius: 72,
    marginTop: height * 0.05,
    marginLeft: 0,
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.04,
    textAlign: "center",
    width: width * 1,
    height: height * 0.07,
    marginTop: height * 0.1,
    marginLeft: width * 0.0,
  },
  username_textinput: {
    width: width * 0.7,
    height: height * 0.07,
    marginTop: height * 0.05,
    marginLeft: width / 6,
  },
  username_text: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    width: width * 0.7,
    height: height * 0.07,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 28,
    borderWidth: 3,
    borderColor: "rgba(80,227,194,1)",
    textAlign: "center",
    fontSize: height * 0.02,
  },
  password_Textinput: {
    width: width * 0.7,
    height: height * 0.07,
    marginTop: height * 0.05,
    marginLeft: width / 6,
  },
  password_text: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    width: width * 0.7,
    height: height * 0.07,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 28,
    borderWidth: 3,
    borderColor: "rgba(80,227,194,1)",
    textAlign: "center",
    fontSize: height * 0.02,
  },
  button: {
    height: height * 0.1,
    width: width * 0.4,
    marginTop: height * 0.1,
    marginLeft: width * 0.31,
  },
});
