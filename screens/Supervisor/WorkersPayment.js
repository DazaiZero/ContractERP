import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
const { height, width } = Dimensions.get("screen");

import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

export const WorkersPayment = ({ route, navigation }) => {
  const dataTmp = [
    { name: "Site 1", id: "1" },
    { name: "Site 2", id: "2" },
    { name: "Site 3", id: "3" },
    { name: "Site 4", id: "4" },
    { name: "Site 5", id: "5" },
    { name: "Site 6", id: "6" },
    { name: "Site 7", id: "7" },
    { name: "Site 8", id: "8" },
  ];
  const dataDate = [
    { id: 1, date: "01-05-2022" },
    { id: 2, date: "04-05-2022" },
    { id: 3, date: "06-05-2022" },
    { id: 4, date: "11-05-2022" },
    { id: 5, date: "20-05-2022" },
    { id: 6, date: "23-05-2022" },
    { id: 7, date: "24-05-2022" },
    { id: 8, date: "25-05-2022" },
    { id: 9, date: "25-05-2022" },
    { id: 10, date: "26-05-2022" },
    { id: 11, date: "01-06-2022" },
    { id: 12, date: "02-06-2022" },
    { id: 13, date: "05-06-2022" },
    { id: 14, date: "10-06-2022" },
    { id: 15, date: "17-06-2022" },
  ];
  const dataW = [
    { id: 1, name: "Aniket Vaidya", workerpic: "" },
    { id: 2, name: "Ajinkya Vaidya", workerpic: "" },
    { id: 3, name: "Worker 1", workerpic: "" },
    { id: 4, name: "Worker 2", workerpic: "" },
    { id: 5, name: "Worker 3", workerpic: "" },
    { id: 6, name: "Worker 4", workerpic: "" },
    { id: 7, name: "Worker 5", workerpic: "" },
    { id: 8, name: "Worker 6", workerpic: "" },
    { id: 9, name: "Worker 7", workerpic: "" },
    { id: 10, name: "Worker 8", workerpic: "" },
    { id: 11, name: "Worker 9", workerpic: "" },
    { id: 12, name: "Worker 10", workerpic: "" },
    { id: 13, name: "Worker 11", workerpic: "" },
    { id: 14, name: "Worker 12", workerpic: "" },
    { id: 15, name: "Worker 13", workerpic: "" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [EntrySelected, setSelectedEntry] = useState(1);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onRefresh = async () => {
    setIsLoading(true);
    await sleep(2000);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    setData(dataW);
    setFullData(dataW);

    setIsLoading(false);
  }, []);

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({ name, id }, query) => {
    console.log(query);
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const renderHeader = () => (
    <View style={styles.placeholder}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={query}
        onChangeText={(queryText) => handleSearch(queryText)}
        placeholder="Search"
        style={styles.placeholderSearch}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.containerEntry}>
          <View style={styles.addMaterialModal1Entry}>
            <Text style={styles.attendedDatesEntry}>Attended dates</Text>
            <View style={styles.scrollAreaEntry}>
              <FlatList
                horizontal={false}
                keyExtractor={(item) => item.id}
                data={dataDate}
                //onRefresh={onRefresh}
                //refreshing={isLoading}
                //ListHeaderComponent={renderHeader}
                pagingEnabled={false}
                showsHorizontalScrollIndicator={false}
                /* contentContainerStyle={
              styles.workersList_contentContainerStyle
            } */
                renderItem={(item) => (
                  <View style={styles.dateBadgeEntry}>
                    <View style={styles.checkboxIndicatorRowEntry}>
                      <TouchableOpacity
                        style={styles.checkboxIndicatorEntry}
                      ></TouchableOpacity>
                      <Text style={styles.dateTextEntry}>{item.item.date}</Text>
                    </View>
                  </View>
                )}
              ></FlatList>
            </View>
            <TouchableOpacity
              style={styles.saveGrpButton1Entry}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.save2Entry}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
        <Text style={styles.addNewSite}>Worker Payment</Text>
      </View>
      <View style={styles.button1}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "white" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataTmp}
          search
          maxHeight={300}
          labelField="name"
          valueField="id"
          placeholder={!isFocus ? "Select Site" : "..."}
          searchPlaceholder="Search Site"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={{ marginLeft: width * 0.02 }}
              color={"black"}
              name="home"
              size={width * 0.03}
            />
          )}
        />
      </View>
      <View style={styles.workersList}>
        <FlatList
          horizontal={false}
          keyExtractor={(item) => item.id}
          data={data}
          onRefresh={onRefresh}
          refreshing={isLoading}
          ListHeaderComponent={renderHeader}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          /* contentContainerStyle={
              styles.workersList_contentContainerStyle
            } */
          renderItem={(item) => (
            <View style={styles.rect8}>
              <TouchableOpacity
                style={styles.workrName}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.workerName}>{item.item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </View>
      <View style={styles.shareGrp}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerEntry: {
    flex: 1,
  },
  addMaterialModal1Entry: {
    width: width * 0.75,
    height: height * 0.7,
    backgroundColor: "rgba(170,212,128,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.09,
    shadowRadius: 0,
    marginTop: height * 0.12,
    alignSelf: "center",
  },
  attendedDatesEntry: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.025,
    alignSelf: "center",
  },
  scrollAreaEntry: {
    width: width * 0.75,
    height: height * 0.6,
    backgroundColor: "rgba(114,175,247,1)",
    borderRadius: 14,
    marginTop: height * 0.015,
  },
  scrollArea_contentContainerStyleEntry: {
    width: width * 0.75,
    height: height * 0.6,
  },
  dateBadgeEntry: {
    width: width * 0.7,
    height: height * 0.06,
    backgroundColor: "rgba(80,227,194,1)",
    borderRadius: 60,
    flexDirection: "row",
    marginTop: height * 0.02,
    alignSelf: "center",
  },
  checkboxIndicatorEntry: {
    width: width * 0.08,
    height: height * 0.05,
    marginTop: -height * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
  },
  dateTextEntry: {
    fontFamily: "roboto-regular",
    color: "#F7F4F4",
    textAlign: "center",
    textAlignVertical: "center",
    height: height * 0.04,
    width: width * 0.5,
    fontSize: width * 0.045,
    marginLeft: width * 0.04,
    marginTop: height * 0.0,
  },
  checkboxIndicatorRowEntry: {
    height: height * 0.04,
    width: width * 0.7,
    flexDirection: "row",
    flex: 1,
    marginTop: height * 0.01,
  },
  dateBadge2Entry: {
    width: 375,
    height: 65,
    backgroundColor: "rgba(170,212,128,1)",
    borderRadius: 60,
    flexDirection: "row",
    marginTop: 15,
  },
  checkboxIndicator2Entry: {
    width: 47,
    height: 45,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 100,
  },
  dateText2Entry: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    textAlign: "center",
    marginLeft: 46,
    marginTop: 5,
  },
  checkboxIndicator2RowEntry: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 105,
    marginLeft: 12,
    marginTop: 11,
  },
  dateBadge1Entry: {
    width: 375,
    height: 65,
    backgroundColor: "rgba(170,212,128,1)",
    borderRadius: 60,
    flexDirection: "row",
    marginTop: 14,
  },
  checkboxIndicator1Entry: {
    width: 47,
    height: 45,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 100,
  },
  dateText1Entry: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    textAlign: "center",
    marginLeft: 46,
    marginTop: 5,
  },
  checkboxIndicator1RowEntry: {
    height: 45,
    flexDirection: "row",
    flex: 1,
    marginRight: 105,
    marginLeft: 12,
    marginTop: 11,
  },
  saveGrpButton1Entry: {
    width: width * 0.35,
    height: height * 0.04,
    backgroundColor: "#E6E6E6",
    borderRadius: 32,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    justifyContent: "center",
    marginLeft: width * 0.2,
    marginTop: height * 0.005,
  },
  save2Entry: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: width * 0.04,
    alignSelf: "center",
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: height * 0.05,
    width: width * 0.8,
    backgroundColor: "rgba(230, 230, 230,1)",
    textAlign: "center",
    borderRadius: 76,
    marginTop: height * 0.0,
    marginLeft: width * 0.09,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  placeholderSearch: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: width * 0.03,
    height: height * 0.05,
    width: width * 0.8,
    backgroundColor: "rgba(230, 230, 230,1)",
    textAlign: "center",
    borderRadius: 76,
    marginTop: height * 0.0,
    marginLeft: width * 0.0,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  dropdown: {
    height: height * 0.05,
    width: width * 0.8,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 9,
  },
  icon: {
    marginRight: width * 0.2,
  },
  placeholderStyle: {
    fontSize: width * 0.03,
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
    marginLeft: -width * 0.0,
    alignSelf: "center",
    width: width * 0.5,
  },
  selectedTextStyle: {
    fontSize: width * 0.03,
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
    marginLeft: -width * 0.25,
    alignSelf: "center",
    width: width * 0.5,
  },
  iconStyle: {
    width: width * 0.04,
    height: height * 0.04,
    marginRight: width * 0.02,
  },
  inputSearchStyle: {
    height: height * 0.04,
    fontSize: width * 0.03,
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
  },
  headerCommon1: {
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
  addNewSite: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: height * 0.025,
    textAlign: "center",
    marginLeft: width * 0.1,
    marginTop: -height * 0.015,
    alignSelf: "center",
    width: width * 0.5,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(74,144,226,1)",
  },
  workersList: {
    width: width,
    height: height * 0.7,
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
    width: width,
    height: height * 0.08,
    backgroundColor: "rgba(132,235,211,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    marginTop: height * 0.01,
    marginBottom: height * 0.005,
    alignSelf: "center",
  },
  workrName: {
    width: width * 0.8,
    height: height * 0.04,
    borderRadius: 31,
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    marginTop: height * 0.015,
    marginLeft: width * 0.1,
  },
  workerName: {
    fontFamily: "roboto-regular",
    color: "rgba(74,144,226,1)",
    textAlign: "center",
    textAlignVertical: "center",
    width: width * 0.8,
    height: height * 0.04,
    fontSize: width * 0.035,
    alignSelf: "center",
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 50,
    marginTop: 7,
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -674,
    marginRight: 89,
  },
  shareGrp: {
    width: width,
    height: height * 0.05,
    backgroundColor: "#E6E6E6",
    borderRadius: 32,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    marginTop: height * 0.02,
  },
  button1: {
    width: width * 0.8,
    height: height * 0.045,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: -height * 0.0,
    marginLeft: width * 0.1,
  },
  selectSite1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
  },
});
