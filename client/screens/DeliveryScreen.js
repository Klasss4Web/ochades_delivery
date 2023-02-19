import {
  // Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import * as Progress from "react-native-progress";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="flex-1 bg-[#00B573] z-50 relative">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.cancel}
          >
            <MaterialIcons name="cancel" color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Guide</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md flex-1">
          <View className="flex-1 flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated arrival</Text>
              <Text className="text-4xl font-bold">35-45 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant?.title} is being processed
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        // mapType={Platform.OS == "android" ? "mutedStandard" : "standard"}
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
        provider={PROVIDER_GOOGLE}
        // customMapStyle={MapStyle}
      >
        <Marker
          //   draggable
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.shortDescription}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg text-gray-500">Ochade Emmanuel</Text>
          <Text className="text-gray-400">Your Dispatcher</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg font-bold mr-5">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({});
