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

export const Attendance = ({ route, navigation }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const data = [
    { name: "Site 1", id: "1" },
    { name: "Site 2", id: "2" },
    { name: "Site 3", id: "3" },
    { name: "Site 4", id: "4" },
    { name: "Site 5", id: "5" },
    { name: "Site 6", id: "6" },
    { name: "Site 7", id: "7" },
    { name: "Site 8", id: "8" },
  ];

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onRefresh = async () => {
    setIsFetching(true);
    await sleep(2000);
    setIsFetching(false);
  };

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
                  <View style={styles.workrNameRow}>
                    <View style={styles.workrName}>
                      <Text style={styles.workersName}>Workers Name</Text>
                    </View>
                    <TouchableOpacity style={styles.present}>
                      <Text style={styles.p3}>P</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rect9Row}>
                    <View style={styles.rect9}>
                      <View style={styles.perDayRow}>
                        <Text style={styles.perDay}>Per Day : Amount /-</Text>
                      </View>
                    </View>
                    <View style={styles.rect10}>
                      <View style={styles.paidAmRow}>
                        <Text style={styles.paidAm}>Paid : Amount /-</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}
        ></FlatList>
      </View>
      <View style={styles.shareGrpRow}>
        {/* <TouchableOpacity style={styles.shareGrp}>
          <Text style={styles.share}>Share</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.saveGrpButton}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      </View>
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
    height: 502,
    width: 375,
  },
  rect8: {
    width: width * 0.97,
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
    marginTop: height * 0.02,
    marginLeft: width * 0.015,
  },
  workrName: {
    width: width * 0.7,
    height: height * 0.04,
    marginLeft: width * 0.015,
    backgroundColor: "#E6E6E6",
    borderRadius: 31,
  },
  workersName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: height * 0.03,
  },
  present: {
    width: width * 0.15,
    height: height * 0.088,
    backgroundColor: "rgba(143,199,75,1)",
    borderRadius: 100,
    marginLeft: width * 0.05,
    marginTop: -height * 0.005,
  },
  p3: {
    fontFamily: "roboto-regular",
    color: "#F6F1F1",
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    height: height * 0.085,
    width: width * 0.1,
    fontSize: height * 0.03,
  },
  absent: {
    width: 37,
    height: 36,
    backgroundColor: "rgba(230,80,80,1)",
    borderRadius: 100,
    marginLeft: 5,
    marginTop: 1,
  },
  a2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 10,
    marginLeft: 13,
  },
  workrNameRow: {
    height: height * 0.05,
    flexDirection: "row",
    marginTop: height * 0.01,
  },
  rect9: {
    width: width * 0.3,
    height: height * 0.035,
    marginTop: height * 0.0,
    marginLeft: width * 0.04,
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
  },
  perDay: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.015,
    height: height * 0.02,
    width: width * 0.3,
    marginLeft: width * 0.01,
    textAlign: "left",
    textAlignVertical: "center",
  },
  amount: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.01,
    height: height * 0.02,
    marginLeft: width * 0.015,
    textAlign: "center",
    textAlignVertical: "center",
  },
  perDayRow: {
    height: 13,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 7,
    marginTop: 9,
  },
  rect10: {
    width: width * 0.3,
    height: height * 0.035,
    marginTop: height * 0.0,
    marginLeft: width * 0.04,
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
  },
  paidAm: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.015,
    height: height * 0.02,
    width: width * 0.3,
    textAlign: "left",
    textAlignVertical: "center",
    marginLeft: width * 0.01,
  },
  amount1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginLeft: 7,
  },
  paidAmRow: {
    height: 13,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 7,
    marginTop: 9,
  },
  rect11: {
    width: width * 0.2,
    height: height * 0.03,
    marginTop: height * 0.0,
    marginLeft: width * 0.02,
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
  },
  presentHalf: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 11,
    marginTop: 9,
    marginLeft: 11,
  },
  rect9Row: {
    height: height * 0.035,
    flexDirection: "row",
    marginTop: height * 0.0,
    marginLeft: width * 0.0,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
  },
  workersAttendance: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 35,
    marginTop: 7,
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -674,
    marginRight: 75,
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
    fontSize: 30,
    marginTop: 5,
    marginLeft: 97,
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
    marginLeft: width * 0.6,
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
