import React, { Component, useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import { AuthContext } from "../../context";
const { height, width } = Dimensions.get("screen");
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUsers, updateUsers } from "../../src/graphql/mutations";
import { byUsername } from "../../src/graphql/queries";
Amplify.configure(awsconfig);
import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";

export const ProfileSetup = ({ route, navigation }) => {
  const [showPass, setShowPass] = useState(false);
  const ErpAuth = useContext(AuthContext);
  const [email, setEmail] = useState("aniketvaidya101@gmail.com");
  const [firstName, setfirstName] = useState("Aniket");
  const [lastName, setLastName] = useState("Vaidya");
  const [middleName, setMiddleName] = useState("");
  const [address, setAddress] = useState("Pune");
  const [contact, setContact] = useState("+918055832283");
  const [newPassword, setNewPassword] = useState("1234567890");
  const [confirmPassword, setConfirmPassword] = useState("1234567890");
  const [genderSelected, setSelectedGender] = useState(1);
  const [currentUserDt, setCurrentUserDt] = useState();
  const { user, userName } = route.params;

  const confirmProfileSetup = async () => {
    const user_tmp = JSON.parse(user);

    const pool = new CognitoUserPool({
      UserPoolId: user_tmp.pool.userPoolId,
      ClientId: user_tmp.pool.clientId,
      endpoint: user_tmp.client.endpoint,
      AdvancedSecurityDataCollectionFlag:
        user_tmp.advancedSecurityDataCollectionFlag,
    });
    const cognitoUser = new CognitoUser({
      Username: user_tmp.username,
      Pool: pool,
    });

    cognitoUser.Session = user_tmp.Session;
    console.log("user-ProfileSetup");
    if (
      email != "" &&
      lastName != "" &&
      firstName != "" &&
      address != "" &&
      contact != ""
    ) {
      if ((newPassword == confirmPassword) != "") {
        console.log(cognitoUser);
        Auth.completeNewPassword(
          cognitoUser, // the Cognito User Object
          confirmPassword, // the new password
          {
            //family_name: lastName,
            //email: email,
            //phone_number: contact,
            //address: address,
            name: firstName,
            preferred_username: userName,
            // middle_name: "Not Set",
          }
        )
          .then((user) => {
            // at this time the user is logged in if no MFA required
            console.log("cognitoUser");
            console.log(cognitoUser);
            navigation.navigate("LogIn");
          })
          .catch((e) => {
            console.log("error");
            console.log(e.message);
            navigation.navigate("LogIn");
          });
      } else {
        console.log("Incorrect Password");
      }
    }
  };

  const updateToken = async (id, usertype) =>
    await API.graphql({
      query: updateUsers,
      variables: {
        input: {
          id: id,
          userId: userName,
          name: firstName,
          username: userName,
          passwoard: confirmPassword,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone_number: contact,
          userType: usertype,
          profilePic: "",
          isUserActivated: true,
        },
      },
      authMode: "AWS_IAM",
    })
      .then((userdata) => {
        console.log("userCreated");
        console.log(userdata);
        confirmProfileSetup();
      })
      .catch((err) => {
        console.log("err : ", err);
      });

  const registerUser = async () => {
    try {
      const usertype =
        userName == "aniketvaidya101@gmail.com" ? "Admin" : "Supervisor";
      console.log("goot");
      //console.log(Auth.user.attributes);
      console.log(
        firstName +
          " " +
          userName +
          " " +
          confirmPassword +
          " " +
          firstName +
          " " +
          lastName +
          " " +
          email +
          " " +
          contact +
          " " +
          usertype
      );
      const getUser = await API.graphql({
        query: byUsername,
        variables: {
          username: userName,
        },
        authMode: "AWS_IAM",
      })
        .then((res) => {
          console.log(res);
          console.log(res.data.byUsername.items[0].id);
          const selectedID = res.data.byUsername.items[0].id;
          const selectedType = res.data.byUsername.items[0].userType;
          updateToken(selectedID, selectedType);
        })
        .catch((err) => {
          console.log(err);
        });
      getUser;

      /* const userdata = await API.graphql({
        query: updateUsers,
        variables: {
          input: {
            userId: userName,
            name: firstName,
            username: userName,
            passwoard: confirmPassword,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone_number: contact,
            userType: usertype,
            profilePic: "",
            isUserActivated: true,
          },
        },
        authMode: "AWS_IAM",
      })
        .then((userdata) => {
          console.log("userCreated");
          console.log(userdata);
          confirmProfileSetup();
        })
        .catch((err) => {
          console.log("err : ", err);
        });
      userdata; */
      //setUserToken(userdata.data.createUsers.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backGroundMain}>
        <View style={styles.headerCommon1}>
          <TouchableOpacity
            style={styles.headerbackButton1}
            onPress={() => {
              AsyncStorage.clear();
              Auth.signOut().then(() => {
                navigation.push("LogIn");
              });
            }}
          >
            <IoniconsIcon
              name="ios-arrow-back"
              style={styles.headerBackIcon1}
            ></IoniconsIcon>
          </TouchableOpacity>
          <Text style={styles.addSupervisor2}>Profile Setup</Text>
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
                  onPress={() => {
                    alert("In Progress");
                  }}
                >
                  <SimpleLineIconsIcon
                    name="user-follow"
                    style={styles.icon}
                  ></SimpleLineIconsIcon>
                </TouchableOpacity>
                <Text style={styles.addProfilePicture}>
                  Add Profile Picture
                </Text>
                <View style={styles.firstNameGrop}>
                  <Text style={styles.firstName}>First Name</Text>
                  <TextInput
                    onChangeText={(text) => setfirstName(text)}
                    placeholder="First Name"
                    style={styles.firstNameTextInput}
                  ></TextInput>
                </View>
                <View style={styles.lastNameGrop}>
                  <Text style={styles.lastName}>Last Name</Text>
                  <TextInput
                    onChangeText={(text) => setLastName(text)}
                    placeholder="Last Name"
                    style={styles.lastNameTextInput}
                  ></TextInput>
                </View>
                <View style={styles.userIdGrop}>
                  <Text style={styles.user_ID}>Email Address</Text>
                  <TextInput
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email Address"
                    style={styles.user_ID_textinput}
                  ></TextInput>
                </View>
                <View style={styles.addressGrop}>
                  <Text style={styles.address}>Address</Text>
                  <TextInput
                    onChangeText={(text) => setAddress(text)}
                    placeholder="Address"
                    numberOfLines={4}
                    multiline={true}
                    style={styles.addressTextInput}
                  ></TextInput>
                </View>
                <View style={styles.mobileNoGrop}>
                  <Text style={styles.mobileNo}>Mobile Number</Text>
                  <TextInput
                    onChangeText={(text) => setContact(text)}
                    placeholder="Mobile Number"
                    style={styles.mobileNoTextinput}
                  ></TextInput>
                </View>
                <View style={styles.maleSelectorRow}>
                  <View style={styles.maleSelector}>
                    <TouchableOpacity
                      style={[
                        styles.maleSelect,
                        {
                          backgroundColor: genderSelected
                            ? "rgba(176,100,243,1)"
                            : "#E6E6E6",
                        },
                      ]}
                      onPress={() => {
                        setSelectedGender(1);
                      }}
                    >
                      <Image
                        source={require("../../assets/images/pngegg_(1).png")}
                        resizeMode="contain"
                        style={styles.image2}
                      ></Image>
                    </TouchableOpacity>
                    <Text style={styles.male}>Male</Text>
                  </View>
                  <View style={styles.femaleSelector}>
                    <TouchableOpacity
                      style={[
                        styles.femaleSelect,
                        {
                          backgroundColor: genderSelected
                            ? "#E6E6E6"
                            : "rgba(176,100,243,1)",
                        },
                      ]}
                      onPress={() => {
                        setSelectedGender(0);
                      }}
                    >
                      <Image
                        source={require("../../assets/images/Daco_4212919_(1).png")}
                        resizeMode="contain"
                        style={styles.image}
                      ></Image>
                    </TouchableOpacity>
                    <Text style={styles.female}>Female</Text>
                  </View>
                </View>
                <View style={styles.newPasscontainer}>
                  <View style={styles.newPassGroup}>
                    <Text style={styles.newPassword}>New Password</Text>
                    <View style={styles.passwordTxtRow}>
                      <TextInput
                        onChangeText={(text) => setNewPassword(text)}
                        placeholder="New Password"
                        style={styles.passwordTxt}
                        secureTextEntry={showPass ? false : true}
                      ></TextInput>
                      <TouchableOpacity
                        style={styles.visiblePassButton1}
                        onPress={() => {
                          setShowPass(!showPass);
                        }}
                      >
                        <IoniconsIcon
                          name="md-eye"
                          style={styles.icon2}
                        ></IoniconsIcon>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.confNewPassGroup}>
                    <Text style={styles.confirmPassword}>Confirm Password</Text>
                    <View style={styles.confirmPassTxtStack}>
                      <TextInput
                        onChangeText={(text) => setConfirmPassword(text)}
                        placeholder="Confirm Password"
                        style={styles.confirmPassTxt}
                        secureTextEntry={showPass ? false : true}
                      ></TextInput>
                      <TouchableOpacity
                        style={styles.visiblePassButton2}
                        onPress={() => {
                          setShowPass(!showPass);
                        }}
                      >
                        <IoniconsIcon
                          name="md-eye-off"
                          style={styles.icon3}
                        ></IoniconsIcon>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => {
                    //confirmProfileSetup();
                    registerUser();
                  }}
                >
                  <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
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
    fontSize: height * 0.031,
    textAlign: "center",
    width: width * 0.75,
    height: height * 0.05,
    marginLeft: width * 0,
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
    height: height * 1.2,
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
  userIdGrop: {
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
    marginTop: height * 0.03,
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
    marginTop: height * 0.03,
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
    marginTop: height * 0.065,
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
  newPasscontainer: {
    width: width * 0.9,
    height: height * 0.22,
    backgroundColor: "rgba(80,227,194,1)",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "rgba(80,227,194,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: height * 0.04,
    marginLeft: width * 0,
  },
  newPassGroup: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.02,
    marginLeft: width * 0.015,
  },
  newPassword: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  passwordTxt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.75,
    height: height * 0.047,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  visiblePassButton1: {
    width: width * 0.12,
    height: height * 0.045,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
  },
  icon2: {
    color: "rgba(74,144,226,1)",
    fontSize: height * 0.02,
    alignSelf: "center",
  },
  passwordTxtRow: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.87,
    height: height * 0.047,
    flexDirection: "row",
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  confNewPassGroup: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.04,
    marginLeft: width * 0.015,
  },
  confirmPassword: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  confirmPassTxt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.75,
    height: height * 0.047,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  visiblePassButton2: {
    width: width * 0.12,
    height: height * 0.045,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
  },
  icon3: {
    color: "rgba(74,144,226,1)",
    fontSize: height * 0.02,
    alignSelf: "center",
  },
  confirmPassTxtStack: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.87,
    height: height * 0.047,
    flexDirection: "row",
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
});
