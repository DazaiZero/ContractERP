import React, { Component, useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  FlatList,
  Modal,
  ActivityIndicator,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import DatePicker from "react-native-date-picker";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../../context";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
Amplify.configure(awsconfig);
import FlashMessage from "react-native-flash-message";
import { ShowNotification } from "../../src/utils/utils";
import {
  createSites,
  updateUsers,
  createSiteImages,
} from "../../src/graphql/mutations";
import { listUsers } from "../../src/graphql/queries";
const { height, width } = Dimensions.get("screen");
let ImagesLisks = "";
export const AddSite = ({ route, navigation }) => {
  const ErpAuth = useContext(AuthContext);
  const { parent } = route.params;
  const [siteName, setSiteName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [startDate, setStartDate] = useState();
  const [isImageUploaded, setImageUploaded] = useState(false);
  const [isImageloaded, setImageloaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSupervisor, setSelectedSupervisor] =
    useState("Add Supervisor");
  const [siteImgLoc, setImgPath] = useState();
  const [siteId, setSiteId] = useState();
  const [selectedSupervisorID, setSelectedSupervisorID] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const [uploadFileObj, setUploadFile] = useState();
  const [siteImages, setSiteImages] = useState();
  const [base64FileTmp, setBase64FileObj] = useState();
  const [siteImageLink, setSiteImageLink] = useState();
  const Loadingdata = [
    {
      id: 1,
      loading: "loading",
    },
  ];
  const [data, setData] = useState(Loadingdata);

  useEffect(() => {
    if (data[0].loading == "loading") getSupervisor();
  }, []);

  const getSupervisor = async () => {
    const userdata = await API.graphql({
      query: listUsers,
    }).then((res) => {
      //console.log(res);
      setData(res.data.listUsers.items);
      setLoading(false);
    });
  };

  const AddSiteDB = async () => {
    console.log("AddSiteDB");
    const idTmp = Math.random().toString(36).substr(2, 10);
    console.log(idTmp);
    console.log(selectedSupervisorID);
    console.log(ImagesLisks);
    const userdata = await API.graphql({
      query: createSites,
      variables: {
        input: {
          id: idTmp,
          siteId: idTmp,
          siteName: siteName,
          StartDate: startDate,
          EndDate: "",
          buiderCost: "0",
          WorkPaidAmount: "0",
          isImageUploaded: isImageUploaded,
          city: city,
          state: state,
          address: address,
        },
      },
    })
      .then((res) => {
        console.log("res -- add site");
        console.log(res);
        setSiteId(res.data.createSites.id);
        if (isImageUploaded) AddSiteImages(res.data.createSites.id);
        ShowNotification("Site Added Successfull", 1);
      })
      .catch((err) => {
        console.log("error add Site");
        console.log(err);
      });
    userdata;
  };

  const AddSiteImages = async (id) => {
    console.log("AddSiteImages");
    const idTmp = Math.random().toString(36).substr(2, 10);
    console.log(siteImageLink);
    console.log(id);
    console.log(uploadFileObj);
    const userdata = await API.graphql({
      query: createSiteImages,
      variables: {
        input: {
          id: idTmp,
          siteId: id,
          fileKey: siteImageLink,
          uri: siteImageLink,
        },
      },
    })
      .then((res) => {
        console.log("res-AddSIteImage");
        console.log(res);
        ShowNotification("Image Added Successfull", 1);
      })
      .catch((err) => {
        console.log("error add Site");
        console.log(err);
      });
    userdata;
  };

  const AddSitesOp = async () => {
    if (isImageloaded && uploadFileObj != "" && uploadFileObj != null) {
      await UploadImage();
    } else {
      await AddSiteDB();
    }
  };

  const AssignSupervisor = async () => {
    try {
      const updateToken = await API.graphql({
        query: updateUsers,
        variables: {
          input: {
            id: selectedSupervisorID,
            siteId: siteId,
          },
        },
      })
        .then((updatetoken) => {
          //console.log(updatetoken);
          navigation.push("SitesOngoing");
        })
        .catch((err) => console.log(err));
      updateToken;
    } catch (error) {
      console.log(error);
    }
  };

  const UploadImage = async () => {
    try {
      let response = await fetch(
        "https://m535y0zfua.execute-api.ap-south-1.amazonaws.com/dev/file",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadFileObj),
        }
      );
      let json = await response.json().then((res) => {
        setImageUploaded(true);
        console.log("resUF--ImageUploaded");
        console.log(res);
        ImagesLisks = res.uploadResult.key;
        const tmpLinks = res.uploadResult.key;
        setSiteImageLink(tmpLinks);
        setSiteImages(tmpLinks);
        console.log(tmpLinks);
      });
      json;
    } catch (error) {
      console.log("resUF-Error");
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("siteImages");
    console.log(siteImageLink);
    if (siteImageLink != null && siteImageLink != "") {
      console.log("siteImageLink---");
      AddSiteDB();
    }
  }, [siteImageLink]);

  const OpenCamera = async () => {
    console.log("Upload Images");
    const result = await launchCamera({
      mediaType: "photo",
      maxWidth: 168,
      maxHeight: 168,
      includeBase64: true,
    });
    console.log("got Here");
    console.log(result);
    const base64File = result.assets[0].base64;
    const FileKey = siteName + "/" + result.assets[0].fileName;
    console.log(FileKey);
    console.log(base64File);

    setImgPath(result.assets[0].uri);
    const uploadFile = {
      fileKey: FileKey,
      base64File: base64File,
    };

    setBase64FileObj("data:image/jpg;base64," + base64File);
    console.log("...............................................");
    console.log(base64FileTmp);
    setUploadFile(uploadFile);
  };

  useEffect(() => {
    if (base64FileTmp != "") {
      console.log(base64FileTmp);
      setImageloaded(true);
    }
  }, [base64FileTmp]);

  useEffect(() => {
    if (siteId != "" && siteId != null) {
      AssignSupervisor();
    }
  }, [siteId]);

  return (
    <View style={styles.container}>
      <View style={styles.backGroundMain}>
        <View style={styles.headerCommon1}>
          <TouchableOpacity
            style={styles.headerbackButton1}
            onPress={() => {
              if (parent == "Home") navigation.push("Home");
              else navigation.push("SitesOngoing");
            }}
          >
            <IoniconsIcon
              name="ios-arrow-back"
              style={styles.headerBackIcon1}
            ></IoniconsIcon>
          </TouchableOpacity>
          <Text style={styles.addNewSite}>Add New Site</Text>
        </View>
        <View style={styles.addSupervisorMiddle1}>
          <View style={styles.scrollArea1}>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  console.log("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <FlatList
                  keyExtractor={(item) => item.id}
                  data={data}
                  horizontal={false}
                  showsVerticalScrollIndicator={false}
                  style={styles.containerModal}
                  renderItem={(item) => (
                    <View>
                      {isLoading ? (
                        <View style={styles.Loading}>
                          <ActivityIndicator
                            size="large"
                            color="#F715B3"
                          ></ActivityIndicator>
                        </View>
                      ) : (
                        <View>
                          <TouchableOpacity
                            style={styles.rect1}
                            onPress={() => {
                              setSelectedSupervisorID(item.item.id);
                              setSelectedSupervisor(item.item.name);
                              setModalVisible(false);
                            }}
                          >
                            <Text style={styles.supervisorUsername1}>
                              {item.item.name}
                            </Text>
                            <Icon
                              name="human-greeting"
                              style={styles.icon1}
                            ></Icon>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  )}
                ></FlatList>
              </Modal>
            </View>
            <ScrollView
              horizontal={false}
              nestedScrollEnabled={true}
              contentContainerStyle={styles.scrollArea1_contentContainerStyle}
            >
              <View style={styles.rect}>
                {isImageloaded ? (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        if (siteName != "") OpenCamera();
                      }}
                    >
                      <Image
                        style={styles.siteImg}
                        source={{
                          uri: base64FileTmp,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View>
                    <TouchableOpacity
                      style={styles.addSiteImageButton}
                      onPress={() => {
                        if (siteName != "") OpenCamera();
                      }}
                    >
                      <SimpleLineIconsIcon
                        name="picture"
                        style={styles.icon}
                      ></SimpleLineIconsIcon>
                    </TouchableOpacity>
                  </View>
                )}

                <Text style={styles.addSiteImages}>Add Site Images</Text>
                <View style={styles.firstNameGrop}>
                  <Text style={styles.siteNameTxt}>Site Name</Text>
                  <TextInput
                    onChangeText={(text) => setSiteName(text)}
                    placeholder="Site Name"
                    style={styles.siteNameText}
                  ></TextInput>
                </View>
                <View style={styles.addressGrop}>
                  <Text style={styles.address}>Address</Text>
                  <TextInput
                    onChangeText={(text) => setAddress(text)}
                    placeholder="Address"
                    numberOfLines={5}
                    style={styles.addressTextInput}
                  ></TextInput>
                </View>
                <View style={styles.citytxt}>
                  <Text style={styles.city}>City</Text>
                  <TextInput
                    onChangeText={(text) => setCity(text)}
                    placeholder="City"
                    style={styles.cityText}
                  ></TextInput>
                </View>
                <View style={styles.stateTxt}>
                  <Text style={styles.state}>State</Text>
                  <TextInput
                    onChangeText={(text) => setState(text)}
                    placeholder="State"
                    style={styles.textInput}
                  ></TextInput>
                </View>
                <View style={styles.addSupervisor}>
                  <Text style={styles.addSupervisor2}>Add Supervisor</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(true);
                    }}
                    style={styles.textInput2}
                  >
                    <Text style={styles.addSupervisorPlace}>
                      {selectedSupervisor}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.dateSelector}>
                  <Text style={styles.startDate}>Start Date</Text>
                  <DatePicker
                    modal
                    mode={"date"}
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                      setOpen(false);
                      setDate(date);
                      let tmoDate =
                        date.getFullYear() +
                        "-" +
                        parseInt(date.getMonth() + 1) +
                        "-" +
                        date.getDate();
                      console.log(tmoDate);
                      setStartDate(tmoDate);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setOpen(true);
                    }}
                    style={styles.textInput3}
                  >
                    <Text style={styles.DateSelect}>{String(date)}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => {
                    AddSitesOp();
                  }}
                >
                  <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  DateSelect: {
    fontFamily: "roboto-regular",
    color: "#918d8d",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "center",
    marginTop: height * 0.01,
    marginLeft: width * 0.2,
    fontSize: height * 0.015,
  },
  centeredView: {
    position: "absolute",
  },
  containerModal: {
    position: "absolute",
    backgroundColor: "rgba(54,138,236,1)",
    borderRadius: 52,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.09,
    shadowRadius: 0,
    left: width * 0.1,
    top: height * 0.1,
    width: width * 0.81,
    height: height * 0.7,
  },
  rect1: {
    width: width * 0.71,
    height: height * 0.08,
    backgroundColor: "rgba(80,227,194,1)",
    borderRadius: 25,
    marginTop: height * 0.02,
    alignSelf: "center",
  },
  supervisorUsername1: {
    fontFamily: "roboto-regular",
    color: "#F3EFEF",
    fontSize: height * 0.02,
    textAlign: "center",
    marginLeft: width * 0.1,
    marginTop: height * 0.025,
    alignSelf: "center",
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.05,
    marginLeft: width * 0.03,
    marginTop: -height * 0.04,
  },
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
  addNewSite: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.033,
    textAlign: "center",
    marginLeft: width * 0.1,
    marginTop: -height * 0.015,
    alignSelf: "center",
    width: width * 0.5,
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
    height: height * 0.8,
    borderRadius: 71,
  },
  scrollArea1_contentContainerStyle: {
    height: height * 0.9,
    width: width,
    borderRadius: 71,
  },
  rect: {
    width: width * 0.9,
    height: height * 0.9,
    borderRadius: 71,
    alignSelf: "center",
  },
  addSiteImageButton: {
    width: width * 0.35,
    height: height * 0.15,
    borderRadius: 65,
    borderWidth: 0,
    borderColor: "#000000",
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    marginTop: height * 0.02,
    marginLeft: width * 0.28,
  },
  siteImg: {
    height: height * 0.2,
    alignSelf: "center",
    borderRadius: 65,
    borderRadius: 81,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,1)",
    width: width * 0.5,
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: height * 0.05,
    alignSelf: "center",
  },
  addSiteImages: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "center",
    marginTop: height * 0.01,
    marginLeft: width * 0.21,
    fontSize: height * 0.015,
  },
  firstNameGrop: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.02,
    marginLeft: width * 0.0,
  },
  siteNameTxt: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  siteNameText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  addressGrop: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.04,
    marginLeft: width * 0.0,
  },
  address: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  addressTextInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.08,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  citytxt: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.07,
    marginLeft: width * 0.0,
  },
  city: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  cityText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  stateTxt: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.04,
    marginLeft: width * 0.0,
  },
  state: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  addSupervisor: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.04,
    marginLeft: width * 0.0,
  },
  addSupervisor2: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  addSupervisorPlace: {
    fontFamily: "roboto-regular",
    color: "#918d8d",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "center",
    marginTop: height * 0.01,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  textInput2: {
    fontFamily: "roboto-regular",
    alignItems: "center",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  dateSelector: {
    width: width * 0.9,
    height: height * 0.045,
    marginTop: height * 0.04,
    marginLeft: width * 0.0,
  },
  startDate: {
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    height: height * 0.025,
    width: width * 0.5,
    textAlign: "left",
    marginTop: height * 0,
    marginLeft: width * 0.01,
    fontSize: height * 0.015,
  },
  textInput3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: width * 0.9,
    height: height * 0.045,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 30,
    textAlign: "center",
  },
  saveButton: {
    width: width * 0.3,
    height: height * 0.07,
    backgroundColor: "rgba(92,154,226,1)",
    borderRadius: 81,
    borderWidth: 4,
    borderColor: "rgba(255,255,255,1)",
    marginTop: height * 0.05,
    marginLeft: width * 0.31,
  },
  save: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.025,
    marginTop: height * 0.01,
    marginLeft: width * 0.04,
    width: width * 0.2,
    height: height * 0.05,
    textAlign: "center",
  },
});
