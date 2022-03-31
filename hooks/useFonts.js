import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    "roboto-regular": require("../assets/fonts/roboto-regular.ttf"),
    "roboto-700": require("../assets/fonts/roboto-700.ttf"),
  });
