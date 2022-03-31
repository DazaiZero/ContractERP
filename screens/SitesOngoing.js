import React, { Component, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../context";
const { height, width } = Dimensions.get("screen");

export const SitesOngoing = ({ route, navigation }) => {
  const ErpAuth = useContext(AuthContext);

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
          <Text style={styles.text3}>Sites Ongoing</Text>
          <TouchableOpacity
            style={styles.headerSideButton1}
            onPress={() => {
              navigation.push("AddSite", { parent: "SiteOng" });
            }}
          >
            <MaterialCommunityIconsIcon
              name="plus"
              style={styles.icon1}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.addSupervisorMiddle1}>
          <View style={styles.scrollArea1}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea1_contentContainerStyle}
            >
              <View style={styles.supervisorCard1}>
                <View style={styles.siteImagesButtonStack}>
                  <TouchableOpacity
                    style={styles.siteImagesButton}
                    onPress={() => {
                      navigation.push("SiteImages");
                    }}
                  >
                    <Image
                      source={require("../assets/images/glassconstruction.jpg")}
                      resizeMode="stretch"
                      style={styles.image2}
                    ></Image>
                  </TouchableOpacity>
                  <View style={styles.citiTagGrp}>
                    <View style={styles.citiTag}>
                      <Text style={styles.pune}>PUNE</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.infoButton}
                    onPress={() => {
                      navigation.push("SiteInformation");
                    }}
                  >
                    <View style={styles.infoBck}>
                      <Text style={styles.siteName}>Site Name</Text>
                      <Text style={styles.address}>
                        P14 , Rajiv Gandhi Infotech Park,{"\n"}Hinjewadi,
                        411057, Pune.
                      </Text>
                      <Text style={styles.supervi}>Supervisor</Text>
                      <View style={styles.aniketVaidyaRow}>
                        <Text style={styles.aniketVaidya}>Aniket Vaidya</Text>
                        <Text style={styles.mob}>8055832283</Text>
                      </View>
                      <View style={styles.startDateRow}>
                        <Text style={styles.startDate}>Start Date</Text>
                        <Text style={styles.startDate1}>01 Jan 2022</Text>
                      </View>
                      {/* <View style={styles.workerPaidAmountColumnRow}>
                        <View style={styles.workerPaidAmountColumn}>
                          <Text style={styles.workerPaidAmount}>
                            Worker Paid Amount
                          </Text>
                          <Text style={styles.builderCost2}>10000</Text>
                        </View>
                        <View style={styles.builderCostColumn}>
                          <Text style={styles.builderCost}>Builder Cost</Text>
                          <Text style={styles.builderCost1}>50000</Text>
                        </View>
                      </View> */}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <TouchableOpacity style={styles.supervisorCard2}>
                <View style={styles.imagesButtonStack}>
                  <TouchableOpacity style={styles.imagesButton}>
                    <Image
                      source={require("../assets/images/viscato-sp-k-office-41.jpg")}
                      resizeMode="stretch"
                      style={styles.image5}
                    ></Image>
                  </TouchableOpacity>
                  <View style={styles.cityTag}>
                    <View style={styles.rect2}>
                      <Text style={styles.pune2}>PUNE</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.siteInfoButton}>
                    <View style={styles.rect3}>
                      <Text style={styles.siteName2}>Site Name</Text>
                      <Text style={styles.text4}>
                        P14 , Rajiv Gandhi Infotech Park,{"\n"}Hinjewadi,
                        411057, Pune.
                      </Text>
                      <Text style={styles.supervisor2}>Supervisor</Text>
                      <View style={styles.aniketVaidya2Row}>
                        <Text style={styles.aniketVaidya2}>Aniket Vaidya</Text>
                        <Text style={styles.text6}>8055832283</Text>
                      </View>
                      <View style={styles.startDate2Row}>
                        <Text style={styles.startDate2}>Start Date</Text>
                        <Text style={styles.text5}>01 Jan 2022</Text>
                      </View>
                      <View style={styles.workerPaidAmount2ColumnRow}>
                        <View style={styles.workerPaidAmount2Column}>
                          <Text style={styles.workerPaidAmount2}>
                            Worker Paid Amount
                          </Text>
                          <Text style={styles.text8}>10000</Text>
                        </View>
                        <View style={styles.rect4}></View>
                        <View style={styles.builderCost3Column}>
                          <Text style={styles.builderCost3}>Builder Cost</Text>
                          <Text style={styles.text7}>50000</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.supervisorCard3}>
                <View style={styles.imagesBtnStack}>
                  <TouchableOpacity style={styles.imagesBtn}>
                    <Image
                      source={require("../assets/images/viscato-sp-k-office-night-view1.jpg")}
                      resizeMode="stretch"
                      style={styles.image6}
                    ></Image>
                  </TouchableOpacity>
                  <View style={styles.rect5}>
                    <View style={styles.rect6}>
                      <Text style={styles.pune3}>PUNE</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.button4}>
                    <View style={styles.rect7}>
                      <Text style={styles.siteName3}>Site Name</Text>
                      <Text style={styles.text9}>
                        P14 , Rajiv Gandhi Infotech Park,{"\n"}Hinjewadi,
                        411057, Pune.
                      </Text>
                      <Text style={styles.supervisor3}>Supervisor</Text>
                      <View style={styles.aniketVaidya3Row}>
                        <Text style={styles.aniketVaidya3}>Aniket Vaidya</Text>
                        <Text style={styles.text11}>8055832283</Text>
                      </View>
                      <View style={styles.startDate3Row}>
                        <Text style={styles.startDate3}>Start Date</Text>
                        <Text style={styles.text10}>01 Jan 2022</Text>
                      </View>
                      <View style={styles.workerPaidAmount3ColumnRow}>
                        <View style={styles.workerPaidAmount3Column}>
                          <Text style={styles.workerPaidAmount3}>
                            Worker Paid Amount
                          </Text>
                          <Text style={styles.text13}>10000</Text>
                        </View>
                        <View style={styles.rect8}></View>
                        <View style={styles.builderCost4Column}>
                          <Text style={styles.builderCost4}>Builder Cost</Text>
                          <Text style={styles.text12}>50000</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity> */}
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
  text3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.033,
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
  addSupervisorMiddle1: {
    width: width,
    height: height * 0.8,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 72,
    marginTop: height * 0.03,
  },
  scrollArea1: {
    width: width,
    height: height,
    marginTop: -height * 0.025,
    borderRadius: 71,
  },
  scrollArea1_contentContainerStyle: {
    height: height,
    width: width,
  },
  supervisorCard1: {
    width: width * 0.98,
    height: height * 0.25,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 21,
    //borderWidth: 5,
    //borderColor: "rgba(74,144,226,1)",
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
  siteImagesButton: {
    top: 0,
    left: 0,
    borderRadius: 21,
    width: width * 0.95,
    height: height * 0.25,
    position: "absolute",
    borderWidth: 0,
    borderColor: "#000000",
  },
  image2: {
    borderRadius: 21,
    width: width * 0.98,
    height: height * 0.25,
  },
  citiTagGrp: {
    top: height * 0.01,
    left: -width * 0.0,
    width: width * 0.3,
    height: height * 0.03,
    position: "absolute",
  },
  citiTag: {
    width: width * 0.3,
    height: height * 0.03,
    backgroundColor: "rgba(149,190,239,0.59)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,0.59)",
  },
  pune: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.015,
    textAlign: "center",
    alignSelf: "center",
    marginTop: height * 0.001,
    marginLeft: width * 0.0,
    height: height * 0.03,
    width: width * 0.3,
  },
  infoButton: {
    borderRadius: 21,
    top: 0,
    left: width * 0.4,
    width: width * 0.53,
    height: height * 0.25,
    position: "absolute",
  },
  infoBck: {
    width: width * 0.565,
    height: height * 0.25,
    top: 0,
    left: width * 0.015,
    borderRadius: 21,
    borderColor: "rgba(54,138,236,0.59)",
    backgroundColor: "rgba(149,190,239,0.59)",
  },
  siteName: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.02,
    textAlign: "center",
    marginTop: height * 0.02,
    marginLeft: 0,
    height: height * 0.03,
    width: width * 0.5,
  },
  address: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.014,
    textAlign: "center",
    marginTop: height * 0.01,
    marginLeft: width * 0.0,
    height: height * 0.05,
    width: width * 0.54,
  },
  supervi: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.014,
    textAlign: "center",
    marginTop: -height * 0.001,
    marginLeft: width * 0.0,
    height: height * 0.025,
    width: width * 0.54,
  },
  aniketVaidya: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.0125,
    textAlign: "left",
    marginTop: -height * 0.01,
    marginLeft: width * 0.01,
    height: height * 0.025,
    width: width * 0.54,
  },
  mob: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.0125,
    textAlign: "left",
    marginTop: -height * 0.01,
    marginLeft: -width * 0.2,
    height: height * 0.025,
    width: width * 0.54,
  },
  aniketVaidyaRow: {
    height: height * 0.011,
    flexDirection: "row",
    marginTop: height * 0.001,
    marginLeft: width * 0.0,
  },
  startDate: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.01,
    textAlign: "left",
    marginTop: height * 0.001,
    marginLeft: width * 0.14,
  },
  startDate1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.01,
    textAlign: "left",
    marginTop: height * 0.001,
    marginLeft: width * 0.04,
  },
  startDateRow: {
    height: height * 0.02,
    width: width * 0.5,
    flexDirection: "row",
    marginTop: height * 0.01,
    marginLeft: width * 0.0,
  },
  workerPaidAmount: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  builderCost2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    textAlign: "left",
    marginTop: 7,
    marginLeft: 20,
  },
  workerPaidAmountColumn: {
    width: 74,
    marginTop: 7,
    marginBottom: 49,
  },
  devider: {
    width: 4,
    height: 86,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 100,
    marginLeft: 23,
  },
  builderCost: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  builderCost1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    textAlign: "left",
    marginTop: 7,
    marginLeft: 5,
  },
  builderCostColumn: {
    width: 44,
    marginLeft: 9,
    marginTop: 7,
    marginBottom: 49,
  },
  workerPaidAmountColumnRow: {
    height: 86,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 21,
    marginRight: 145,
  },
  siteImagesButtonStack: {
    //borderRadius: 72,
    width: width * 0.95,
    height: height * 0.25,
    marginTop: -height * 0.0,
    marginLeft: -width * 0.0,
  },
  supervisorCard2: {
    width: 375,
    height: 196,
    backgroundColor: "rgba(238,237,231,1)",
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
    marginTop: 8,
  },
  imagesButton: {
    top: 1,
    left: 5,
    width: 374,
    height: 190,
    position: "absolute",
    borderWidth: 0,
    borderColor: "#000000",
  },
  image5: {
    width: 374,
    height: 190,
  },
  cityTag: {
    top: 16,
    left: 0,
    width: 90,
    height: 21,
    position: "absolute",
  },
  rect2: {
    width: 90,
    height: 21,
    backgroundColor: "rgba(149,190,239,0.59)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,0.59)",
  },
  pune2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    textAlign: "left",
    marginTop: 5,
    marginLeft: 46,
  },
  siteInfoButton: {
    top: 0,
    left: 171,
    width: 347,
    height: 196,
    position: "absolute",
    borderRadius: 100,
  },
  rect3: {
    width: 320,
    height: 196,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(54,138,236,0.59)",
    backgroundColor: "rgba(149,190,239,0.59)",
  },
  siteName2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    textAlign: "left",
    marginTop: 23,
    marginLeft: 45,
  },
  text4: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
    marginTop: 4,
    marginLeft: 45,
  },
  supervisor2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    textAlign: "left",
    marginTop: 2,
    marginLeft: 45,
  },
  aniketVaidya2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  text6: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
    marginLeft: 11,
  },
  aniketVaidya2Row: {
    height: 10,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 45,
    marginRight: 168,
  },
  startDate2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  text5: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
    marginLeft: 25,
  },
  startDate2Row: {
    height: 10,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 45,
    marginRight: 168,
  },
  workerPaidAmount2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  text8: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    textAlign: "left",
    marginTop: 7,
    marginLeft: 20,
  },
  workerPaidAmount2Column: {
    width: 74,
    marginTop: 7,
    marginBottom: 49,
  },
  rect4: {
    width: 4,
    height: 86,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 100,
    marginLeft: 23,
  },
  builderCost3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  text7: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    textAlign: "left",
    marginTop: 7,
    marginLeft: 5,
  },
  builderCost3Column: {
    width: 44,
    marginLeft: 9,
    marginTop: 7,
    marginBottom: 49,
  },
  workerPaidAmount2ColumnRow: {
    height: 86,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 21,
    marginRight: 145,
  },
  imagesButtonStack: {
    width: 518,
    height: 196,
    marginTop: -5,
    marginLeft: -9,
  },
  supervisorCard3: {
    width: 375,
    height: 196,
    backgroundColor: "rgba(238,237,231,1)",
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
    marginTop: 10,
  },
  imagesBtn: {
    top: 1,
    left: 5,
    width: 374,
    height: 190,
    position: "absolute",
    borderWidth: 0,
    borderColor: "#000000",
  },
  image6: {
    width: 374,
    height: 195,
  },
  rect5: {
    top: 16,
    left: 0,
    width: 90,
    height: 21,
    position: "absolute",
  },
  rect6: {
    width: 90,
    height: 21,
    backgroundColor: "rgba(149,190,239,0.59)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,0.59)",
  },
  pune3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    textAlign: "left",
    marginTop: 5,
    marginLeft: 46,
  },
  button4: {
    top: 0,
    left: 171,
    width: 347,
    height: 196,
    position: "absolute",
    borderRadius: 100,
  },
  rect7: {
    width: 320,
    height: 196,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(54,138,236,0.59)",
    backgroundColor: "rgba(149,190,239,0.59)",
  },
  siteName3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    textAlign: "left",
    marginTop: 23,
    marginLeft: 45,
  },
  text9: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
    marginTop: 4,
    marginLeft: 45,
  },
  supervisor3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    textAlign: "left",
    marginTop: 2,
    marginLeft: 45,
  },
  aniketVaidya3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  text11: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
    marginLeft: 11,
  },
  aniketVaidya3Row: {
    height: 10,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 45,
    marginRight: 168,
  },
  startDate3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  text10: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
    marginLeft: 25,
  },
  startDate3Row: {
    height: 10,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 45,
    marginRight: 168,
  },
  workerPaidAmount3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  text13: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    textAlign: "left",
    marginTop: 7,
    marginLeft: 20,
  },
  workerPaidAmount3Column: {
    width: 74,
    marginTop: 7,
    marginBottom: 49,
  },
  rect8: {
    width: 4,
    height: 86,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 100,
    marginLeft: 23,
  },
  builderCost4: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  text12: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    textAlign: "left",
    marginTop: 7,
    marginLeft: 5,
  },
  builderCost4Column: {
    width: 44,
    marginLeft: 9,
    marginTop: 7,
    marginBottom: 49,
  },
  workerPaidAmount3ColumnRow: {
    height: 86,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 21,
    marginRight: 145,
  },
  imagesBtnStack: {
    width: 518,
    height: 196,
    marginTop: -5,
    marginLeft: -9,
  },
});
