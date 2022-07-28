import React, { Component, useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../../context";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
Amplify.configure(awsconfig);
import { listSites } from "../../src/graphql/queries";
import FlashMessage from "react-native-flash-message";
import { ShowNotification } from "../../src/utils/utils";
const { height, width } = Dimensions.get("screen");

export const SitesOngoing = ({ route, navigation }) => {
  const ErpAuth = useContext(AuthContext);
  const [isLoading, setLoading] = useState(true);
  const [sessionToken, setSessionToken] = useState();
  const Loadingdata = [
    {
      id: 1,
      name: "Aniket Vaidya",
      profilePic: "",
      contact: "+918055832283",
      address: "Nano Spaces, Ravet, Pune 411043",
    },
  ];
  const [data, setData] = useState(Loadingdata);

  const getSites = async () => {
    const userdata = await API.graphql({
      query: listSites,
    }).then((res) => {
      console.log("res - SiteOngoing");
      console.log(res);
      setData(res.data.listSites.items);
      setLoading(false);
    });
  };

  const getImg = async (item) => {
    console.log("Get IMG");
    //console.log(sessionToken);
    console.log(item);
    if (item != "" && item != null) {
      //console.log(item.siteImages.items[0].fileKey);
      const fileKey = item.siteImages.items[0].fileKey;
      const myArray = fileKey.split("/");
      const tmp1 = myArray[0] + "%2F" + myArray[1];
      console.log(tmp1);
      try {
        /* let response = await fetch(
        //"https://m535y0zfua.execute-api.ap-south-1.amazonaws.com/dev/file/T/rn_image_picker_lib_temp_e52257fb-ec47-464f-adba-dd72fb818707.jpg"
        `https://m535y0zfua.execute-api.ap-south-1.amazonaws.com/dev/file/${encodeURIComponent(
          tmp1
        )}`
      ); */

        let response = await fetch(
          "https://m535y0zfua.execute-api.ap-south-1.amazonaws.com/dev/getFile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: sessionToken,
            },
            body: tmp1,
          }
        ).then((response) => {
          response.json().then((res) => {
            console.log("resUF--Image");
            console.log(res);
          });
        });
        response;
        console.log("response");
        console.log(response);
        /* let json = await response.json().then((res) => {
        console.log("resUF--Image");
        console.log(res);
      });
      json;
      console.log(json); */
      } catch (error) {
        console.log("resUF-Error");
        console.log(error);
      }
    }

    return "";
  };

  const getJWTToken = async () => {
    console.log("Auth 1");
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    setSessionToken(token);

    /* let res = await Auth.currentAuthenticatedUser().then((user) => {
      console.log(user);
    });  */
  };

  useEffect(() => {
    //getImg();
    getJWTToken();
  }, []);

  useEffect(() => {
    if (sessionToken != "" && sessionToken != null) {
      getSites();
    }
  }, [sessionToken]);

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
            <FlatList
              keyExtractor={(item) => item.id}
              data={data}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollArea1_contentContainerStyle}
              renderItem={(item) => (
                <View style={styles.supervisorCard1}>
                  {isLoading ? (
                    <View style={styles.Loading}>
                      <ActivityIndicator
                        size="large"
                        color="#F715B3"
                      ></ActivityIndicator>
                    </View>
                  ) : (
                    <View style={styles.siteImagesButtonStack}>
                      <TouchableOpacity
                        style={styles.siteImagesButton}
                        onPress={() => {
                          navigation.push("SiteImages");
                        }}
                      >
                        <Image
                          //source={getImg()} //{require("../assets/images/viscato-sp-k-office-night-view1.jpg")}
                          /* source={{
                            uri: "https://erp-api-s3-bucket-dev.s3.ap-south-1.amazonaws.com/T/rn_image_picker_lib_temp_33cdaaf6-3643-47b7-ad82-b75b21fa914b.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCmFwLXNvdXRoLTEiRzBFAiACLf2vVrldnZDD%2BkBlHcBA0%2BSwjvkCuFicU9D%2FpBoKaAIhAInky2n7avDMs5J2cTB8VZcXynRAipAIfSodTCildfN%2FKuQCCB0QARoMNzcxNzI5NzUyNzcwIgx%2FyQbQ4TXgeuzLi3gqwQKGpBio9maxYzWQ3tWr8UP0w62TgFFMt1H7RIsEWfU0tSrYm3bTmw9Nqnmhpla9OldkAlZZ0wa2gDxyZFNANkFffi1xaymVSOL%2BhPJYzv5sITKZApEt9FiLKa6HFTx0uUwGk78bwnzkvlrv20YRSUx3XMG%2F4cVbavi%2BYwPvZ1GYUfxH8u00kiZ18pzF4zJy7nNgmpji%2BFyyLEBQVsBpJoRkmSnDfRihsJOyeVPXfZ3UkYvNbPcAsDv9D4VBXrw%2FSJYYJEfGoeKSs1TIatJzjLJ6TjKTBT8KBKgfpgPjjWSZ9z2M3xCN92Y2yI2x0Mc9iFafpaIt0%2B0xVeqoCk%2F2wlJXkzC8iNdLa6jhcoDlpUt6FS8mj7%2Fr%2Bn4xG9YGtYMcb9VmbkJVZM2u9ZiHlZabSYhqePwA1fHkF5LpaKGVNuEjyfswqKe2kwY6swJhG6eOO9CZrXCxGJh7oq0Nc3odbZXigidem%2BmTHFtGlLsCoD0pXP%2FBcwP%2BwhD9GST3EDBDwBnq5IxR5JgFCypeP0k%2BBSzq7EPuMQJZ%2Fh5C56Gg%2BFhffS4mEvUbezHAI4HBAAere%2BGoXU7Yeyeo%2Ff2qWsIknqnjXXxBVkTXRBaSdnS7SB10lUye7Dly536%2BufitdsL9WklRn9FxnriUBKP%2BjdHUrS7mNfpcBWbWSA1dN3LDVDyd2fFs2Ip6wxWDVEIutvgl01CD1hzx3V7903tIn%2FRZKdAyS7%2FU4vRh5%2BAH6P%2FQODekvgxFRMJ8rLKyIYSx0CbdCbo5HPia9I4viu6GpihlIEEloXlqxI3IUETtGgyevoutZ5%2BbbQnptge7P7H95BDU2weofJDpZvOQvKkMLkwj&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220430T195354Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=ASIA3HLVNQLBEHCFLBOD%2F20220430%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=0454e5abf7c078f249dfc8ad40d230c5a471f966c4fa7b8bed4c60f2dd14c32f",
                          }} */
                          source={{
                            uri: { getImg },
                          }}
                          //source={require("https://erp-api-s3-bucket-dev.s3.ap-south-1.amazonaws.com/T/rn_image_picker_lib_temp_33cdaaf6-3643-47b7-ad82-b75b21fa914b.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCmFwLXNvdXRoLTEiRzBFAiACLf2vVrldnZDD%2BkBlHcBA0%2BSwjvkCuFicU9D%2FpBoKaAIhAInky2n7avDMs5J2cTB8VZcXynRAipAIfSodTCildfN%2FKuQCCB0QARoMNzcxNzI5NzUyNzcwIgx%2FyQbQ4TXgeuzLi3gqwQKGpBio9maxYzWQ3tWr8UP0w62TgFFMt1H7RIsEWfU0tSrYm3bTmw9Nqnmhpla9OldkAlZZ0wa2gDxyZFNANkFffi1xaymVSOL%2BhPJYzv5sITKZApEt9FiLKa6HFTx0uUwGk78bwnzkvlrv20YRSUx3XMG%2F4cVbavi%2BYwPvZ1GYUfxH8u00kiZ18pzF4zJy7nNgmpji%2BFyyLEBQVsBpJoRkmSnDfRihsJOyeVPXfZ3UkYvNbPcAsDv9D4VBXrw%2FSJYYJEfGoeKSs1TIatJzjLJ6TjKTBT8KBKgfpgPjjWSZ9z2M3xCN92Y2yI2x0Mc9iFafpaIt0%2B0xVeqoCk%2F2wlJXkzC8iNdLa6jhcoDlpUt6FS8mj7%2Fr%2Bn4xG9YGtYMcb9VmbkJVZM2u9ZiHlZabSYhqePwA1fHkF5LpaKGVNuEjyfswqKe2kwY6swJhG6eOO9CZrXCxGJh7oq0Nc3odbZXigidem%2BmTHFtGlLsCoD0pXP%2FBcwP%2BwhD9GST3EDBDwBnq5IxR5JgFCypeP0k%2BBSzq7EPuMQJZ%2Fh5C56Gg%2BFhffS4mEvUbezHAI4HBAAere%2BGoXU7Yeyeo%2Ff2qWsIknqnjXXxBVkTXRBaSdnS7SB10lUye7Dly536%2BufitdsL9WklRn9FxnriUBKP%2BjdHUrS7mNfpcBWbWSA1dN3LDVDyd2fFs2Ip6wxWDVEIutvgl01CD1hzx3V7903tIn%2FRZKdAyS7%2FU4vRh5%2BAH6P%2FQODekvgxFRMJ8rLKyIYSx0CbdCbo5HPia9I4viu6GpihlIEEloXlqxI3IUETtGgyevoutZ5%2BbbQnptge7P7H95BDU2weofJDpZvOQvKkMLkwj&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220430T195354Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=ASIA3HLVNQLBEHCFLBOD%2F20220430%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=0454e5abf7c078f249dfc8ad40d230c5a471f966c4fa7b8bed4c60f2dd14c32f")}
                          style={{
                            width: width * 0.98,
                            height: height * 0.25,
                            borderRadius: 21,
                          }}
                          resizeMode="stretch"
                        ></Image>
                      </TouchableOpacity>
                      <View style={styles.citiTagGrp}>
                        <View style={styles.citiTag}>
                          <Text style={styles.pune}>{item.item.city}</Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        style={styles.infoButton}
                        onPress={() => {
                          navigation.push("SiteInformation");
                        }}
                      >
                        <View style={styles.infoBck}>
                          <Text style={styles.siteName}>
                            {item.item.siteName}
                          </Text>
                          <Text style={styles.address}>
                            {item.item.address}
                          </Text>
                          <Text style={styles.supervi}>Supervisor</Text>
                          <View style={styles.aniketVaidyaRow}>
                            <Text style={styles.aniketVaidya}>
                              {item.item.supervisors.items != ""
                                ? item.item.supervisors.items[0].username
                                : "Not Assigned"}
                            </Text>
                            <Text style={styles.mob}>
                              {item.item.supervisors.items != ""
                                ? item.item.supervisors.items[0].phone_number
                                : ""}
                            </Text>
                          </View>
                          <View style={styles.startDateRow}>
                            <Text style={styles.startDate}>Start Date</Text>
                            <Text style={styles.startDate1}>
                              {item.item.StartDate}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
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
    width: width * 0.5,
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
    height: height * 1,
    marginTop: -height * 0.025,
    borderRadius: 71,
  },
  scrollArea1_contentContainerStyle: {
    height: height * 1.5,
    width: width,
  },
  supervisorCard1: {
    width: width * 0.98,
    height: height * 0.25,
    marginTop: height * 0.01,
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
    width: width * 0.565,
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
    marginTop: -height * 0.005,
    marginLeft: width * 0.01,
    height: height * 0.025,
    width: width * 0.54,
  },
  mob: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.0125,
    textAlign: "left",
    marginTop: -height * 0.005,
    marginLeft: -width * 0.25,
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
