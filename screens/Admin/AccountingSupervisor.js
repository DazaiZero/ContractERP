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

export const AccountingSupervisor = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [EntrySelected, setSelectedEntry] = useState(1);
  const data = [
    { label: "Site 1", value: "1" },
    { label: "Site 2", value: "2" },
    { label: "Site 3", value: "3" },
    { label: "Site 4", value: "4" },
    { label: "Site 5", value: "5" },
    { label: "Site 6", value: "6" },
    { label: "Site 7", value: "7" },
    { label: "Site 8", value: "8" },
  ];

  const TrData = [
    { id: 1, date: "01-05-2022", opt: "Allotment", amount: "2000" },
    { id: 2, date: "04-05-2022", opt: "Expense", amount: "1300" },
    { id: 3, date: "06-05-2022", opt: "Allotment", amount: "2500" },
    { id: 4, date: "11-05-2022", opt: "Expense", amount: "10406" },
    { id: 5, date: "20-05-2022", opt: "Allotment", amount: "600" },
    { id: 6, date: "23-05-2022", opt: "Allotment", amount: "400" },
    { id: 7, date: "24-05-2022", opt: "Expense", amount: "6300" },
    { id: 8, date: "25-05-2022", opt: "Allotment", amount: "8200" },
    { id: 9, date: "25-05-2022", opt: "Expense", amount: "10200" },
    { id: 10, date: "26-05-2022", opt: "Allotment", amount: "12000" },
    { id: 11, date: "01-06-2022", opt: "Expense", amount: "35000" },
    { id: 12, date: "02-06-2022", opt: "Allotment", amount: "22000" },
    { id: 13, date: "05-06-2022", opt: "Allotment", amount: "24000" },
    { id: 14, date: "10-06-2022", opt: "Expense", amount: "23000" },
    { id: 15, date: "17-06-2022", opt: "Allotment", amount: "3000" },
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
            <Text style={styles.addPaidEntryEntry}>Make Entry</Text>
            <TextInput
              placeholder="Amount"
              style={styles.materialName1Entry}
            ></TextInput>
            <View style={styles.paidSelectRowEntry}>
              <TouchableOpacity
                style={[
                  styles.paidSelectEntry,
                  {
                    backgroundColor: EntrySelected
                      ? "rgba(80,227,194,1)"
                      : "#E6E6E6",
                  },
                ]}
                onPress={() => {
                  setSelectedEntry(1);
                }}
              >
                <Text style={styles.paidEntry}>Allot</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.paidSelect1Entry,
                  {
                    backgroundColor: EntrySelected
                      ? "#E6E6E6"
                      : "rgba(80,227,194,1)",
                  },
                ]}
                onPress={() => {
                  setSelectedEntry(0);
                }}
              >
                <Text style={styles.purchaseEntry}>Expense</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.saveGrpButton1Entry}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.makeEntryEntry}>Make Entry</Text>
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
        <Text style={styles.addNewSite}>Accounting Supervisor</Text>
      </View>
      <View style={styles.rect5}>
        <View style={styles.pendingAmtGrp1Row}>
          <View style={styles.pendingAmtGrp1}>
            <Text style={styles.totalAllotted}>Total Allotted</Text>
            <View style={styles.amtPnd1}>
              <Text style={styles.amount2}>250000</Text>
            </View>
          </View>
          <View style={styles.pendingAmtGrp2}>
            <Text style={styles.totalExpense}>Total Expense</Text>
            <View style={styles.amtPnd2}>
              <Text style={styles.amount8}>175000</Text>
            </View>
          </View>
        </View>
        <View style={styles.rect2Row}>
          <View style={styles.rect2}>
            <Text style={styles.date}>Date</Text>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.allotExp5}>Allot / Exp</Text>
          </View>
          <View style={styles.rect4}>
            <Text style={styles.expense}>Expense</Text>
          </View>
        </View>
      </View>
      <View style={styles.button3}>
        {/* <Text style={styles.selectSite}>Select Site</Text>
        {renderLabel()} */}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "white" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
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
              style={styles.icon}
              color={isFocus ? "blue" : "black"}
              name="Safety"
              size={width * 0.05}
            />
          )}
        />
      </View>
      <View style={styles.workersList}>
        <FlatList
          horizontal={false}
          keyExtractor={(item) => item.id}
          data={TrData}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          /* contentContainerStyle={
              styles.workersList_contentContainerStyle
            } */
          renderItem={(item) => (
            <View style={styles.rect8StackStack}>
              <View style={styles.rect8Stack}>
                <View style={styles.rect8}>
                  <View style={styles.dateGrpRow}>
                    <View style={styles.dateGrp}>
                      <Text style={styles.date1}>{item.item.date}</Text>
                    </View>
                    <View style={styles.detailGrp}>
                      <Text style={styles.allotExpense}>{item.item.opt}</Text>
                    </View>
                    <View style={styles.amountGrp}>
                      <Text style={styles.amount3}>{item.item.amount}</Text>
                    </View>
                  </View>
                  <View style={styles.dividerLine}></View>
                </View>
              </View>
            </View>
          )}
        ></FlatList>
        <View style={styles.rect6}></View>
        <View style={styles.rect7}></View>
      </View>
      <View style={styles.button4Row}>
        <TouchableOpacity
          style={styles.button4}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.allot2}>Allot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button5}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addExpense}>Add Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button6}>
          <Text style={styles.share}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerEntry: {
    flex: 1,
  },
  addMaterialModal1Entry: {
    width: width * 0.95,
    height: height * 0.4,
    backgroundColor: "rgba(170,212,128,1)",
    borderRadius: 26,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.09,
    shadowRadius: 0,
    marginTop: height * 0.2,
    marginLeft: width * 0.02,
  },
  addPaidEntryEntry: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    width: width * 0.95,
    height: height * 0.05,
    fontSize: width * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.0,
  },
  materialName1Entry: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: height * 0.05,
    width: width * 0.8,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 100,
    textAlign: "center",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.04,
    shadowRadius: 0,
    marginTop: height * 0.03,
    marginLeft: width * 0.085,
  },
  paidSelectEntry: {
    width: width * 0.4,
    height: height * 0.05,
    // backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: width * 0.05,
  },
  paidEntry: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: width * 0.04,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    width: width * 0.4,
    height: height * 0.05,
  },
  paidSelect1Entry: {
    width: width * 0.4,
    height: height * 0.05,
    //backgroundColor: "rgba(80,227,194,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: width * 0.06,
  },
  purchaseEntry: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: width * 0.04,
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    width: width * 0.4,
    height: height * 0.05,
  },
  paidSelectRowEntry: {
    height: height * 0.05,
    width: width * 0.95,
    flexDirection: "row",
    marginTop: height * 0.03,
    marginLeft: width * 0.0,
    //backgroundColor: "rgba(54,138,236,1)",
  },
  saveGrpButton1Entry: {
    width: width * 0.3,
    height: height * 0.05,
    marginLeft: width * 0.32,
    marginTop: height * 0.05,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  makeEntryEntry: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
    fontSize: width * 0.035,
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
    marginRight: width * 0.25,
  },
  placeholderStyle: {
    fontSize: width * 0.05,
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
    marginLeft: -width * 0.25,
    alignSelf: "center",
    width: width * 0.5,
  },
  selectedTextStyle: {
    fontSize: width * 0.05,
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
    backgroundColor: "rgba(54,138,236,1)",
  },
  workersList: {
    width: width,
    height: height * 0.55,
    backgroundColor: "rgba(160,231,229,1)",
    borderRadius: 20,
    marginTop: height * 0.15,
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
    top: height * 0.005,
    width: width,
    height: height * 0.054,
    position: "absolute",
  },
  dateGrp: {
    flexDirection: "row",
    height: height * 0.05,
    width: width * 0.315,
    marginLeft: width * 0.005,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
  },
  date1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: width * 0.035,
    height: height * 0.04,
    width: width * 0.25,
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
  },
  detailGrp: {
    flexDirection: "row",
    height: height * 0.05,
    width: width * 0.315,
    marginLeft: width * 0.015,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    justifyContent: "center",
  },
  allotExpense: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: width * 0.035,
    height: height * 0.04,
    width: width * 0.25,
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
  },
  amountGrp: {
    flexDirection: "row",
    height: height * 0.05,
    width: width * 0.315,
    marginLeft: width * 0.015,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
  },
  amount3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: width * 0.035,
    height: height * 0.04,
    width: width * 0.25,
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
  },
  dateGrpRow: {
    height: height * 0.05,
    width: width * 1,
    flexDirection: "row",
    marginTop: height * 0.005,
  },
  dividerLine: {
    width: width,
    height: height * 0.005,
    backgroundColor: "rgba(74,144,226,1)",
    marginTop: height * 0.005,
  },
  rect6: {
    left: width * 0.3225,
    width: width * 0.01,
    height: height * 0.555,
    marginTop: -height * 0.01,
    position: "absolute",
    backgroundColor: "#E6E6E6",
  },
  rect7: {
    left: width * 0.6525,
    width: width * 0.01,
    height: height * 0.555,
    marginTop: -height * 0.01,
    position: "absolute",
    backgroundColor: "#E6E6E6",
  },
  rect8Stack: {
    top: 0,
    left: 0,
    width: width * 1,
    height: height * 0.075,
    position: "absolute",
  },
  rect9: {
    top: 67,
    width: 368,
    height: 54,
    position: "absolute",
    left: 0,
  },
  dateGrp1: {
    width: 121,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
  },
  date2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    alignSelf: "center",
  },
  detailGrp1: {
    width: 121,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    justifyContent: "center",
    marginLeft: 3,
  },
  allotExpense2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    alignSelf: "center",
  },
  amountGrp1: {
    width: 121,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    marginLeft: 3,
  },
  amount5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    textAlign: "center",
    alignSelf: "center",
  },
  dateGrp1Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 1,
    marginRight: -1,
  },
  dividerLine1: {
    width: 368,
    height: 3,
    backgroundColor: "rgba(74,144,226,1)",
    marginTop: 4,
  },
  rect10: {
    top: 121,
    width: 368,
    height: 54,
    position: "absolute",
    left: 0,
  },
  dateGrp2: {
    width: 121,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    textAlign: "center",
    width: 81,
    height: 18,
    alignSelf: "center",
  },
  detailGrp2: {
    width: 121,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    justifyContent: "center",
    marginLeft: 3,
  },
  allotExpense3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    alignSelf: "center",
  },
  amountGrp2: {
    width: 121,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    marginLeft: 3,
  },
  amount6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    textAlign: "center",
    alignSelf: "center",
  },
  dateGrp2Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 1,
    marginRight: -1,
  },
  dividerLine2: {
    width: 368,
    height: 3,
    backgroundColor: "rgba(74,144,226,1)",
    marginTop: 4,
  },
  rect11: {
    top: 176,
    width: 368,
    height: 54,
    position: "absolute",
    left: 0,
  },
  dateGrp3: {
    width: 121,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
  },
  date4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    alignSelf: "center",
  },
  detailGrp3: {
    width: 121,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    justifyContent: "center",
    marginLeft: 3,
  },
  allotExpense4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    alignSelf: "center",
  },
  amountGrp3: {
    width: 121,
    height: 38,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.05,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    justifyContent: "center",
    marginLeft: 3,
  },
  amount7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    textAlign: "center",
    alignSelf: "center",
  },
  dateGrp3Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 1,
    marginRight: -1,
  },
  dividerLine3: {
    width: 368,
    height: 3,
    backgroundColor: "rgba(74,144,226,1)",
    marginTop: 4,
  },
  rect8StackStack: {
    width: width * 1,
    height: height * 0.07,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
  },
  supplierName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 28,
    marginTop: 7,
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -674,
    marginRight: 56,
  },
  rect5: {
    width: width * 1,
    height: height * 0.145,
    backgroundColor: "rgba(56,83,115,1)",
    borderRadius: 12,
    marginTop: height * 0.04,
  },
  pendingAmtGrp1: {
    width: width * 0.4,
    height: height * 0.08,
    marginLeft: width * 0.03,
    backgroundColor: "rgba(66,175,149,1)",
    borderRadius: 98,
  },
  totalAllotted: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: width * 0.04,
    marginTop: height * 0.01,
    marginLeft: width * 0.01,
  },
  amtPnd1: {
    width: width * 0.3,
    height: height * 0.03,
    backgroundColor: "#E6E6E6",
    borderRadius: 71,
    justifyContent: "center",
    marginTop: height * 0.005,
    marginLeft: width * 0.05,
  },
  amount2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    width: width * 0.3,
    height: height * 0.03,
    marginTop: height * 0.005,
  },
  pendingAmtGrp2: {
    width: width * 0.4,
    height: height * 0.08,
    marginLeft: width * 0.14,
    backgroundColor: "rgba(231,99,90,1)",
    borderRadius: 98,
  },
  totalExpense: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: width * 0.04,
    marginTop: height * 0.01,
    marginLeft: width * 0.01,
  },
  amtPnd2: {
    width: width * 0.3,
    height: height * 0.03,
    backgroundColor: "#E6E6E6",
    borderRadius: 71,
    justifyContent: "center",
    marginTop: height * 0.005,
    marginLeft: width * 0.05,
  },
  amount8: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    width: width * 0.3,
    height: height * 0.03,
    marginTop: height * 0.005,
  },
  pendingAmtGrp1Row: {
    height: height * 0.08,
    width: width,
    flexDirection: "row",
    marginTop: height * 0.02,
    marginRight: width * 0.0,
  },
  rect2: {
    width: width * 0.31,
    height: height * 0.04,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: height * 0.005,
    marginLeft: width * 0.011,
  },
  date: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: width * 0.04,
    textAlign: "center",
    alignSelf: "center",
  },
  rect3: {
    width: width * 0.31,
    height: height * 0.04,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: height * 0.005,
    marginLeft: width * 0.02,
  },
  allotExp5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    alignSelf: "center",
  },
  rect4: {
    width: width * 0.31,
    height: height * 0.04,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: height * 0.005,
    marginLeft: width * 0.021,
  },
  expense: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    alignSelf: "center",
  },
  rect2Row: {
    height: height * 0.05,
    width: width * 1,
    flexDirection: "row",
    marginTop: height * 0.0,
  },
  button3: {
    width: width * 0.8,
    height: height * 0.045,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: -height * 0.19,
    marginLeft: width * 0.1,
  },
  selectSite: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
  },
  button4: {
    width: width * 0.3,
    height: height * 0.05,
    marginLeft: width * 0.01,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
  },
  allot2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
  },
  button5: {
    width: width * 0.3,
    height: height * 0.05,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: width * 0.035,
  },
  addExpense: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
  },
  button6: {
    width: width * 0.3,
    height: height * 0.05,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: width * 0.035,
  },
  share: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
    fontSize: width * 0.03,
  },
  button4Row: {
    height: height * 0.05,
    width: width * 1,
    flexDirection: "row",
    marginTop: height * 0.01,
    marginRight: width * 0.0,
  },
});
