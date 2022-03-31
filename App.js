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
import { Home } from "./screens/Home";
import { Supervisor } from "./screens/Supervisor";
import { AddSupervisor } from "./screens/AddSupervisor";
import { AddSite } from "./screens/AddSite";
import { CompletedSite } from "./screens/CompletedSite";
import { ListSites } from "./screens/ListSites";
import { SiteImages } from "./screens/SiteImages";
import { SiteInformation } from "./screens/SiteInformation";
import { SitesOngoing } from "./screens/SitesOngoing";
import { WorkerInformation } from "./screens/WorkerInformation";
import { WorkerList } from "./screens/WorkerList";

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
    </UnAuthStackNav.Navigator>
  );
};

export const AuthStack = ({}) => {
  return (
    <AuthStackNav.Navigator>
      <AuthStackNav.Screen
        name="Home"
        component={Home}
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
        {UserToken ? <AuthStack></AuthStack> : <UnAuthStack></UnAuthStack>}
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
