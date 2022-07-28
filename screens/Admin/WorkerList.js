import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../../context";
const { height, width } = Dimensions.get("screen");

export const WorkerList = ({ route, navigation }) => {
  const data = [
    { id: 1, workername: "Aniket Vaidya", workerpic: "" },
    { id: 2, workername: "Ajinkya Vaidya", workerpic: "" },
    { id: 3, workername: "Worker 1", workerpic: "" },
    { id: 4, workername: "Worker 2", workerpic: "" },
    { id: 5, workername: "Worker 3", workerpic: "" },
    { id: 6, workername: "Worker 4", workerpic: "" },
    { id: 7, workername: "Worker 5", workerpic: "" },
    { id: 8, workername: "Worker 6", workerpic: "" },
    { id: 9, workername: "Worker 7", workerpic: "" },
    { id: 10, workername: "Worker 8", workerpic: "" },
    { id: 11, workername: "Worker 9", workerpic: "" },
    { id: 12, workername: "Worker 10", workerpic: "" },
    { id: 13, workername: "Worker 11", workerpic: "" },
    { id: 14, workername: "Worker 12", workerpic: "" },
    { id: 15, workername: "Worker 13", workerpic: "" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.backGroundMain1}>
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
          <Text style={styles.workers}>Worker&#39;s</Text>
          <TouchableOpacity
            style={styles.headerSideButton1}
            onPress={() => {
              alert("Add New Worker. InProgress");
            }}
          >
            <MaterialCommunityIconsIcon
              name="plus"
              style={styles.icon1}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.addSupervisorMiddle1}>
          <Text style={styles.siteName}>Site Name</Text>
          <View style={styles.scrollArea1}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={data}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              //contentContainerStyle={styles.scrollArea_contentContainerStyle}
              renderItem={(item) => (
                <TouchableOpacity style={styles.supervisorCard1}>
                  <TouchableOpacity
                    style={styles.infoButton}
                    onPress={() => {
                      navigation.push("WorkerInformation");
                    }}
                  >
                    <View style={styles.infoBck}>
                      <View style={styles.imageRow}>
                        <Image
                          source={require("../../assets/images/pngkit_construction-worker-png_6980321.png")}
                          resizeMode="contain"
                          style={styles.image}
                        ></Image>
                        <Text style={styles.workerName}>
                          {item.item.workername}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </TouchableOpacity>
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
    justifyContent: "center",
  },
  backGroundMain1: {
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
  workers: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.033,
    textAlign: "center",
    width: width * 0.5,
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
  addSupervisorMiddle1: {
    width: width,
    height: height * 0.8,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 72,
    marginTop: height * 0.03,
  },
  siteName: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    fontSize: height * 0.02,
    textAlign: "center",
    marginLeft: width * 0.02,
  },
  scrollArea1: {
    width: width,
    height: height,
    marginTop: height * 0.0,
    borderRadius: 71,
  },
  scrollArea1_contentContainerStyle: {
    height: height * 1,
    width: width,
  },
  supervisorCard1: {
    width: width * 0.9,
    height: height * 0.1,
    marginLeft: width * 0.045,
    marginTop: height * 0.01,
    borderRadius: 72,
    borderWidth: 5,
    borderColor: "rgba(74,144,226,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.14,
    shadowRadius: 0,
    backgroundColor: "rgba(160,231,229,1)",
  },
  infoButton: {
    width: width * 0.9,
    height: height * 0.1,
    borderRadius: 100,
    marginTop: -height * 0.005,
    marginLeft: -width * 0.01,
  },
  infoBck: {
    width: width * 0.9,
    height: height * 0.1,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(54,138,236,0.59)",
    backgroundColor: "rgba(149,190,239,0.59)",
    flexDirection: "row",
  },
  image: {
    width: width * 0.15,
    height: height * 0.07,
    marginLeft: width * 0.01,
    marginTop: -height * 0.0025,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 17,
  },
  workerName: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.02,
    textAlign: "center",
    marginLeft: width * 0.0,
    marginTop: height * 0.01,
    width: width * 0.6,
    height: height * 0.05,
  },
  imageRow: {
    height: height * 0.07,
    width: width * 0.75,
    flexDirection: "row",
    marginLeft: height * 0.025,
    marginTop: height * 0.013,
  },
});
