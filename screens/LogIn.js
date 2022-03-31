import React, { Component, useContext } from "react";
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

export const LogIn = (props) => {
  const ErpAuth = useContext(AuthContext);

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
                  placeholder="Username"
                  style={styles.username_text}
                ></TextInput>
              </View>
              <View style={styles.password_Textinput}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  style={styles.password_text}
                ></TextInput>
              </View>
              <TouchableOpacity
                style={[styles.containerButton, styles.button]}
                onPress={() => {
                  ErpAuth.setUserToken("UserID-AdminAccess");
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
