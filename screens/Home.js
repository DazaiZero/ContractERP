import React, { Component, useContext } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context";
const { height, width } = Dimensions.get("screen");

export const Home = ({ route, navigation }) => {
  const ErpAuth = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.homeMiddleBckStack}>
        <View style={styles.homeMiddleBck}></View>
        <View style={styles.optionsScroll}>
          <ScrollView
            horizontal={false}
            // contentContainerStyle={styles.optionsScroll_contentContainerStyle}
          >
            <View style={styles.siteOngoingButtonRow}>
              <TouchableOpacity
                style={styles.siteOngoingButton}
                onPress={() => {
                  navigation.push("SitesOngoing");
                }}
              >
                <Image
                  source={require("../assets/images/under_construction_PNG66.png")}
                  resizeMode="contain"
                  style={styles.siteongoing_img}
                ></Image>
                <Text style={styles.sitesOngoing}>Sites Ongoing</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.addSupervisorButton}
                onPress={() => {
                  navigation.push("Supervisor");
                }}
              >
                <Image
                  source={require("../assets/images/supervisor.png")}
                  resizeMode="contain"
                  style={styles.addsupervisor_img}
                ></Image>
                <Text style={styles.addSupervisor}>Add Supervisor</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.workerManagementButtonRow}>
              <TouchableOpacity
                style={styles.workerManagementButton}
                onPress={() => {
                  navigation.push("WorkerList");
                }}
              >
                <Image
                  source={require("../assets/images/pngkit_construction-worker-png_698032.png")}
                  resizeMode="contain"
                  style={styles.workermanage_img}
                ></Image>
                <Text style={styles.workerManagement}>Worker Management</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.accSupervisorButton}
                disabled={true}
                onPress={() => {
                  //navigation.push("WorkerList");
                }}
              >
                <Image
                  source={require("../assets/images/businessman1.png")}
                  resizeMode="contain"
                  style={styles.accountSupervisor_img}
                ></Image>
                <Text style={styles.accountingSupervisor}>
                  Accounting Supervisor
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.builderSupplierButtonRow}>
              <TouchableOpacity
                style={styles.builderSupplierButton}
                disabled={true}
                onPress={() => {
                  //navigation.push("WorkerList");
                }}
              >
                <Image
                  source={require("../assets/images/toppng.com-suppliers-png-512x5121.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
                <Text style={styles.builderSupplier}>Builder Supplier</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.attendanceButton}
                disabled={true}
                onPress={() => {
                  //navigation.push("WorkerList");
                }}
              >
                <Image
                  source={require("../assets/images/pngkit_punch-png_1169242.png")}
                  resizeMode="contain"
                  style={styles.image2}
                ></Image>
                <Text style={styles.attendance}>Attendance</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.completedSiteButtonRow}>
              <TouchableOpacity
                style={styles.completedSiteButton}
                onPress={() => {
                  navigation.push("CompletedSite");
                }}
              >
                <Image
                  source={require("../assets/images/PinClipart.com_free-eiffel-tower-clip_496860.png")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
                <Text style={styles.completedSites}>Completed Sites</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.siteImageButton}
                onPress={() => {
                  navigation.push("SiteImages", { parent: "Home" });
                }}
              >
                <Image
                  source={require("../assets/images/pngkey.com-gallery-icon-png-505515.png")}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
                <Text style={styles.siteImages}>Site Images</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addMaterialButtonRow}>
              <TouchableOpacity
                style={styles.addMaterialButton}
                disabled={true}
                onPress={() => {
                  //navigation.push("SiteImages");
                }}
              >
                <Image
                  source={require("../assets/images/PinClipart.com_follow-directions-clipart_1093177.png")}
                  resizeMode="contain"
                  style={styles.image5}
                ></Image>
                <Text style={styles.addMaterialType}>Add Material type</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.addSiteButton}
                onPress={() => {
                  navigation.push("AddSite", { parent: "Home" });
                }}
              >
                <Image
                  source={require("../assets/images/free-home-construction-icon-2492-thumb1.png")}
                  resizeMode="contain"
                  style={styles.image7}
                ></Image>
                <Text style={styles.addNewsite}>Add New Site</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.home_Header}>
        <Text style={styles.welcome}>Welcome</Text>
        <View style={styles.adminRow}>
          <Text style={styles.admin}>Admin</Text>
          <Text style={styles.aniketVaidya}>Aniket Vaidya</Text>
          <TouchableOpacity style={styles.siteOptionButton}>
            <Icon name="ios-options" style={styles.icon1}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(54,138,236,1)",
    width: width,
    height: height,
  },
  homeMiddleBck: {
    top: height * 0.05,
    left: 0,
    width: width,
    height: height * 1,
    position: "absolute",
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 72,
  },
  optionsScroll: {
    top: -height * 0.05,
    left: 0,
    width: width,
    height: height,
    position: "absolute",
  },
  optionsScroll_contentContainerStyle: {
    height: height,
    width: width,
  },
  siteOngoingButton: {
    width: width * 0.4,
    height: height * 0.17,
    left: width * 0.025,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
  },
  siteongoing_img: {
    width: width * 0.25,
    height: height * 0.09,
    marginTop: height * 0.02,
    marginLeft: width * 0.08,
  },
  sitesOngoing: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.015,
    marginTop: height * 0.0,
    marginLeft: width * 0.09,
  },
  addSupervisorButton: {
    width: width * 0.4,
    height: height * 0.17,
    left: width * 0.06,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
  },
  addSupervisor: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.015,
    marginTop: height * 0.0,
    marginLeft: width * 0.07,
  },
  addsupervisor_img: {
    width: width * 0.2,
    height: height * 0.09,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
  },
  addSupervisorRow: {
    height: 105,
    flexDirection: "row",
    flex: 1,
    marginRight: 46,
    marginLeft: 31,
    marginTop: 1,
  },
  siteOngoingButtonRow: {
    height: height * 0.17,
    width: width * 0.9,
    flexDirection: "row",
    marginTop: height * 0.0,
    marginLeft: width * 0.05,
  },
  workerManagementButton: {
    width: width * 0.34,
    height: height * 0.145,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
  },
  workerManagement: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    height: height * 0.04,
    width: width * 0.25,
    fontSize: height * 0.012,
    marginTop: height * 0.09,
    marginLeft: -width * 0.21,
  },
  workermanage_img: {
    width: width * 0.15,
    height: height * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
  },
  workerManagementRow: {
    height: 101,
    flexDirection: "row",
    flex: 1,
    marginRight: 38,
    marginLeft: 11,
    marginTop: -3,
  },
  accSupervisorButton: {
    width: width * 0.34,
    height: height * 0.145,
    left: width * 0.018,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
  },
  accountSupervisor_img: {
    width: width * 0.15,
    height: height * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
  },
  accountingSupervisor: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    height: height * 0.04,
    width: width * 0.25,
    fontSize: height * 0.012,
    marginTop: height * 0.09,
    marginLeft: -width * 0.21,
  },
  workerManagementButtonRow: {
    height: height * 0.145,
    width: width * 0.7,
    flexDirection: "row",
    marginTop: height * 0.015,
    marginLeft: width * 0.145,
  },
  builderSupplierButton: {
    width: width * 0.34,
    height: height * 0.145,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
  },
  image: {
    width: width * 0.15,
    height: height * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
  },
  builderSupplier: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    height: height * 0.04,
    width: width * 0.25,
    fontSize: height * 0.012,
    marginTop: height * 0.09,
    marginLeft: -width * 0.21,
  },
  attendanceButton: {
    width: width * 0.34,
    height: height * 0.145,
    left: width * 0.018,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
  },
  attendance: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    height: height * 0.04,
    width: width * 0.25,
    fontSize: height * 0.012,
    marginTop: height * 0.09,
    marginLeft: -width * 0.21,
  },
  image2: {
    width: width * 0.15,
    height: height * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
  },
  builderSupplierButtonRow: {
    height: height * 0.145,
    width: width * 0.7,
    flexDirection: "row",
    marginTop: height * 0.015,
    marginLeft: width * 0.145,
  },
  completedSiteButton: {
    width: width * 0.34,
    height: height * 0.145,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
  },
  image3: {
    width: width * 0.15,
    height: height * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
  },
  completedSites: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    height: height * 0.04,
    width: width * 0.25,
    fontSize: height * 0.012,
    marginTop: height * 0.09,
    marginLeft: -width * 0.21,
  },
  siteImageButton: {
    width: width * 0.34,
    height: height * 0.145,
    left: width * 0.018,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
  },
  siteImages: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    height: height * 0.04,
    width: width * 0.25,
    fontSize: height * 0.012,
    marginTop: height * 0.09,
    marginLeft: -width * 0.2,
  },
  image4: {
    width: width * 0.15,
    height: height * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
  },
  completedSiteButtonRow: {
    height: height * 0.145,
    width: width * 0.7,
    flexDirection: "row",
    marginTop: height * 0.015,
    marginLeft: width * 0.145,
  },
  addMaterialButton: {
    width: width * 0.34,
    height: height * 0.145,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
  },
  addMaterialType: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    height: height * 0.04,
    width: width * 0.25,
    fontSize: height * 0.012,
    marginTop: height * 0.09,
    marginLeft: -width * 0.2,
  },
  image5: {
    width: width * 0.15,
    height: height * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
  },
  addMaterialTypeStack: {
    width: 59,
    height: 102,
    marginTop: -3,
    marginLeft: 37,
  },
  addSiteButton: {
    width: width * 0.34,
    height: height * 0.145,
    left: width * 0.018,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
  },
  image7: {
    width: width * 0.15,
    height: height * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.09,
  },
  addNewsite: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    height: height * 0.04,
    width: width * 0.25,
    fontSize: height * 0.012,
    marginTop: height * 0.09,
    marginLeft: -width * 0.2,
  },
  addMaterialButtonRow: {
    height: height * 0.145,
    width: width * 0.7,
    flexDirection: "row",
    marginTop: height * 0.015,
    marginLeft: width * 0.145,
  },
  homeMiddleBckStack: {
    width: width,
    height: height * 0.8,
    marginTop: height * 0.15,
  },
  home_Header: {
    position: "absolute",
    width: width,
    height: height * 0.1,
    borderRadius: 32,
    flexDirection: "row",
  },
  welcome: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.025,
    width: width * 0.3,
    height: height * 0.05,
    marginLeft: width * 0.05,
    marginTop: height * 0.02,
  },
  admin: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.02,
    marginTop: height * 0.025,
    marginLeft: width * 0,
  },
  aniketVaidya: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    alignItems: "center",
    textAlign: "left",
    fontSize: height * 0.021,
    width: width * 0.45,
    height: height * 0.05,
    marginLeft: width * 0.05,
    marginTop: height * 0.01,
  },
  siteOptionButton: {
    width: width * 0.2,
    height: height * 0.05,
    marginTop: height * 0.0,
    marginLeft: width * 0.0,
  },
  icon1: {
    fontSize: height * 0.05,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  adminRow: {
    height: height * 0.06,
    width: width * 0.05,
    flexDirection: "row",
    flex: 1,
    marginLeft: -width * 0.185,
    marginTop: height * 0.025,
  },
});
