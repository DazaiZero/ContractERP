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
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { listSites } from "../../src/graphql/queries";
import { createWorkers } from "../../src/graphql/mutations";

const { height, width } = Dimensions.get("screen");

export const AddWorker = ({ route, navigation }) => {
  const ErpAuth = useContext(AuthContext);
  const [genderSelected, setSelectedGender] = useState();
  const [WorkerName, setWorkerName] = useState();
  const [Address, setAddress] = useState();
  const [username, setUsername] = useState();
  const [TempPassword, setTempPassword] = useState();
  const [PDAmount, setPDAmount] = useState();
  const [TBAmount, setTBAmount] = useState();
  const [selectedFlag, setselectedFlag] = useState();
  const [SelectedSitevalue, setSelectedSiteValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [siteData, setSiteData] = useState([]);

  /* const dataTmp = [
    { name: "Site 1", id: "1" },
    { name: "Site 2", id: "2" },
    { name: "Site 3", id: "3" },
    { name: "Site 4", id: "4" },
    { name: "Site 5", id: "5" },
    { name: "Site 6", id: "6" },
    { name: "Site 7", id: "7" },
    { name: "Site 8", id: "8" },
  ]; */

  const getSite = async () => {
    const siteData = await API.graphql({
      query: listSites,
    }).then((res) => {
      console.log("site List");
      console.log(res);
      setSiteData(res.data.listSites.items);
    });
    siteData;
  };

  useEffect(() => {
    getSite();
  }, []);

  const AddWorker = async () => {
    console.log("AddUserDB");
    const idTmp = Math.random().toString(36).substr(2, 10);
    console.log(SelectedSitevalue);
    if (SelectedSitevalue != "") {
      const userdata = await API.graphql({
        query: createWorkers,
        variables: {
          input: {
            id: idTmp,
            workerId: idTmp,
            workerName: WorkerName,
            workerImage: "",
            documents: "",
            address: Address,
            attendedDays: 0.0,
            paidAmount: 0,
            payableAmount: TBAmount,
            costPerday: PDAmount,
            addedBy: username,
            siteId: SelectedSitevalue,
          },
        },
      }).then((res) => {
        console.log("Worker Added Successfull");
        console.log(res);
        ShowNotification("Worker Added Successfull", 1);
        navigation.push("Home");
      });
    }
  };

  useEffect(() => {
    if (WorkerName != "" && Address != "") {
      const tmp = WorkerName + "_" + Address;
      setUsername(tmp);
    } else {
      setUsername("Username");
    }
  }, [WorkerName, Address]);

  useEffect(() => {
    if (SelectedSitevalue != "Select Site" && SelectedSitevalue != "") {
      setselectedFlag(true);
    }
  }, [SelectedSitevalue]);

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
                navigation.push("Home");
              }}
            >
              <IoniconsIcon
                name="ios-arrow-back"
                style={styles.headerBackIcon1}
              ></IoniconsIcon>
            </TouchableOpacity>
            <Text style={styles.addSupervisor2}>Add Worker</Text>
          </View>
          <View style={styles.button1}>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "white" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={siteData}
              search
              maxHeight={300}
              labelField="siteName"
              valueField="id"
              placeholder={!isFocus ? "Select Site" : "..."}
              searchPlaceholder="Search Site"
              value={SelectedSitevalue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setSelectedSiteValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={{ marginLeft: width * 0.02 }}
                  color={"black"}
                  name="home"
                  size={width * 0.03}
                />
              )}
            />
          </View>
          <View style={styles.addSupervisorMiddle1}>
            <View style={styles.scrollArea1}>
              <ScrollView
                horizontal={false}
                contentContainerStyle={styles.scrollArea1_contentContainerStyle}
              >
                <View style={styles.rect}>
                  {selectedFlag ? (
                    <View>
                      <TouchableOpacity
                        style={styles.profilepicbutton}
                        disabled={true}
                      >
                        <SimpleLineIconsIcon
                          name="user-follow"
                          style={styles.icon}
                        ></SimpleLineIconsIcon>
                      </TouchableOpacity>
                      <View style={styles.firstNameGrop}>
                        <Text style={styles.firstName}>Worker Name</Text>
                        <TextInput
                          onChangeText={(text) => setWorkerName(text)}
                          placeholder="Worker Name"
                          style={styles.firstNameTextInput}
                        ></TextInput>
                      </View>
                      <View style={styles.lastNameGrop}>
                        <Text style={styles.lastName}>Address</Text>
                        <TextInput
                          onChangeText={(text) => setAddress(text)}
                          placeholder="Address"
                          style={styles.lastNameTextInput}
                        ></TextInput>
                      </View>
                      <View style={styles.mobileNoGrop}>
                        <Text style={styles.mobileNo}>
                          To Be Payable Amount
                        </Text>
                        <TextInput
                          onChangeText={(text) => setTBAmount(text)}
                          placeholder="Amount"
                          style={styles.mobileNoTextinput}
                        ></TextInput>
                      </View>
                      <View style={styles.mobileNoGrop1}>
                        <Text style={styles.mobileNo1}>Cost Per Day</Text>
                        <TextInput
                          onChangeText={(text) => setPDAmount(text)}
                          placeholder="Amount"
                          style={styles.mobileNoTextinput1}
                        ></TextInput>
                      </View>
                      <TouchableOpacity style={styles.doucment}>
                        <Text style={styles.docUpTxt}>Upload Document</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.saveButton}
                        onPress={() => {
                          //NewSupervisor();
                          AddWorker();
                        }}
                      >
                        <Text style={styles.save}>Save</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View>
                      <Text style={styles.noWorkerData}>
                        Please select Site
                      </Text>
                    </View>
                  )}
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
  noWorkerData: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    width: width * 0.9,
    height: height * 0.045,
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: height * 0.3,
    marginLeft: width * 0.01,
    fontSize: height * 0.04,
  },
  doucment: {
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.05,
    marginLeft: width * 0.0,
  },
  docUpTxt: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    width: width * 0.9,
    height: height * 0.045,
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  button1: {
    width: width * 0.8,
    height: height * 0.045,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: -height * 0.0,
    marginLeft: width * 0.1,
  },

  dropdown: {
    height: height * 0.05,
    width: width * 0.8,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 9,
  },
  icon: {
    marginRight: width * 0.2,
  },
  placeholderStyle: {
    fontSize: width * 0.03,
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
    marginLeft: -width * 0.0,
    alignSelf: "center",
    width: width * 0.5,
  },
  selectedTextStyle: {
    fontSize: width * 0.03,
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
    marginLeft: -width * 0.0,
    alignSelf: "center",
    width: width * 0.5,
  },
  iconStyle: {
    width: width * 0.04,
    height: height * 0.04,
    marginRight: width * 0.02,
  },
  inputSearchStyle: {
    height: height * 0.04,
    fontSize: width * 0.03,
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
  },
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
