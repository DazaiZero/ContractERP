import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
const { height, width } = Dimensions.get("screen");
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

export const MaterialEntry = ({ route, navigation }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [valueSup, setSupValue] = useState(null);
  const [isFocusSup, setIsFocusSup] = useState(false);
  const [valueMat, setMatValue] = useState(null);
  const [isFocusMat, setIsFocusMat] = useState(false);
  const [selected, setSelected] = useState([]);
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
  const dataSup = [
    { name: "Supplier 1", id: "1" },
    { name: "Supplier 2", id: "2" },
    { name: "Supplier 3", id: "3" },
    { name: "Supplier 4", id: "4" },
    { name: "Supplier 5", id: "5" },
    { name: "Supplier 6", id: "6" },
    { name: "Supplier 7", id: "7" },
    { name: "Supplier 8", id: "8" },
  ];
  const dataMat = [
    { name: "Material 1", id: "1" },
    { name: "Material 2", id: "2" },
    { name: "Material 3", id: "3" },
    { name: "Material 4", id: "4" },
    { name: "Material 5", id: "5" },
    { name: "Material 6", id: "6" },
    { name: "Material 7", id: "7" },
    { name: "Material 8", id: "8" },
  ];
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.name}</Text>
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerCommon1}>
        <TouchableOpacity
          style={styles.headerbackButton1}
          onPress={() => {
            navigation.push("MaterialType");
          }}
        >
          <IoniconsIcon
            name="ios-arrow-back"
            style={styles.headerBackIcon1}
          ></IoniconsIcon>
        </TouchableOpacity>
        <Text style={styles.addNewSite}>Material Entry</Text>
      </View>
      <View style={styles.dateSelectorLayer}>
        <View style={styles.selectedSites}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataSite}
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
              setValue(item.id);
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
        <View style={styles.selectedSites1}>
          <Dropdown
            style={[styles.dropdownSup, isFocusSup && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyleSup}
            selectedTextStyle={styles.selectedTextStyleSup}
            inputSearchStyle={styles.inputSearchStyleSup}
            iconStyle={styles.iconStyleSup}
            data={dataSup}
            search
            maxHeight={300}
            labelField="name"
            valueField="id"
            placeholder={!isFocusSup ? "Select Supplier" : "..."}
            searchPlaceholder="Search Site"
            value={valueSup}
            onFocus={() => setIsFocusSup(true)}
            onBlur={() => setIsFocusSup(false)}
            onChange={(item) => {
              setSupValue(item.id);
              setIsFocusSup(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.iconSup}
                color={isFocusSup ? "blue" : "black"}
                name="Safety"
                size={width * 0.05}
              />
            )}
          />
        </View>
        <View style={styles.selectedSites2}>
          <Dropdown
            style={[styles.dropdownMat, isFocusMat && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyleMat}
            selectedTextStyle={styles.selectedTextStyleMat}
            inputSearchStyle={styles.inputSearchStyleMat}
            iconStyle={styles.iconStyleMat}
            data={dataMat}
            search
            maxHeight={300}
            labelField="name"
            valueField="id"
            placeholder={!isFocusMat ? "Select Material" : "..."}
            searchPlaceholder="Search Site"
            value={valueMat}
            onFocus={() => setIsFocusMat(true)}
            onBlur={() => setIsFocusMat(false)}
            onChange={(item) => {
              setMatValue(item.id);
              setIsFocusMat(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.iconMat}
                color={isFocusMat ? "blue" : "black"}
                name="Safety"
                size={width * 0.05}
              />
            )}
          />
          {/* <MultiSelect
            style={styles.dropdownMul}
            placeholderStyle={styles.placeholderStyleMul}
            selectedTextStyle={styles.selectedTextStyleMul}
            inputSearchStyle={styles.inputSearchStyleMul}
            iconStyle={styles.iconStyleMul}
            data={dataMat}
            labelField="name"
            valueField="id"
            placeholder="Select item"
            value={selected}
            search
            searchPlaceholder="Search..."
            onChange={(item) => {
              setSelected(item);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.iconMul}
                color="black"
                name="Safety"
                size={20}
              />
            )}
            renderItem={renderItem}
            renderSelectedItem={(item, unSelect) => (
              <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                <View style={styles.selectedStyleMul}>
                  <Text style={styles.textSelectedStyleMul}>{item.name}</Text>
                  <AntDesign color="black" name="delete" size={17} />
                </View>
              </TouchableOpacity>
            )}
          /> */}
        </View>
        <TextInput
          placeholder="Add Description"
          clearButtonMode="never"
          multiline={true}
          numberOfLines={5}
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.placeholder}
        ></TextInput>
        <TextInput
          placeholder="Add Amount"
          clearButtonMode="never"
          numberOfLines={5}
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.placeholder1}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.saveGrpButton}
        onPress={() => {
          navigation.push("MaterialType");
        }}
      >
        <Text style={styles.save}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownMul: {
    height: 50,
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyleMul: {
    fontSize: 16,
  },
  selectedTextStyleMul: {
    fontSize: 14,
  },
  iconStyleMul: {
    width: 20,
    height: 20,
  },
  inputSearchStyleMul: {
    height: 40,
    fontSize: 16,
  },
  iconMul: {
    marginRight: 5,
  },
  itemMul: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedStyleMul: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyleMul: {
    marginRight: 5,
    fontSize: 16,
  },
  ///
  dropdown: {
    height: height * 0.05,
    width: width * 0.9,
    borderColor: "rgba(74,144,226,1)",
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
    color: "white",
    textAlign: "center",
    marginLeft: -width * 0.25,
    alignSelf: "center",
    width: width * 0.5,
  },
  selectedTextStyle: {
    fontSize: width * 0.05,
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
  dropdownSup: {
    height: height * 0.05,
    width: width * 0.9,
    borderColor: "rgba(74,144,226,1)",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 9,
  },
  iconSup: {
    marginRight: width * 0.25,
  },
  placeholderStyleSup: {
    fontSize: width * 0.05,
    fontFamily: "roboto-regular",
    color: "white",
    textAlign: "center",
    marginLeft: -width * 0.25,
    alignSelf: "center",
    width: width * 0.5,
  },
  selectedTextStyleSup: {
    fontSize: width * 0.05,
    fontFamily: "roboto-regular",
    color: "white",
    textAlign: "center",
    marginLeft: -width * 0.25,
    alignSelf: "center",
    width: width * 0.5,
  },
  iconStyleSup: {
    width: width * 0.04,
    height: height * 0.04,
    marginRight: width * 0.02,
  },
  inputSearchStyleSup: {
    height: height * 0.04,
    fontSize: width * 0.04,
    fontFamily: "roboto-regular",
    color: "rgba(54,138,236,1)",
    textAlign: "center",
  },
  dropdownMat: {
    height: height * 0.05,
    width: width * 0.9,
    borderColor: "rgba(74,144,226,1)",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 9,
  },
  selectedStyle: {
    height: height * 0.05,
    width: width * 0.4,
    borderRadius: 12,
    textAlign: "center",
  },
  iconMat: {
    marginRight: width * 0.25,
  },
  placeholderStyleMat: {
    fontSize: width * 0.05,
    fontFamily: "roboto-regular",
    color: "white",
    textAlign: "center",
    marginLeft: -width * 0.25,
    alignSelf: "center",
    width: width * 0.5,
  },
  selectedTextStyleMat: {
    fontSize: width * 0.05,
    fontFamily: "roboto-regular",
    color: "white",
    textAlign: "center",
    marginLeft: -width * 0.25,
    alignSelf: "center",
    width: width * 0.5,
  },
  iconStyleMat: {
    width: width * 0.04,
    height: height * 0.04,
    marginRight: width * 0.02,
  },
  inputSearchStyleMat: {
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
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
  },
  materialEntry: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 71,
    marginTop: 7,
  },
  icon3Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 49,
    marginRight: 110,
  },
  dateSelectorLayer: {
    width: width,
    height: height * 0.6,
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
    marginTop: 62,
  },
  selectedSites: {
    width: width * 0.9,
    height: height * 0.05,
    backgroundColor: "rgba(120,170,227,1)",
    borderRadius: 25,
    justifyContent: "center",
    marginTop: height * 0.025,
    marginLeft: width * 0.05,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
  },
  selectedSites1: {
    width: width * 0.9,
    height: height * 0.05,
    backgroundColor: "rgba(120,170,227,1)",
    borderRadius: 25,
    justifyContent: "center",
    marginTop: height * 0.025,
    marginLeft: width * 0.05,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
  },
  selectSupplier: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
  },
  selectedSites2: {
    width: width * 0.9,
    height: height * 0.05,
    backgroundColor: "rgba(120,170,227,1)",
    borderRadius: 25,
    justifyContent: "center",
    marginTop: height * 0.025,
    marginLeft: width * 0.05,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
  },
  selectMaterialType: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: height * 0.15,
    width: width * 0.9,
    backgroundColor: "rgba(120,170,227,1)",
    textAlign: "center",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
    marginTop: height * 0.1,
    marginLeft: width * 0.05,
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: height * 0.05,
    width: width * 0.9,
    backgroundColor: "rgba(120,170,227,1)",
    textAlign: "center",
    borderRadius: 15,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.03,
    shadowRadius: 0,
    marginTop: height * 0.03,
    marginLeft: width * 0.05,
  },
  saveGrpButton: {
    width: width * 0.3,
    height: height * 0.05,
    marginLeft: width * 0.35,
    marginTop: height * 0.04,
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
  save: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
  },
});
