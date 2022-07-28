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
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
const { height, width } = Dimensions.get("screen");

export const BuilderSupplier = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dataSup = [
    { name: "Supplier 1", pendingAmount: 2000, id: "1" },
    { name: "Supplier 2", pendingAmount: 4500, id: "2" },
    { name: "Supplier 3", pendingAmount: 25000, id: "3" },
    { name: "Supplier 4", pendingAmount: 15000, id: "4" },
    { name: "Supplier 5", pendingAmount: 10000, id: "5" },
    { name: "Supplier 6", pendingAmount: 1300, id: "6" },
    { name: "Supplier 7", pendingAmount: 2500, id: "7" },
    { name: "Supplier 8", pendingAmount: 1500, id: "8" },
  ];
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
        <View style={styles.containerAddSupplier}>
          <View style={styles.addMaterialModalAddSupplier}>
            <Text style={styles.addSupplierTitleAddSupplier}>Add Supplier</Text>
            <TextInput
              placeholder="Supplier Name"
              style={styles.materialNameAddSupplier}
            ></TextInput>
            <TextInput
              placeholder="Supplier Bussiness"
              style={styles.materialName1AddSupplier}
            ></TextInput>
            <TextInput
              placeholder="Select Material"
              style={styles.selectMaterialMultiSelectAddSupplier}
            ></TextInput>
            <TextInput
              placeholder="Supplier Contact"
              style={styles.supplierContactAddSupplier}
            ></TextInput>
            <TouchableOpacity
              style={styles.saveGrpButton1AddSupplier}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.add2AddSupplier}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
        <Text style={styles.headerTitle}>Builder Supplier</Text>
        <TouchableOpacity
          style={styles.headerSideButton}
          onPress={() => setModalVisible(true)}
        >
          <MaterialCommunityIconsIcon
            name="plus"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.workersList}>
        <FlatList
          horizontal={false}
          keyExtractor={(item) => item.id}
          data={dataSup}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          //contentContainerStyle={styles.workersList_contentContainerStyle}
          renderItem={(item) => (
            <TouchableOpacity
              style={styles.supplierBtn}
              onPress={() => {
                navigation.push("BuilderSupplierTransactions");
              }}
            >
              <View style={styles.workrNameRow}>
                <View style={styles.workrName}>
                  <Text style={styles.supplierName}>Supplier Name</Text>
                </View>
                <TouchableOpacity style={styles.absent}>
                  <Text style={styles.a2}>Delete</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.pendingAmtGrp}>
                <View style={styles.pendingAmountRow}>
                  <Text style={styles.pendingAmount}>Pending Amount</Text>
                  <View style={styles.amtPnd}>
                    <Text style={styles.amount}>Amount /-</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
      {/* <View style={styles.shareGrpRow}>
        <View style={styles.shareGrp}>
          <Text style={styles.share}>Share</Text>
        </View>
        <View style={styles.saveGrpButton}>
          <Text style={styles.save}>Save</Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  containerAddSupplier: {
    flex: 1,
  },
  addMaterialModalAddSupplier: {
    width: width * 0.95,
    height: height * 0.55,
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
  addSupplierTitleAddSupplier: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    width: width * 0.95,
    height: height * 0.05,
    fontSize: width * 0.05,
    marginTop: height * 0.02,
    marginLeft: width * 0.0,
  },
  materialNameAddSupplier: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.02,
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
  materialName1AddSupplier: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.02,
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
  selectMaterialMultiSelectAddSupplier: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.02,
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
  supplierContactAddSupplier: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: height * 0.02,
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
  saveGrpButton1AddSupplier: {
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
  add2AddSupplier: {
    fontFamily: "roboto-regular",
    color: "#121212",
    alignSelf: "center",
    fontSize: width * 0.035,
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
    fontSize: height * 0.03,
    textAlign: "center",
    width: width * 0.5,
    marginLeft: width * 0.1,
    marginTop: -height * 0.015,
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
    fontSize: height * 0.05,
    marginTop: height * 0.0,
    marginLeft: width * 0.03,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(74,144,226,1)",
  },
  workersList: {
    width: width,
    height: height * 0.8,
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
    height: height * 1,
  },
  supplierBtn: {
    width: width * 0.95,
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
    flexDirection: "row",
    marginTop: height * 0.03,
    marginLeft: width * 0.0,
    alignSelf: "center",
  },
  workrName: {
    width: width * 0.75,
    height: height * 0.04,
    marginTop: height * 0.01,
    marginLeft: width * 0.0,
    backgroundColor: "#E6E6E6",
    borderRadius: 31,
  },
  supplierName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: width * 0.05,
    marginTop: height * 0.0,
    marginLeft: width * 0.06,
    width: width * 0.6,
    height: height * 0.04,
  },
  absent: {
    width: width * 0.15,
    height: height * 0.05,
    backgroundColor: "rgba(230,80,80,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginLeft: width * 0.01,
    marginTop: height * 0.005,
  },
  a2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: width * 0.03,
  },
  workrNameRow: {
    height: height * 0.05,
    width: width * 0.85,
    flexDirection: "row",
    marginTop: height * 0.01,
    marginLeft: width * 0.045,
  },
  pendingAmtGrp: {
    width: width * 0.6,
    height: height * 0.04,
    backgroundColor: "rgba(66,175,149,1)",
    borderRadius: 98,
    flexDirection: "row",
    marginTop: height * 0.07,
    marginLeft: -width * 0.8,
  },
  pendingAmount: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    textAlignVertical: "center",
    height: height * 0.03,
    fontSize: height * 0.02,
    marginTop: height * 0.005,
    marginLeft: -width * 0.0,
  },
  amtPnd: {
    width: width * 0.4,
    height: height * 0.03,
    backgroundColor: "#E6E6E6",
    borderRadius: 71,
    marginLeft: width * 0.03,
    marginTop: height * 0.005,
  },
  amount: {
    color: "#121212",
    fontFamily: "roboto-regular",
    textAlign: "center",
    textAlignVertical: "center",
    height: height * 0.03,
    fontSize: height * 0.02,
    marginTop: height * 0.0,
    marginLeft: -width * 0.0,
  },
  pendingAmountRow: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    marginRight: -84,
    marginLeft: 8,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 61,
    marginTop: 7,
  },
  button: {
    width: 39,
    height: 37,
    marginLeft: 52,
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
