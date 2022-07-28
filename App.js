import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  View,
  PermissionsAndroid,
} from "react-native";
import useFonts from "./hooks/useFonts";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./context";
import { LogIn } from "./screens/LogIn";
import { Home } from "./screens/Admin/Home";
import { Supervisor } from "./screens/Admin/Supervisor";
import { AddSupervisor } from "./screens/Admin/AddSupervisor";
import { AddSite } from "./screens/Admin/AddSite";
import { CompletedSite } from "./screens/Admin/CompletedSite";
import { ListSites } from "./screens/Admin/ListSites";
import { SiteImages } from "./screens/Admin/SiteImages";
import { SiteInformation } from "./screens/Admin/SiteInformation";
import { SitesOngoing } from "./screens/Admin/SitesOngoing";
import { WorkerInformation } from "./screens/Admin/WorkerInformation";
import { WorkerList } from "./screens/Admin/WorkerList";
import { ProfileSetup } from "./screens/Admin/ProfileSetup";
import { AccountingSupervisor } from "./screens/Admin/AccountingSupervisor";
import { Attendance } from "./screens/Admin/Attendance";
import { BuilderSupplier } from "./screens/Admin/BuilderSupplier";
import { BuilderSupplierTransactions } from "./screens/Admin/BuilderSupplierTransactions";
import { MaterialEntry } from "./screens/Admin/MaterialEntry";
import { MaterialType } from "./screens/Admin/MaterialType";
import { Home_Super } from "./screens/Supervisor/Home";
import { AddWorker } from "./screens/Supervisor/AddWorker";
import { SupervisorExpenses } from "./screens/Supervisor/SupervisorExpenses";
import { WorkerAttendanceSupervisor } from "./screens/Supervisor/WorkerAttendanceSupervisor";
import { WorkerManagementSupervisor } from "./screens/Supervisor/WorkerManagementSupervisor";
import { WorkersPayment } from "./screens/Supervisor/WorkersPayment";

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

const UnAuthStackNav = createStackNavigator();
const AuthStackNav = createStackNavigator();
const IntroStack = createStackNavigator();

export const UnAuthStack = ({}) => {
  return (
    <UnAuthStackNav.Navigator>
      <UnAuthStackNav.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerShown: false }}
      />
      <UnAuthStackNav.Screen
        name="ProfileSetup"
        component={ProfileSetup}
        options={{ headerShown: false }}
      />
    </UnAuthStackNav.Navigator>
  );
};

export const AuthStack = ({}) => {
  return (
    <AuthStackNav.Navigator>
      <AuthStackNav.Screen
        name="Home"
        component={Home_Super}
        options={{ headerShown: false }}
      />
      {/* Supervisor Stack */}
      <AuthStackNav.Screen
        name="AddWorker"
        component={AddWorker}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="SupervisorExpenses"
        component={SupervisorExpenses}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="WorkerAttendanceSupervisor"
        component={WorkerAttendanceSupervisor}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="WorkerManagementSupervisor"
        component={WorkerManagementSupervisor}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="WorkersPayment"
        component={WorkersPayment}
        options={{ headerShown: false }}
      />
      {/* //// */}
      <AuthStackNav.Screen
        name="Home_Super"
        component={Home_Super}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="AccountingSupervisor"
        component={AccountingSupervisor}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="BuilderSupplier"
        component={BuilderSupplier}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="BuilderSupplierTransactions"
        component={BuilderSupplierTransactions}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="Attendance"
        component={Attendance}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="MaterialEntry"
        component={MaterialEntry}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="MaterialType"
        component={MaterialType}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="Supervisor"
        component={Supervisor}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="AddSupervisor"
        component={AddSupervisor}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="AddSite"
        component={AddSite}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="CompletedSite"
        component={CompletedSite}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="ListSites"
        component={ListSites}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="SiteImages"
        component={SiteImages}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="SiteInformation"
        component={SiteInformation}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="SitesOngoing"
        component={SitesOngoing}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="WorkerInformation"
        component={WorkerInformation}
        options={{ headerShown: false }}
      />
      <AuthStackNav.Screen
        name="WorkerList"
        component={WorkerList}
        options={{ headerShown: false }}
      />
    </AuthStackNav.Navigator>
  );
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [UserToken, setUserToken] = useState(null);
  const [IntroVisited, setIntroVisited] = useState(false);

  const GlobalVariables = {
    fontsLoaded,
    setFontsLoaded,
    UserToken,
    setUserToken,
    IntroVisited,
    setIntroVisited,
  };

  const LoadFonts = async () => {
    await useFonts();
  };

  const InitApp = async () => {
    //AsyncStorage.clear();
    await AsyncStorage.getItem("IntroVisited", (err, token) => {
      setIntroVisited(token);
    });
    await AsyncStorage.getItem("UserToken", (err, token) => {
      setUserToken(token);
    });
  };

  useEffect(() => {
    console.log("App.js");
    console.log(UserToken);
    console.log(IntroVisited);
    InitApp();
  }, []);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={GlobalVariables}>
      <StatusBar
        animated={true}
        backgroundColor="#26383A"
        barStyle={STYLES[0]}
        showHideTransition={TRANSITIONS[0]}
        hidden={false}
      />
      <NavigationContainer style={styles.container}>
        {!UserToken ? <AuthStack></AuthStack> : <UnAuthStack></UnAuthStack>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
