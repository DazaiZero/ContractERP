import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Switch,
  ScrollView,
  Image,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export const ListSites = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.backGroundMain1}>
        <View style={styles.headerCommon1}>
          <TouchableOpacity style={styles.headerbackButton1}>
            <IoniconsIcon
              name="ios-arrow-back"
              style={styles.headerBackIcon1}
            ></IoniconsIcon>
          </TouchableOpacity>
          <Text style={styles.allSite}>All Site</Text>
          <TouchableOpacity style={styles.headerSideButton1}>
            <MaterialCommunityIconsIcon
              name="plus"
              style={styles.icon1}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        </View>
        <View style={styles.addSupervisorMiddle1}>
          <View style={styles.listCompletedSitesRow}>
            <Text style={styles.listCompletedSites}>List Completed Sites</Text>
            <Switch
              value={false}
              trackColor={{
                true: "rgba(54,138,236,1)",
                false: "rgba(255,255,255,1)",
              }}
              style={styles.switch}
            ></Switch>
          </View>
          <View style={styles.scrollArea1}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea1_contentContainerStyle}
            >
              <TouchableOpacity style={styles.supervisorCard1}>
                <View style={styles.siteImagesButtonStack}>
                  <TouchableOpacity style={styles.siteImagesButton}>
                    <Image
                      source={require("../../assets/images/glassconstruction.jpg")}
                      resizeMode="stretch"
                      style={styles.image2}
                    ></Image>
                  </TouchableOpacity>
                  <View style={styles.citiTagGrp}>
                    <View style={styles.citiTag}>
                      <Text style={styles.pune}>PUNE</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.infoButton}>
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
                      <View style={styles.workerPaidAmountColumnRow}>
                        <View style={styles.workerPaidAmountColumn}>
                          <Text style={styles.workerPaidAmount}>
                            Worker Paid Amount
                          </Text>
                          <Text style={styles.builderCost2}>10000</Text>
                        </View>
                        <View style={styles.devider}></View>
                        <View style={styles.builderCostColumn}>
                          <Text style={styles.builderCost}>Builder Cost</Text>
                          <Text style={styles.builderCost1}>50000</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.supervisorCard2}>
                <View style={styles.imagesButtonStack}>
                  <TouchableOpacity style={styles.imagesButton}>
                    <Image
                      source={require("../../assets/images/viscato-sp-k-office-41.jpg")}
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
                      source={require("../../assets/images/viscato-sp-k-office-night-view1.jpg")}
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
              </TouchableOpacity>
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
    width: 375,
    height: 812,
    backgroundColor: "rgba(54,138,236,1)",
    alignSelf: "center",
  },
  headerCommon1: {
    width: 375,
    height: 69,
    borderRadius: 32,
    flexDirection: "row",
    marginTop: 34,
  },
  headerbackButton1: {
    width: 73,
    height: 47,
    borderRadius: 20,
    marginLeft: -15,
    marginTop: 11,
  },
  headerBackIcon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 2,
    marginLeft: 37,
  },
  allSite: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    textAlign: "left",
    marginLeft: 81,
    alignSelf: "center",
  },
  headerSideButton1: {
    width: 43,
    height: 40,
    borderRadius: 48,
    justifyContent: "center",
    marginLeft: 84,
    marginTop: 15,
  },
  icon1: {
    fontSize: 40,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  addSupervisorMiddle1: {
    width: 375,
    height: 704,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 72,
    marginTop: 5,
  },
  listCompletedSites: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    marginTop: 3,
  },
  switch: {
    marginLeft: 31,
  },
  listCompletedSitesRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 88,
    marginRight: 82,
  },
  scrollArea1: {
    width: 375,
    height: 664,
    borderRadius: 71,
    marginTop: 10,
  },
  scrollArea1_contentContainerStyle: {
    height: 664,
    width: 375,
  },
  supervisorCard1: {
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
    alignSelf: "center",
  },
  siteImagesButton: {
    top: 1,
    left: 5,
    width: 374,
    height: 190,
    position: "absolute",
    borderWidth: 0,
    borderColor: "#000000",
  },
  image2: {
    width: 374,
    height: 190,
  },
  citiTagGrp: {
    top: 16,
    left: 0,
    width: 90,
    height: 21,
    position: "absolute",
  },
  citiTag: {
    width: 90,
    height: 21,
    backgroundColor: "rgba(149,190,239,0.59)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,0.59)",
  },
  pune: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    textAlign: "left",
    marginTop: 5,
    marginLeft: 46,
  },
  infoButton: {
    top: 0,
    left: 171,
    width: 347,
    height: 196,
    position: "absolute",
    borderRadius: 100,
  },
  infoBck: {
    width: 320,
    height: 196,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(54,138,236,0.59)",
    backgroundColor: "rgba(149,190,239,0.59)",
  },
  siteName: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    textAlign: "left",
    marginTop: 23,
    marginLeft: 45,
  },
  address: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
    marginTop: 4,
    marginLeft: 45,
  },
  supervi: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    textAlign: "left",
    marginTop: 2,
    marginLeft: 45,
  },
  aniketVaidya: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  mob: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
    marginLeft: 11,
  },
  aniketVaidyaRow: {
    height: 10,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 45,
    marginRight: 168,
  },
  startDate: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
  },
  startDate1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 8,
    textAlign: "left",
    marginLeft: 25,
  },
  startDateRow: {
    height: 10,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 45,
    marginRight: 168,
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
    width: 518,
    height: 196,
    marginTop: -5,
    marginLeft: -9,
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
