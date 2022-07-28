import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
const { height, width } = Dimensions.get("screen");

export const MaterialType = ({ route, navigation }) => {
  const data = [
    { Name: "Material 1", id: "1" },
    { Name: "Material 2", id: "2" },
    { Name: "Material 3", id: "3" },
    { Name: "Material 4", id: "4" },
    { Name: "Material 5", id: "5" },
    { Name: "Material 6", id: "6" },
    { Name: "Material 7", id: "7" },
    { Name: "Material 8", id: "8" },
  ];
  return (
    <View style={styles.container}>
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
        <Text style={styles.headerTitle}>Material Type</Text>
        <TouchableOpacity
          style={styles.headerSideButton}
          onPress={() => {
            navigation.push("MaterialEntry");
          }}
        >
          <MaterialCommunityIconsIcon
            name="plus"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.workersList}>
        <FlatList
          horizontal={false}
          keyExtractor={(item) => item.id}
          data={data}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          //contentContainerStyle={styles.workersList_contentContainerStyle}
          renderItem={(item) => (
            <View style={styles.rect8}>
              <View style={styles.workrNameRow}>
                <View style={styles.workrName}>
                  <Text style={styles.materialName}>{item.item.Name}</Text>
                </View>
                <TouchableOpacity style={styles.absent}>
                  <Text style={styles.a2}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></FlatList>
      </View>

      <View style={styles.shareGrpRow}>
        <TouchableOpacity style={styles.shareGrp}>
          <Text style={styles.share}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveGrpButton}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerCommon: {
    width: width,
    height: height * 0.08,
    borderRadius: 32,
    flexDirection: "row",
    marginTop: height * 0.01,
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
    width: width * 0.5,
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
  container: {
    flex: 1,
    backgroundColor: "rgba(74,144,226,1)",
  },
  workersList: {
    width: width,
    height: height * 0.72,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 20,
    marginTop: height * 0.02,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "#000000",
  },
  workersList_contentContainerStyle: {
    width: width,
    height: height * 0.55,
  },
  rect8: {
    width: width * 0.95,
    height: height * 0.1,
    backgroundColor: "rgba(85,237,203,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    flexDirection: "row",
    marginTop: height * 0.03,
    marginLeft: width * 0.0,
    alignSelf: "center",
  },
  workrName: {
    width: width * 0.75,
    height: height * 0.06,
    marginTop: height * 0.01,
    marginLeft: width * 0.02,
    backgroundColor: "#E6E6E6",
    borderRadius: 31,
  },
  materialName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: width * 0.05,
    marginTop: height * 0.01,
    marginLeft: width * 0.06,
    width: width * 0.6,
    height: height * 0.04,
  },
  absent: {
    width: width * 0.15,
    height: height * 0.05,
    backgroundColor: "rgba(230,80,80,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: width * 0.01,
    marginTop: height * 0.015,
  },
  a2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: width * 0.03,
  },
  workrNameRow: {
    height: height * 0.08,
    flexDirection: "row",
    flex: 1,
    marginLeft: width * 0.0,
    marginTop: height * 0.01,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 73,
    marginTop: 7,
  },
  button: {
    width: 39,
    height: 37,
    marginLeft: 64,
    marginTop: 4,
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginTop: -3,
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -674,
    marginRight: 9,
  },
  shareGrp: {
    width: width * 0.3,
    height: height * 0.05,
    marginLeft: width * 0.13,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    borderRadius: 32,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  share: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: width * 0.04,
  },
  saveGrpButton: {
    width: width * 0.3,
    height: height * 0.05,
    marginLeft: width * 0.13,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    borderRadius: 32,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  save: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: width * 0.04,
  },
  shareGrpRow: {
    height: height * 0.06,
    width: width,
    flexDirection: "row",
    marginTop: height * 0.01,
    marginLeft: 0,
  },
});
