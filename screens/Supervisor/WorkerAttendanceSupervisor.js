import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
const { height, width } = Dimensions.get("screen");
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import DatePicker from "react-native-date-picker";
const dataSite = [
  { name: "Site 1", id: "1" },
  { name: "Site 2", id: "2" },
  { name: "Site 3", id: "3" },
  { name: "Site 4", id: "4" },
  { name: "Site 5", id: "5" },
  { name: "Site 6", id: "6" },
  { name: "Site 7", id: "7" },
  { name: "Site 8", id: "8" },
];
export const WorkerAttendanceSupervisor = ({ route, navigation }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onRefresh = async () => {
    setIsFetching(true);
    await sleep(2000);
    setIsFetching(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setData(dataSite);
    setFullData(dataSite);

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
        <Text style={styles.addNewSite}>Attendance</Text>
      </View>
      <View style={styles.dateSelectorLayer}>
        <View style={styles.selectedSites}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "white" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={height * 0.5}
            labelField="name"
            valueField="id"
            placeholder={!isFocus ? "Select Site" : "..."}
            searchPlaceholder="Search Site"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.id);
              setIsFocus(false);
              onRefresh();
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? "blue" : "black"}
                name="Safety"
                size={width * 0.05}
              />
            )}
          />
        </View>
        <View style={styles.dateSelector}>
          <View style={styles.backDateBtnRow}>
            <EntypoIcon name="calendar" style={styles.backDateBtn}></EntypoIcon>
            <TouchableOpacity
              style={styles.calendarGrpButton}
              onPress={() => setOpen(true)}
            >
              <Text style={styles.date}>{date.toDateString()}</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false);
                setDate(date);
                onRefresh();
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.workersList}>
        <FlatList
          horizontal={false}
          keyExtractor={(item) => item.id}
          data={data}
          onRefresh={onRefresh}
          refreshing={isFetching}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          //contentContainerStyle={styles.workersList_contentContainerStyle}
          renderItem={(item) => (
            <View style={styles.rect8}>
              {isFetching ? (
                <View></View>
              ) : (
                <View>
                  <View style={styles.workrName}>
                    <Text style={styles.workersName}>Workers Name</Text>
                  </View>
                  <View style={styles.presentColumnRow}>
                    <View style={styles.presentColumn}>
                      <TouchableOpacity style={styles.present}>
                        <Text style={styles.fullDay}>Full Day</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.absent}>
                        <Text style={styles.halfDay}>Half Day</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.totalAmountGrp}>
                      <View style={styles.todayAmountRow}>
                        <Text style={styles.todayAmount}>Today Amount</Text>
                        <TextInput
                          placeholder="Amount"
                          style={styles.placeholderTAmt}
                        ></TextInput>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}
        ></FlatList>
      </View>
      <TouchableOpacity style={styles.saveGrpButton}>
        <Text style={styles.save}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: height * 0.045,
    width: width * 0.8,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 9,
  },
  icon: {
    fontSize: width * 0.04,
    marginRight: width * 0.25,
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
  },
  placeholderStyle: {
    fontSize: width * 0.04,
    fontFamily: "roboto-regular",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    marginLeft: -width * 0.25,
    alignSelf: "center",
    width: width * 0.5,
  },
  selectedTextStyle: {
    fontSize: width * 0.04,
    fontFamily: "roboto-regular",
    color: "white",
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
    fontSize: width * 0.04,
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
    height: height * 0.65,
    marginTop: height * 0.02,
    backgroundColor: "rgba(80,227,194,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
  },
  workersList_contentContainerStyle: {
    width: width,
    height: height * 0.65,
  },
  rect8: {
    width: width * 0.95,
    height: height * 0.2,
    backgroundColor: "rgba(133,247,222,1)",
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
  },
  workrName: {
    width: width * 0.8,
    height: height * 0.045,
    borderRadius: 31,
    backgroundColor: "rgba(230, 230, 230,1)",
    justifyContent: "center",
    marginTop: height * 0.015,
    marginLeft: width * 0.08,
  },
  workersName: {
    fontFamily: "roboto-regular",
    color: "rgba(74,144,226,1)",
    textAlign: "center",
    textAlignVertical: "center",
    width: width * 0.8,
    height: height * 0.04,
    fontSize: width * 0.035,
    alignSelf: "center",
  },
  present: {
    width: width * 0.4,
    height: height * 0.05,
    marginTop: height * 0.0,
    marginLeft: width * 0.0,
    backgroundColor: "rgba(143,199,75,1)",
    borderRadius: 100,
    justifyContent: "center",
  },
  fullDay: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
    fontSize: height * 0.025,
  },
  absent: {
    width: width * 0.4,
    height: height * 0.05,
    marginTop: height * 0.015,
    marginLeft: width * 0.0,
    justifyContent: "center",
    backgroundColor: "rgba(155,155,155,1)",
    borderRadius: 100,
  },
  halfDay: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
    fontSize: height * 0.025,
  },
  presentColumn: {
    width: width * 0.4,
    height: height * 0.1,
  },
  totalAmountGrp: {
    width: width * 0.4,
    height: height * 0.05,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
    flexDirection: "row",
    marginLeft: width * 0.04,
    marginTop: height * 0.03,
  },
  todayAmount: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: height * 0.015,
    height: height * 0.035,
    width: width * 0.2,
  },
  placeholderTAmt: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: height * 0.035,
    width: width * 0.2,
    backgroundColor: "rgba(155,155,155,1)",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: height * 0.02,
    borderRadius: 19,
    marginLeft: width * 0.01,
    marginTop: height * 0.002,
  },
  todayAmountRow: {
    height: height * 0.04,
    width: width * 0.2,
    flexDirection: "row",
    flex: 1,
    marginTop: height * 0.005,
  },
  presentColumnRow: {
    height: height * 0.1,
    width: width * 0.8,
    flexDirection: "row",
    marginTop: height * 0.01,
    marginLeft: width * 0.08,
  },
  rect9: {
    width: 375,
    height: 160,
    backgroundColor: "rgba(133,247,222,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.02,
    shadowRadius: 0,
    marginTop: 10,
  },
  workrName1: {
    width: 294,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 31,
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 42,
  },
  workersName1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    alignSelf: "center",
  },
  present1: {
    width: 114,
    height: 36,
    backgroundColor: "rgba(143,199,75,1)",
    borderRadius: 100,
    justifyContent: "center",
  },
  fullDay1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
  },
  absent1: {
    width: 115,
    height: 33,
    backgroundColor: "rgba(155,155,155,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 10,
  },
  halfDay1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
  },
  present1Column: {
    width: 115,
  },
  totalAmountGrp1: {
    width: 200,
    height: 39,
    backgroundColor: "#E6E6E6",
    borderRadius: 17,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
    flexDirection: "row",
    marginLeft: 7,
    marginTop: 17,
  },
  todayAmount1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginTop: 6,
  },
  placeholderTAmt1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 105,
    backgroundColor: "rgba(155,155,155,1)",
    textAlign: "center",
    borderRadius: 19,
    marginLeft: 9,
  },
  todayAmount1Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 8,
    marginTop: 7,
  },
  present1ColumnRow: {
    height: 79,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 42,
    marginRight: 10,
  },
  dateSelectorLayer: {
    width: width * 1,
    height: height * 0.1,
    backgroundColor: "#E6E6E6",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.09,
    shadowRadius: 0,
    marginTop: height * 0.005,
  },
  selectedSites: {
    width: width * 0.8,
    height: height * 0.045,
    backgroundColor: "rgba(120,170,227,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: -height * 0.0,
    marginLeft: width * 0.1,
  },
  selectSite: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 23,
    marginTop: -1,
    alignSelf: "center",
  },
  dateSelector: {
    width: width,
    height: height * 0.05,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginTop: height * 0.005,
    marginLeft: width * 0.25,
  },
  backDateBtn: {
    color: "rgba(128,128,128,1)",
    fontSize: height * 0.02,
    marginTop: height * 0.015,
    marginLeft: width * 0.02,
  },
  calendarGrpButton: {
    width: width * 0.4,
    height: height * 0.03,
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: width * 0.02,
    marginTop: height * 0.01,
    backgroundColor: "#DBCCCC",
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
  date: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: height * 0.025,
    width: width * 0.3,
    marginTop: height * 0.0,
    fontSize: height * 0.015,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },
  nextDateBtn: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 36,
  },
  backDateBtnRow: {
    height: height * 0.05,
    flexDirection: "row",
    flex: 1,
  },
  saveGrpButton: {
    width: width * 0.3,
    height: height * 0.05,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: width * 0.66,
    marginTop: height * 0.01,
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
    alignSelf: "center",
    fontSize: width * 0.03,
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
