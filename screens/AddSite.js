import React, { Component, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import { AuthContext } from "../context";
const { height, width } = Dimensions.get("screen");

export const AddSite = ({ route, navigation }) => {
  const ErpAuth = useContext(AuthContext);
  const { parent } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.backGroundMain}>
        <View style={styles.headerCommon1}>
          <TouchableOpacity
            style={styles.headerbackButton1}
            onPress={() => {
              if (parent == "Home") navigation.push("Home");
              else navigation.push("SitesOngoing");
            }}
          >
            <IoniconsIcon
              name="ios-arrow-back"
              style={styles.headerBackIcon1}
            ></IoniconsIcon>
          </TouchableOpacity>
          <Text style={styles.addNewSite}>Add New Site</Text>
        </View>
        <View style={styles.addSupervisorMiddle1}>
          <View style={styles.scrollArea1}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea1_contentContainerStyle}
            >
              <View style={styles.rect}>
                <TouchableOpacity style={styles.addSiteImageButton}>
                  <SimpleLineIconsIcon
                    name="picture"
                    style={styles.icon}
                  ></SimpleLineIconsIcon>
                </TouchableOpacity>
                <Text style={styles.addSiteImages}>Add Site Images</Text>
                <View style={styles.firstNameGrop}>
                  <Text style={styles.siteNameTxt}>Site Name</Text>
                  <TextInput
                    placeholder="Site Name"
                    style={styles.siteNameText}
                  ></TextInput>
                </View>
                <View style={styles.addressGrop}>
                  <Text style={styles.address}>Address</Text>
                  <TextInput
                    placeholder="Address"
                    numberOfLines={5}
                    style={styles.addressTextInput}
                  ></TextInput>
                </View>
                <View style={styles.citytxt}>
                  <Text style={styles.city}>City</Text>
                  <TextInput
                    placeholder="City"
                    style={styles.cityText}
                  ></TextInput>
                </View>
                <View style={styles.stateTxt}>
                  <Text style={styles.state}>State</Text>
                  <TextInput
                    placeholder="State"
                    style={styles.textInput}
                  ></TextInput>
                </View>
                <View style={styles.addSupervisor}>
                  <Text style={styles.addSupervisor2}>Add Supervisor</Text>
                  <TextInput
                    placeholder="Supervisor Dropdown"
                    style={styles.textInput2}
                  ></TextInput>
                </View>
                <View style={styles.dateSelector}>
                  <Text style={styles.startDate}>Start Date</Text>
                  <TextInput
                    placeholder="Date Select"
                    style={styles.textInput3}
                  ></TextInput>
                </View>
                <TouchableOpacity style={styles.saveButton}>
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
  addNewSite: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.033,
    textAlign: "center",
    marginLeft: width * 0.1,
    marginTop: -height * 0.015,
    alignSelf: "center",
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
    height: height * 0.9,
    width: width,
    borderRadius: 71,
  },
  rect: {
    width: width * 0.9,
    height: height * 0.9,
    borderRadius: 71,
    alignSelf: "center",
  },
  addSiteImageButton: {
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
  addSiteImages: {
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
  siteNameTxt: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  siteNameText: {
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
    marginTop: height * 0.04,
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
  citytxt: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.07,
    marginLeft: width * 0.0,
  },
  city: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  cityText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  stateTxt: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.04,
    marginLeft: width * 0.0,
  },
  state: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  addSupervisor: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.04,
    marginLeft: width * 0.0,
  },
  addSupervisor2: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  dateSelector: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.04,
    marginLeft: width * 0.0,
  },
  startDate: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
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
