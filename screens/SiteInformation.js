import React, { Component, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Dimensions,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../context";
const { height, width } = Dimensions.get("screen");

export const SiteInformation = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSelectSite1}>
        <TouchableOpacity
          style={styles.headerbackButton1}
          onPress={() => {
            navigation.push("SitesOngoing");
          }}
        >
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.headerBackIcon1}
          ></IoniconsIcon>
        </TouchableOpacity>
        <Text style={styles.siteName1}>Site Name</Text>
        <TouchableOpacity
          style={styles.headerSideButton1}
          onPress={() => {
            navigation.push("SiteImages", { parent: "SiteInformation" });
          }}
        >
          <MaterialCommunityIconsIcon
            name="tooltip-image"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.selectSiteMiddle1}>
        <Text style={styles.information}>Information</Text>
        <View style={styles.selectSiteImages1}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={
              styles.selectSiteImages1_contentContainerStyle
            }
          >
            <View style={styles.mainContainer}>
              <View style={styles.siteInfoView}>
                <View style={styles.infoCard}>
                  <Text style={styles.city2}>City</Text>
                  <Text style={styles.pune}>Pune</Text>
                  <View style={styles.rect4}></View>
                  <Text style={styles.address2}>Address</Text>
                  <Text style={styles.pune1}>
                    D1, Xrbia Township, {"\n"}Marunji Nerhe Road,,{"\n"}
                    Hinjewadi 411057
                  </Text>
                  <View style={styles.rect5}></View>
                  <Text style={styles.startDate}>Start Date</Text>
                  <Text style={styles.pune2}>01 Jan 2022</Text>
                  <View style={styles.rect6}></View>
                  <View style={styles.endDateRow}>
                    <Text style={styles.endDate}>End Date</Text>
                    <View style={styles.actionButtonGrop1}>
                      <TouchableOpacity style={styles.actionButton2}>
                        <Text style={styles.setFinish}>Set Finish</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.supervisorInfo}>
                <View style={styles.supervisorInfoContainer}>
                  <Text style={styles.supervisor_name}>Supervisor Name</Text>
                  <Text style={styles.superNameTxt}>Aniket Vaidya</Text>
                  <View style={styles.rect8}></View>
                  <Text style={styles.superContact}>Supervisor Contact</Text>
                  <Text style={styles.superContactTxt}>+918055832283</Text>
                  <View style={styles.rect9}></View>
                  <Text style={styles.address3}>Address</Text>
                  <Text style={styles.text4}>
                    P14, Hinjewadi IT Park,{"\n"}Phase 1, Hinjewadi
                  </Text>
                  <View style={styles.rect10}></View>
                  <View style={styles.supervisorSitesButton}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.superSites}>Sites Assigned</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.otherInfo}>
                <View style={styles.otherInfoContainer}>
                  <Text style={styles.materialCost}>
                    Material Cost for the Site
                  </Text>
                  <Text style={styles.materialAmount}>Amount /-</Text>
                  <View style={styles.divider1}></View>
                  <Text style={styles.workerCostTotal}>
                    Worker Cost Total Paid
                  </Text>
                  <Text style={styles.workerTotalamount}>Amount /-</Text>
                  <View style={styles.divider2}></View>
                  <Text style={styles.extraExpenses}>Extra expenses</Text>
                  <Text style={styles.extraAmount}>Amount /-</Text>
                  <View style={styles.divider3}></View>
                  <Text style={styles.builderCostforsite}>
                    Builder Cost for Site
                  </Text>
                  <Text style={styles.builderAmount}>Amount /-</Text>
                  <View style={styles.divider4}></View>
                  <Text style={styles.workerPaidTill}>
                    Worker Paid Till Date
                  </Text>
                  <Text style={styles.workerAmount}>Amount /-</Text>
                  <View style={styles.divider4}></View>
                  <View style={styles.accountingSuperButton}>
                    <TouchableOpacity style={styles.button2}>
                      <Text style={styles.accounting}>Accounting</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
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
  headerSelectSite1: {
    width: width,
    height: height * 0.08,
    borderRadius: 32,
    flexDirection: "row",
    marginTop: height * 0.02,
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
  siteName1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.033,
    width: width * 0.5,
    textAlign: "center",
    marginLeft: width * 0.1,
    marginTop: -height * 0.015,
    alignSelf: "center",
  },
  headerSideButton1: {
    width: width * 0.15,
    height: height * 0.05,
    borderRadius: 48,
    justifyContent: "center",
    marginLeft: width * 0.07,
    marginTop: height * 0.01,
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.045,
    marginTop: height * 0.0,
    marginLeft: width * 0.03,
  },
  selectSiteMiddle1: {
    width: width,
    height: height * 0.8,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 72,
    marginTop: height * 0.03,
  },
  information: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    fontSize: height * 0.02,
    textAlign: "center",
    marginLeft: width * 0.02,
  },
  selectSiteImages1: {
    width: width,
    height: height * 0.8,
    borderRadius: 61,
    marginTop: height * 0.01,
  },
  selectSiteImages1_contentContainerStyle: {
    height: height * 1.37,
    width: width * 0.91,
    marginLeft: width * 0.05,
  },
  mainContainer: {
    width: width,
    height: height * 1.5,
    borderRadius: 76,
  },
  siteInfoView: {
    width: width * 0.91,
    height: height * 0.37,
    borderRadius: 63,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(54,138,236,1)",
    marginTop: height * 0.02,
    backgroundColor: "rgba(160,231,229,1)",
  },
  infoCard: {
    width: width * 0.91,
    height: height * 0.3,
    marginTop: height * 0,
    marginLeft: width * 0,
  },
  city2: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
    width: width * 0.1,
    height: height * 0.03,
  },
  pune: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.5,
    width: width * 0.5,
    height: height * 0.035,
  },
  rect4: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.01,
    marginLeft: width * 0.1,
  },
  address2: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: height * 0.015,
    marginLeft: width * 0.1,
    width: width * 0.2,
    height: height * 0.03,
  },
  pune1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.5,
    width: width * 0.4,
    height: height * 0.08,
  },
  rect5: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.01,
    marginLeft: width * 0.1,
  },
  startDate: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: height * 0.015,
    marginLeft: width * 0.1,
    width: width * 0.3,
    height: height * 0.03,
  },
  pune2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.5,
    width: width * 0.4,
    height: height * 0.03,
  },
  rect6: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.01,
    marginLeft: width * 0.1,
  },
  endDate: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: height * 0.015,
    marginLeft: width * 0.01,
    width: width * 0.3,
    height: height * 0.03,
  },
  actionButtonGrop1: {
    width: width * 0.25,
    height: height * 0.05,
    marginLeft: width * 0.2,
    marginTop: height * 0.0,
  },
  actionButton2: {
    width: width * 0.25,
    height: height * 0.05,
    backgroundColor: "rgba(54,138,236,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    justifyContent: "center",
    marginTop: height * 0.0,
  },
  setFinish: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.014,
    alignSelf: "center",
  },
  endDateRow: {
    height: height * 0.05,
    width: width * 0.8,
    flexDirection: "row",
    marginTop: height * 0.02,
    marginLeft: width * 0.09,
  },
  supervisorInfo: {
    width: width * 0.91,
    height: height * 0.37,
    borderRadius: 63,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(54,138,236,1)",
    marginTop: height * 0.02,
    backgroundColor: "rgba(160,231,229,1)",
  },
  supervisorInfoContainer: {
    width: width * 0.91,
    height: height * 0.3,
    marginTop: height * 0,
    marginLeft: width * 0,
  },
  supervisor_name: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
    width: width * 0.3,
    height: height * 0.03,
  },
  superNameTxt: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.55,
    width: width * 0.4,
    height: height * 0.03,
  },
  rect8: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.01,
    marginLeft: width * 0.1,
  },
  superContact: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
    width: width * 0.35,
    height: height * 0.03,
  },
  superContactTxt: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.55,
    width: width * 0.4,
    height: height * 0.03,
  },
  rect9: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.01,
    marginLeft: width * 0.1,
  },
  address3: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
    width: width * 0.35,
    height: height * 0.03,
  },
  text4: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.55,
    width: width * 0.35,
    height: height * 0.08,
  },
  rect10: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.001,
    marginLeft: width * 0.1,
  },
  supervisorSitesButton: {
    width: width * 0.27,
    height: height * 0.05,
    marginLeft: width * 0.6,
    marginTop: height * 0.03,
  },
  button: {
    width: width * 0.27,
    height: height * 0.05,
    backgroundColor: "rgba(54,138,236,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    justifyContent: "center",
    marginTop: height * 0.0,
  },
  superSites: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.014,
    alignSelf: "center",
  },
  otherInfo: {
    width: width * 0.91,
    height: height * 0.5,
    borderRadius: 63,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(54,138,236,1)",
    marginTop: height * 0.02,
    backgroundColor: "rgba(160,231,229,1)",
  },
  otherInfoContainer: {
    width: width * 0.91,
    height: height * 0.3,
    marginTop: height * 0,
    marginLeft: width * 0,
  },
  materialCost: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.014,
    marginTop: height * 0.05,
    marginLeft: width * 0.1,
    width: width * 0.39,
    height: height * 0.03,
  },
  materialAmount: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.6,
    width: width * 0.4,
    height: height * 0.03,
  },
  divider1: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.005,
    marginLeft: width * 0.1,
  },
  workerCostTotal: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.014,
    marginTop: height * 0.03,
    marginLeft: width * 0.1,
    width: width * 0.39,
    height: height * 0.03,
  },
  workerTotalamount: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.6,
    width: width * 0.4,
    height: height * 0.03,
  },
  divider2: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.005,
    marginLeft: width * 0.1,
  },
  extraExpenses: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.014,
    marginTop: height * 0.03,
    marginLeft: width * 0.1,
    width: width * 0.39,
    height: height * 0.03,
  },
  extraAmount: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.6,
    width: width * 0.4,
    height: height * 0.03,
  },
  divider3: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.005,
    marginLeft: width * 0.1,
  },
  builderCostforsite: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.014,
    marginTop: height * 0.03,
    marginLeft: width * 0.1,
    width: width * 0.39,
    height: height * 0.03,
  },
  builderAmount: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.6,
    width: width * 0.4,
    height: height * 0.03,
  },
  divider4: {
    width: width * 0.75,
    height: height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginTop: height * 0.005,
    marginLeft: width * 0.1,
  },
  workerPaidTill: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "left",
    fontSize: height * 0.014,
    marginTop: height * 0.03,
    marginLeft: width * 0.1,
    width: width * 0.39,
    height: height * 0.03,
  },
  workerAmount: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "left",
    fontSize: height * 0.015,
    marginTop: -height * 0.03,
    marginLeft: width * 0.6,
    width: width * 0.4,
    height: height * 0.03,
  },
  accountingSuperButton: {
    width: width * 0.27,
    height: height * 0.05,
    marginLeft: width * 0.6,
    marginTop: height * 0.03,
  },
  button2: {
    width: width * 0.27,
    height: height * 0.05,
    backgroundColor: "rgba(54,138,236,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    justifyContent: "center",
    marginTop: height * 0.0,
  },
  accounting: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.014,
    alignSelf: "center",
  },
  supervisorInfoStack: {
    width: 375,
    height: 344,
    marginTop: 5,
  },
});
