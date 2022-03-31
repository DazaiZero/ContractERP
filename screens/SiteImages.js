import React, { Component, useContext } from "react";
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

export const SiteImages = ({ route, navigation }) => {
  const { parent } = route.params;
  const ErpAuth = useContext(AuthContext);
  const ImageList = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerSelectSite}>
        <TouchableOpacity
          style={styles.headerbackButton1}
          onPress={() => {
            if (parent == "Home") navigation.push("Home");
            else navigation.push("SiteInformation");
          }}
        >
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.headerBackIcon1}
          ></IoniconsIcon>
        </TouchableOpacity>
        <Text style={styles.siteName4}>Site Name</Text>
        <TouchableOpacity style={styles.headerSideButton1}>
          <MaterialCommunityIconsIcon
            name="information-outline"
            style={styles.icon1}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.selectSiteMiddle}>
        <Text style={styles.images2}>Images</Text>
        <View style={styles.selectSiteImages}>
          <FlatList
            horizontal={false}
            keyExtractor={(item) => item.id}
            data={ImageList}
            numColumns={2}
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            /* contentContainerStyle={
              styles.selectSiteImages_contentContainerStyle
            } */
            columnWrapperStyle={{
              justifyContent: "space-between",
              margin: 5,
            }}
            renderItem={(item) => (
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                  <Image
                    source={require("../assets/images/viscato-sp-k-office-42.jpg")}
                    resizeMode="cover"
                    style={styles.image3}
                  ></Image>
                </TouchableOpacity>
              </View>
            )}
          ></FlatList>
        </View>
        <Text style={styles.loremIpsum}>Start Date 01 Jan 2022</Text>
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
  headerSelectSite: {
    width: width,
    height: height * 0.08,
    borderRadius: 32,
    flexDirection: "row",
    marginTop: height * 0.01,
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
  siteName4: {
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
  selectSiteMiddle: {
    width: width,
    height: height * 0.8,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 72,
    marginTop: height * 0.03,
  },
  images2: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    fontSize: height * 0.02,
    textAlign: "center",
    marginLeft: width * 0.02,
  },
  selectSiteImages: {
    width: width,
    height: height * 0.7,
    borderRadius: 62,
    marginTop: height * 0.01,
  },
  selectSiteImages_contentContainerStyle: {
    height: height * 1.37,
    width: width * 0.91,
    marginLeft: width * 0.05,
  },
  button: {
    width: width * 0.44,
    height: height * 0.22,
    backgroundColor: "#E6E6E6",
    borderRadius: 44,
    top: height * 0.0,
    marginTop: 0,
  },
  image3: {
    width: width * 0.44,
    height: height * 0.22,
    borderRadius: 44,
  },
  rect1: {
    width: 176,
    height: 195,
    backgroundColor: "#E6E6E6",
    borderRadius: 33,
    marginLeft: 4,
  },
  buttonRow: {
    height: height * 0.22,
    flexDirection: "row",
    marginTop: height * 0.0,
    marginLeft: width * 0.02,
    marginRight: width * 0.02,
  },
  rect2: {
    width: 176,
    height: 195,
    backgroundColor: "#E6E6E6",
    borderRadius: 33,
  },
  loremIpsum: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
    width: width * 0.5,
    height: height * 0.05,
    fontSize: height * 0.015,
    marginTop: height * 0.75,
    marginLeft: width * 0.25,
  },
});
