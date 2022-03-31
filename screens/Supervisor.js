import React, { Component, useState, useContext } from "react";
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
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../context";
const { height, width } = Dimensions.get("screen");

export const Supervisor = ({ route, navigation }) => {
  const ErpAuth = useContext(AuthContext);
  const data = [
    {
      id: 1,
      name: "Aniket Vaidya",
      profilePic: "",
      contact: "+918055832283",
      address: "Nano Spaces, Ravet, Pune 411043",
    },
    {
      id: 2,
      name: "Ajinkya Vaidya",
      profilePic: "",
      contact: "+918055832283",
      address: "Nano Spaces, Akurdi, Pune 411043",
    },
    {
      id: 3,
      name: "Swapnil Apotikar",
      profilePic: "",
      contact: "+918055832283",
      address: "GK Asociate, Punawale, Pune 411012",
    },
    {
      id: 4,
      name: "Shripati Ban",
      profilePic: "",
      contact: "+918055832283",
      address: "Nigdi, Pune.",
    },
    {
      id: 5,
      name: "Piyush Ambhore",
      profilePic: "",
      contact: "+918055832283",
      address: "Mukai Chowk, Ravet, Pune.",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.backGroundMain}>
        <View style={styles.headerCommon}>
          <TouchableOpacity
            style={styles.headerbackButton}
            onPress={() => {
              navigation.push("Home");
            }}
          >
            <IoniconsIcon
              name="ios-arrow-back"
              style={styles.headerBackIcon}
            ></IoniconsIcon>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Supervisor</Text>
          <TouchableOpacity
            style={styles.headerSideButton}
            onPress={() => {
              navigation.push("AddSupervisor");
            }}
          >
            <MaterialCommunityIconsIcon
              name="plus"
              style={styles.icon}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.addSupervisorMiddle}>
          <View style={styles.scrollArea}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={data}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              //contentContainerStyle={styles.scrollArea_contentContainerStyle}
              renderItem={(item) => (
                <View style={styles.supervisorCard}>
                  <View style={styles.profilePicContainerRow}>
                    <View style={styles.profilePicContainer}>
                      <Image
                        source={require("../assets/images/PinClipart.com_fire-truck-ladder-clipart_841840.png")}
                        resizeMode="contain"
                        style={styles.profilePic}
                      ></Image>
                    </View>
                    <View style={styles.infoPart}>
                      <View style={styles.ajinkyaVaidyaColumn}>
                        <Text style={styles.ajinkyaVaidya}>
                          {item.item.name}
                        </Text>
                        <Text style={styles.nobileNoText}>
                          {item.item.contact}
                        </Text>
                        <Text style={styles.loremIpsum}>
                          {item.item.address}
                        </Text>
                        <View style={styles.actionButtonGropRow}>
                          <View style={styles.actionButtonGrop}>
                            <TouchableOpacity style={styles.actionButton}>
                              <Text style={styles.actionbuttontext}>Sites</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.actionButton2Grope}>
                            <TouchableOpacity style={styles.actionButton2}>
                              <Text style={styles.actionbuttontext1}>Edit</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            ></FlatList>
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
  headerCommon: {
    width: width,
    height: height * 0.08,
    borderRadius: 32,
    flexDirection: "row",
    marginTop: height * 0.05,
  },
  headerbackButton: {
    width: width * 0.2,
    height: height * 0.05,
    borderRadius: 20,
    marginLeft: -width * 0.05,
    marginTop: height * 0.01,
  },
  headerBackIcon: {
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.045,
    marginTop: height * 0.0,
    marginLeft: width * 0.1,
  },
  headerTitle: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.033,
    textAlign: "center",
    width: width * 0.5,
    marginLeft: width * 0.1,
    marginTop: -height * 0.015,
    alignSelf: "center",
  },
  headerSideButton: {
    width: width * 0.15,
    height: height * 0.05,
    borderRadius: 48,
    justifyContent: "center",
    marginLeft: width * 0.07,
    marginTop: height * 0.01,
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.045,
    marginTop: height * 0.0,
    marginLeft: width * 0.03,
  },
  addSupervisorMiddle: {
    width: width,
    height: height * 0.8,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 72,
    marginTop: height * 0.03,
  },
  scrollArea: {
    width: width,
    marginTop: -height * 0.025,
    borderRadius: 71,
  },
  scrollArea_contentContainerStyle: {
    height: height * 1,
    width: width,
  },
  supervisorCard: {
    width: width * 0.98,
    height: height * 0.25,
    marginTop: height * 0.01,
    backgroundColor: "#77F1FF",
    borderRadius: 21,
    borderWidth: 5,
    borderColor: "rgba(160,231,229,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.14,
    shadowRadius: 0,
    alignSelf: "center",
  },
  profilePicContainer: {
    width: width * 0.4,
    height: height * 0.2,
    marginTop: height * 0.02,
    borderWidth: 0,
    borderColor: "#000000",
  },
  profilePic: {
    width: width * 0.25,
    height: height * 0.125,
    marginTop: height * 0.035,
    marginLeft: width * 0.05,
  },
  infoPart: {
    width: width * 0.55,
    height: height * 0.18,
    borderRadius: 57,
    marginTop: height * 0.0,
  },
  ajinkyaVaidya: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: height * 0.021,
    textAlign: "center",
    marginLeft: -width * 0.1,
    width: width * 0.5,
    height: height * 0.04,
  },
  nobileNoText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: height * 0.01,
    marginLeft: -width * 0.05,
    fontSize: height * 0.015,
    textAlign: "center",
    width: width * 0.4,
    height: height * 0.04,
  },
  actionButtonGrop: {
    width: width * 0.25,
    height: height * 0.05,
    marginLeft: width * 0,
    marginTop: height * 0.0,
  },
  actionButton: {
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
  actionbuttontext: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.014,
    alignSelf: "center",
  },
  actionButton2Grope: {
    width: width * 0.25,
    height: height * 0.05,
    marginLeft: width * 0,
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
  actionbuttontext1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.014,
    alignSelf: "center",
  },
  actionButtonGropRow: {
    height: height * 0.05,
    width: width * 0.55,
    flexDirection: "row",
    marginTop: height * 0.0,
    marginLeft: -width * 0.1,
    justifyContent: "space-between",
  },
  ajinkyaVaidyaColumn: {
    marginTop: 25,
    marginLeft: 33,
    marginRight: 71,
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: height * 0.0,
    marginLeft: -width * 0.09,
    fontSize: height * 0.015,
    textAlign: "center",
    width: width * 0.5,
    height: height * 0.05,
  },
  profilePicContainerRow: {
    flexDirection: "row",
    flex: 1,
  },
  supervisorCard1: {
    width: 375,
    height: 192,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 72,
    borderWidth: 5,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
    marginTop: 9,
  },
  profilePicContainer1: {
    width: 134,
    height: 192,
    borderWidth: 0,
    borderColor: "#000000",
  },
  profilePic2: {
    width: 130,
    height: 192,
    marginTop: 1,
    marginLeft: 4,
  },
  infoPart1: {
    width: 241,
    height: 187,
    borderRadius: 57,
    marginTop: 3,
  },
  aniketVaidya: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginLeft: 18,
  },
  nobileNoText1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 8,
    marginLeft: 17,
  },
  actionButtonGrop1: {
    width: 56,
    height: 31,
  },
  actionButton3: {
    width: 56,
    height: 31,
    backgroundColor: "rgba(38,32,46,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
  },
  actionbuttontext2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 11,
  },
  actionButton4: {
    width: 56,
    height: 31,
    marginLeft: 11,
  },
  actionButton5: {
    width: 56,
    height: 31,
    backgroundColor: "rgba(38,32,46,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
  },
  actionbuttontext3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  actionButtonGrop1Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 68,
    marginRight: 6,
  },
  aniketVaidyaColumn: {
    marginTop: 25,
    marginLeft: 33,
    marginRight: 79,
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 50,
  },
  aniketVaidyaColumnFiller: {
    flex: 1,
    justifyContent: "center",
  },
  profilePicContainer1Row: {
    height: 192,
    flexDirection: "row",
    flex: 1,
    marginRight: 4,
    marginLeft: -4,
    marginTop: -7,
  },
  supervisorCard2: {
    width: 375,
    height: 192,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 72,
    borderWidth: 5,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
    marginTop: 7,
  },
  profilePicContainer2: {
    width: 134,
    height: 192,
    borderWidth: 0,
    borderColor: "#000000",
  },
  profilePic3: {
    width: 130,
    height: 192,
    marginTop: 1,
    marginLeft: 4,
  },
  infoPart2: {
    width: 241,
    height: 187,
    borderRadius: 57,
    marginTop: 3,
  },
  shripatiBan: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginLeft: 18,
  },
  nobileNoText2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 8,
    marginLeft: 17,
  },
  actionButtonGrop2: {
    width: 56,
    height: 31,
  },
  actionButton6: {
    width: 56,
    height: 31,
    backgroundColor: "rgba(38,32,46,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
  },
  actionbuttontext4: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 11,
  },
  actionButton7: {
    width: 56,
    height: 31,
    marginLeft: 11,
  },
  actionButton8: {
    width: 56,
    height: 31,
    backgroundColor: "rgba(38,32,46,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
  },
  actionbuttontext5: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  actionButtonGrop2Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 68,
  },
  shripatiBanColumn: {
    marginTop: 25,
    marginLeft: 33,
    marginRight: 85,
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 50,
  },
  shripatiBanColumnFiller: {
    flex: 1,
    justifyContent: "center",
  },
  profilePicContainer2Row: {
    height: 192,
    flexDirection: "row",
    flex: 1,
    marginRight: 4,
    marginLeft: -4,
    marginTop: -7,
  },
  supervisorCard3: {
    width: 375,
    height: 192,
    backgroundColor: "rgba(238,237,231,1)",
    borderRadius: 72,
    borderWidth: 5,
    borderColor: "rgba(74,144,226,1)",
    flexDirection: "row",
    marginTop: 8,
  },
  profilePicContainer3: {
    width: 134,
    height: 192,
    borderWidth: 0,
    borderColor: "#000000",
  },
  profilePic4: {
    width: 130,
    height: 192,
    marginTop: 1,
    marginLeft: 4,
  },
  infoPart3: {
    width: 241,
    height: 187,
    borderRadius: 57,
    marginTop: 3,
  },
  swapnilApotikar: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginLeft: 18,
  },
  nobileNoText3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 8,
    marginLeft: 17,
  },
  actionButtonGrop3: {
    width: 56,
    height: 31,
  },
  actionButton9: {
    width: 56,
    height: 31,
    backgroundColor: "rgba(38,32,46,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
  },
  actionbuttontext6: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 11,
  },
  actionButton10: {
    width: 56,
    height: 31,
    marginLeft: 11,
  },
  actionButton11: {
    width: 56,
    height: 31,
    backgroundColor: "rgba(38,32,46,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
  },
  actionbuttontext7: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  actionButtonGrop3Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 68,
    marginRight: 32,
  },
  swapnilApotikarColumn: {
    marginTop: 25,
    marginLeft: 33,
    marginRight: 53,
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 50,
  },
  swapnilApotikarColumnFiller: {
    flex: 1,
    justifyContent: "center",
  },
  profilePicContainer3Row: {
    height: 192,
    flexDirection: "row",
    flex: 1,
    marginRight: 4,
    marginLeft: -4,
    marginTop: -7,
  },
});
