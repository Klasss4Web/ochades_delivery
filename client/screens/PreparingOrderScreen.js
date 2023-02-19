import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 4000);
  }, []);
  return (
    <SafeAreaView
      style={styles.container}
      className="flex-1 justify-center items-center bg-[#00B573]"
    >
      <Animatable.Image
        className="w-96 h-96"
        source={require("../assets/splash.gif")}
        animation="slideInUp"
        iterationCount={1}
      />
      {/* <Image className="w-96 h-96" source={require("../assets/splash.gif")} /> */}
      <Animatable.Text
        className="text-lg my-10 text-white font-bold text-center"
        animation="slideInUp"
        iterationCount={1}
      >
        Waiting for restaurant to accept your order!!!
      </Animatable.Text>
      <Progress.Bar size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
