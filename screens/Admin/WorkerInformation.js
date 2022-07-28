import React, { Component, useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../context";
const { height, width } = Dimensions.get("screen");

export const WorkerInformation = ({ route, navigation }) => {
  const documentData = [
    { id: 1, docName: "Adhar Card", docSource: "" },
    { id: 2, docName: "Pan Card", docSource: "" },
    { id: 3, docName: "Rashan Card", docSource: "" },
    { id: 4, docName: "Driving Licence", docSource: "" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerSelectSite1}>
        <TouchableOpacity
          style={styles.headerbackButton1}
          onPress={() => {
            navigation.push("WorkerList");
          }}
        >
          <Icon name="ios-arrow-back" style={styles.headerBackIcon1}></Icon>
        </TouchableOpacity>
        <Text style={styles.workerName}>Worker Name</Text>
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
                <View style={styles.infoCardStack}>
                  <View style={styles.infoCard}>
                    <Text style={styles.address2}>Address</Text>
                    <Text style={styles.pune1}>
                      D1, Xrbia Township, {"\n"}Marunji Nerhe Road,,{"\n"}
                      Hinjewadi 411057
                    </Text>
                    <View style={styles.rect5}></View>
                    <Text style={styles.startDate}>Start Date</Text>
                    <Text style={styles.pune2}>01 Jan 2022</Text>
                    <View style={styles.rect6}></View>
                  </View>
                  <Image
                    source={require("../../assets/images/PinClipart.com_fire-truck-ladder-clipart_841840.png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                </View>
              </View>
              <View style={styles.otherInfo}>
                <View style={styles.otherInfoContainer}>
                  <Text style={styles.toBePayableAmount}>
                    To Be Payable Amount
                  </Text>
                  <Text style={styles.materialAmount}>Amount /-</Text>
                  <View style={styles.divider1}></View>
                  <Text style={styles.totalPaidAmount}>Total Paid Amount</Text>
                  <Text style={styles.workerTotalamount}>Amount /-</Text>
                  <View style={styles.divider2}></View>
                  <Text style={styles.totalAttendedDays}>
                    Total Attended Days
                  </Text>
                  <Text style={styles.extraAmount}>Amount /-</Text>
                  <View style={styles.divider3}></View>
                  <Text style={styles.costPerDay}>Cost Per Day</Text>
                  <Text style={styles.builderAmount}>Amount /-</Text>
                  <View style={styles.divider4}></View>
                </View>
              </View>
              <View style={styles.scrollArea}>
                <ScrollView
                  horizontal={true}
                  contentContainerStyle={
                    styles.scrollArea_contentContainerStyle
                  }
                  showsHorizontalScrollIndicator={false}
                >
                  {documentData.map((item, key) => (
                    <View style={styles.buttonRow} key={key}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          alert("Worker Document Image. InProgress");
                        }}
                      >
                        <Image
                          source={require("../../assets/images/pngkit_document-icon-png_8621313.png")}
                          resizeMode="contain"
                          style={styles.image2}
                        ></Image>
                      </TouchableOpacity>
                      <Text style={styles.documentTxt}>{item.docName}</Text>
                    </View>
                  ))}
                </ScrollView>
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
  workerName: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.033,
    width: width * 0.5,
    textAlign: "center",
    marginLeft: width * 0.1,
    marginTop: -height * 0.015,
    alignSelf: "center",
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
    height: height * 0.75,
    borderRadius: 61,
    marginTop: height * 0.01,
  },
  selectSiteImages1_contentContainerStyle: {
    height: height * 1.1,
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
    height: height * 0.34,
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
    marginTop: height * 0.008,
    backgroundColor: "rgba(160,231,229,1)",
  },
  infoCard: {
    top: height * 0.12,
    left: 0,
    width: width * 0.9,
    height: height * 0.22,
    position: "absolute",
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
  image: {
    top: height * 0.025,
    left: width * 0.1,
    width: width * 0.2,
    height: height * 0.09,
    position: "absolute",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 15,
  },
  infoCardStack: {
    width: width * 0.91,
    height: height * 0.3,
    marginTop: height * 0,
    marginLeft: width * 0,
  },
  otherInfo: {
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
  otherInfoContainer: {
    width: width * 0.91,
    height: height * 0.3,
    marginTop: height * 0,
    marginLeft: width * 0,
  },
  toBePayableAmount: {
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
  totalPaidAmount: {
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
  totalAttendedDays: {
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
  costPerDay: {
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
  scrollArea: {
    width: width * 0.91,
    height: height * 0.3,
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
  scrollArea_contentContainerStyle: {
    flexWrap: "wrap",
  },
  button: {
    width: width * 0.35,
    height: height * 0.16,
    marginTop: height * 0.035,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 40,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
  },
  image2: {
    width: width * 0.15,
    height: height * 0.1,
    marginTop: height * 0.025,
    marginLeft: width * 0.09,
  },
  buttonRow: {
    height: 155,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 16,
    marginRight: 13,
  },
  documentTxt: {
    fontFamily: "roboto-700",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
    fontSize: height * 0.014,
    marginTop: height * 0.21,
    marginLeft: -width * 0.35,
    width: width * 0.35,
    height: height * 0.03,
  },
});
