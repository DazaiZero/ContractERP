import React, { Component, useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import { AuthContext } from "../../context";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
Amplify.configure(awsconfig);
import FlashMessage from "react-native-flash-message";
import { ShowNotification } from "../../src/utils/utils";
import { createUsers } from "../../src/graphql/mutations";

const { height, width } = Dimensions.get("screen");

export const AddSupervisor = ({ route, navigation }) => {
  const ErpAuth = useContext(AuthContext);
  const [genderSelected, setSelectedGender] = useState();
  const [Fname, setFname] = useState("User");
  const [Lname, setLname] = useState("1");
  const [username, setUsername] = useState("User_1");
  const [TempPassword, setTempPassword] = useState();
  const [Email, setEmail] = useState("vaidya166@gmail.com");
  const [MobileNumber, setMobileNumber] = useState("+918055832283");
  const [address, setAdress] = useState();
  const [response, setResponse] = useState();

  const getResponse = async () => {
    try {
      let response = await fetch(
        "https://tx4r4oepuf.execute-api.ap-south-1.amazonaws.com/test/userManagement",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: Email,
            phone: MobileNumber,
          }),
        }
      );
      const json = await response.json();
      console.log("response");
      console.log(json);
      setResponse(json);
      if (json.status == 200) {
        AddSupervisorDB();
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const NewSupervisor = async () => {
    console.log("got Here");
    getResponse();
  };

  const AddSupervisorDB = async () => {
    console.log("AddUserDB");
    const idTmp = Math.random().toString(36).substr(2, 10);
    console.log(idTmp);
    const userdata = await API.graphql({
      query: createUsers,
      variables: {
        input: {
          id: idTmp,
          userId: idTmp,
          name: username,
          username: username,
          passwoard: "",
          firstName: Fname,
          lastName: Lname,
          email: Email,
          phone_number: MobileNumber,
          userType: 2,
          profilePic: "",
          isUserActivated: false,
          siteId: "NA",
        },
      },
    }).then((res) => {
      console.log("res");
      console.log(res);
      ShowNotification("Supervisor Added Successfull", 1);
      navigation.push("Supervisor");
    });
  };

  useEffect(() => {
    if (Fname != "" && Lname != "") {
      const tmp = Fname + "_" + Lname;
      setUsername(tmp);
    } else {
      setUsername("Username");
    }
  }, [Fname, Lname]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.backGroundMain}>
          <View style={styles.headerCommon1}>
            <TouchableOpacity
              style={styles.headerbackButton1}
              onPress={() => {
                navigation.push("Supervisor");
              }}
            >
              <IoniconsIcon
                name="ios-arrow-back"
                style={styles.headerBackIcon1}
              ></IoniconsIcon>
            </TouchableOpacity>
            <Text style={styles.addSupervisor2}>Add Supervisor</Text>
          </View>
          <View style={styles.addSupervisorMiddle1}>
            <View style={styles.scrollArea1}>
              <ScrollView
                horizontal={false}
                contentContainerStyle={styles.scrollArea1_contentContainerStyle}
              >
                <View style={styles.rect}>
                  <TouchableOpacity
                    style={styles.profilepicbutton}
                    disabled={true}
                  >
                    <SimpleLineIconsIcon
                      name="user-follow"
                      style={styles.icon}
                    ></SimpleLineIconsIcon>
                  </TouchableOpacity>
                  {/* <Text style={styles.addProfilePicture}>
                  Add Profile Picture
                </Text> */}
                  <View style={styles.firstNameGrop}>
                    <Text style={styles.firstName}>First Name</Text>
                    <TextInput
                      onChangeText={(text) => setFname(text)}
                      placeholder="First Name"
                      style={styles.firstNameTextInput}
                    ></TextInput>
                  </View>
                  <View style={styles.lastNameGrop}>
                    <Text style={styles.lastName}>Last Name</Text>
                    <TextInput
                      onChangeText={(text) => setLname(text)}
                      placeholder="Last Name"
                      style={styles.lastNameTextInput}
                    ></TextInput>
                  </View>
                  <View style={styles.usernameGrop}>
                    <Text style={styles.user_ID}>User Name</Text>
                    <TextInput
                      disabled={true}
                      //onChangeText={(text) => setUsername(text)}
                      placeholder={username}
                      style={styles.user_ID_textinput}
                    ></TextInput>
                  </View>
                  {/* <View style={styles.passwordGrop}>
                  <Text style={styles.password}>Password</Text>
                  <TextInput
                    onChangeText={(text) => setTempPassword(text)}
                    placeholder="Temporary Password"
                    style={styles.passwordtextinput}
                  ></TextInput>
                </View> */}
                  <View style={styles.mobileNoGrop}>
                    <Text style={styles.mobileNo}>Mobile Number</Text>
                    <TextInput
                      onChangeText={(text) => setMobileNumber(text)}
                      placeholder="Supervisor Mobile Number"
                      style={styles.mobileNoTextinput}
                    ></TextInput>
                  </View>
                  <View style={styles.mobileNoGrop1}>
                    <Text style={styles.mobileNo1}>Email Address</Text>
                    <TextInput
                      onChangeText={(text) => setEmail(text)}
                      placeholder="Supervisor Email Address"
                      style={styles.mobileNoTextinput1}
                    ></TextInput>
                  </View>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                      NewSupervisor();
                      //AddSupervisorDB();
                    }}
                  >
                    <Text style={styles.save}>Save</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <FlashMessage position="top" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(54,138,236,1)",
    justifyContent: "center",
  },
  backGroundMain: {
    width: width,
    height: height,
    backgroundColor: "rgba(54,138,236,1)",
    alignSelf: "center",
  },
  headerCommon1: {
    width: width,
    height: height * 0.08,
    borderRadius: 32,
    flexDirection: "row",
    marginTop: height * 0.05,
  },
  headerbackButton1: {
    width: width * 0.2,
    height: height * 0.05,
    borderRadius: 20,
    marginLeft: -width * 0.05,
    marginTop: height * 0.01,
  },
  headerBackIcon1: {
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.045,
    marginTop: height * 0.0,
    marginLeft: width * 0.1,
  },
  addSupervisor2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.033,
    textAlign: "center",
    marginLeft: width * 0.1,
    marginTop: -height * 0.015,
    alignSelf: "center",
    width: width * 0.5,
  },
  addSupervisorMiddle1: {
    width: width,
    height: height * 0.8,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 72,
    marginTop: height * 0.03,
  },
  scrollArea1: {
    width: width,
    height: height * 0.8,
    borderRadius: 71,
  },
  scrollArea1_contentContainerStyle: {
    height: height * 0.8,
    width: width,
    borderRadius: 71,
  },
  rect: {
    width: width * 0.9,
    height: height,
    borderRadius: 71,
    alignSelf: "center",
  },
  profilepicbutton: {
    width: width * 0.35,
    height: height * 0.15,
    borderRadius: 65,
    borderWidth: 0,
    borderColor: "#000000",
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    marginTop: height * 0.02,
    marginLeft: width * 0.28,
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: height * 0.05,
    alignSelf: "center",
  },
  addProfilePicture: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "center",
    marginTop: height * 0.01,
    marginLeft: width * 0.21,
    fontSize: height * 0.015,
  },
  firstNameGrop: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.02,
    marginLeft: width * 0.0,
  },
  firstName: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  firstNameTextInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  lastNameGrop: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.03,
    marginLeft: width * 0.0,
  },
  lastName: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  lastNameTextInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  usernameGrop: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.03,
    marginLeft: width * 0.0,
  },
  user_ID: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  user_ID_textinput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  passwordGrop: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.038,
    marginLeft: width * 0.0,
  },
  password: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  passwordtextinput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  addressGrop: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.038,
    marginLeft: width * 0.0,
  },
  address: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  addressTextInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.08,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  mobileNoGrop: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.038,
    marginLeft: width * 0.0,
  },
  mobileNo: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  mobileNoTextinput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  mobileNoGrop1: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.038,
    marginLeft: width * 0.0,
  },
  mobileNo1: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  mobileNoTextinput1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  maleSelector: {
    width: width * 0.17,
    height: height * 0.07,
    marginTop: height * 0.02,
    marginLeft: width * 0.0,
  },
  maleSelect: {
    width: width * 0.17,
    height: height * 0.07,
    borderRadius: 52,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 1,
      width: 2,
    },
    elevation: 5,
    shadowOpacity: 0.45,
    shadowRadius: 0,
  },
  image2: {
    width: width * 0.08,
    height: height * 0.05,
    marginTop: height * 0.01,
    marginLeft: width * 0.045,
  },
  male: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: height * 0.01,
    marginLeft: -width * 0.015,
    height: height * 0.03,
    width: width * 0.2,
  },
  femaleSelector: {
    width: width * 0.17,
    height: height * 0.07,
    marginTop: height * 0.02,
    marginLeft: width * 0.03,
  },
  femaleSelect: {
    width: width * 0.17,
    height: height * 0.07,
    borderRadius: 52,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 1,
      width: 2,
    },
    elevation: 5,
    shadowOpacity: 0.45,
    shadowRadius: 0,
  },
  image: {
    width: width * 0.07,
    height: height * 0.045,
    marginTop: height * 0.01,
    marginLeft: width * 0.05,
  },
  female: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    marginTop: height * 0.01,
    marginLeft: -width * 0.015,
    height: height * 0.03,
    width: width * 0.2,
  },
  maleSelectorRow: {
    height: height * 0.1,
    flexDirection: "row",
    marginTop: height * 0.03,
    marginLeft: width * 0.28,
    marginRight: width * 0.245,
  },
  saveButton: {
    width: width * 0.3,
    height: height * 0.07,
    backgroundColor: "rgba(92,154,226,1)",
    borderRadius: 81,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,1)",
    marginTop: height * 0.05,
    marginLeft: width * 0.31,
  },
  save: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.025,
    marginTop: height * 0.01,
    marginLeft: width * 0.04,
    width: width * 0.2,
    height: height * 0.05,
    textAlign: "center",
  },
});
