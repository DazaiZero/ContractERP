import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import filter from "lodash.filter";
import { Dropdown } from "react-native-element-dropdown";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { AuthContext } from "../../context";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../src/aws-exports";
Amplify.configure(awsconfig);
import FlashMessage from "react-native-flash-message";
import { ShowNotification } from "../../src/utils/utils";
const { height, width } = Dimensions.get("screen");
import { listWorkers, listSites } from "../../src/graphql/queries";
//
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
export const WorkerManagementSupervisor = ({ route, navigation }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataSite, setDataSite] = useState([]);
  const [dataWorker, setDataWorker] = useState([]);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);
  const [SelectedSite, setSelectedSite] = useState(null);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onRefresh = async () => {
    setIsLoading(true);
    await getWorkersList();
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    getSite();
    setIsLoading(false);
  }, []);

  const getSite = async () => {
    const siteData = await API.graphql({
      query: listSites,
    }).then((res) => {
      console.log("site List");
      console.log(res);
      setDataSite(res.data.listSites.items);
    });
    siteData;
  };

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setDataWorker(filteredData);
    setQuery(text);
  };

  const contains = ({ workerName, id }, query) => {
    console.log(query);
    if (workerName.includes(query)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (SelectedSite != null) {
      console.log("Selected Site");
      console.log(SelectedSite);
      getWorkersList();
    }
  }, [SelectedSite]);

  const getWorkersList = async () => {
    console.log(SelectedSite);
    const WorkerData = await API.graphql({
      query: listWorkers,
      filter: { siteId: SelectedSite },
    }).then((res) => {
      console.log("Worker List");
      console.log(res);
      setDataWorker(res.data.listWorkers.items);
      setFullData(res.data.listWorkers.items);
    });
    WorkerData;
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
        <Text style={styles.headerTitle}>Workers</Text>
        <TouchableOpacity
          style={styles.headerSideButton}
          onPress={() => {
            navigation.push("AddWorker");
          }}
        >
          <MaterialCommunityIconsIcon
            name="plus"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.button1}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "white" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataSite}
          search
          maxHeight={300}
          labelField="siteName"
          valueField="id"
          placeholder={!isFocus ? "Select Site" : "..."}
          searchPlaceholder="Search Site"
          value={SelectedSite}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            console.log(item);
            setSelectedSite(item.id);
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
          data={dataWorker}
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
              <View style={styles.workrName}>
                <Text style={styles.workerName}>{item.item.workerName}</Text>
              </View>
              <View style={styles.absentRow}>
                <TouchableOpacity style={styles.absent}>
                  <Text style={styles.a2}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detailsbtn}>
                  <Text style={styles.details}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectbtn}>
                  <Text style={styles.select2}>Select</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        ></FlatList>
      </View>
      <View style={styles.shareGrp}></View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginLeft: -width * 0.0,
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
    height: height * 0.1,
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
  absent: {
    width: width * 0.2,
    height: height * 0.04,
    marginTop: height * 0.005,
    marginLeft: width * 0.1,
    backgroundColor: "rgba(230,80,80,1)",
    borderRadius: 100,
    justifyContent: "center",
  },
  a2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize: width * 0.02,
    textAlign: "center",
    textAlignVertical: "center",
  },
  detailsbtn: {
    width: width * 0.2,
    height: height * 0.04,
    marginTop: height * 0.005,
    marginLeft: width * 0.1,
    backgroundColor: "rgba(68,146,234,1)",
    borderRadius: 100,
    justifyContent: "center",
  },
  details: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize: width * 0.02,
    textAlign: "center",
    textAlignVertical: "center",
  },
  selectbtn: {
    width: width * 0.2,
    height: height * 0.04,
    marginTop: height * 0.005,
    marginLeft: width * 0.1,
    backgroundColor: "rgba(68,146,234,1)",
    borderRadius: 100,
    justifyContent: "center",
  },
  select2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize: width * 0.02,
    textAlign: "center",
    textAlignVertical: "center",
  },
  absentRow: {
    height: height * 0.04,
    flexDirection: "row",
    marginTop: height * 0.0,
    marginLeft: width * 0.0,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
  },
  workers2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 102,
    marginTop: 7,
  },
  button: {
    width: 39,
    height: 37,
    marginLeft: 93,
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
});
