import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons, AntDesign, Octicons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
// import client from "../sanity";
import { restaurants } from "../data/restaurants";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [text, onChangeText] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

 
  const handleFilter = () => {
    const results = restaurants?.filter((dat) => {
      if (!text) return restaurants;
      return (
        dat?.name?.toLowerCase().includes(text?.toLowerCase()) ||
        dat?.description?.toLowerCase().includes(text?.toLowerCase()) ||
        dat?.address?.toLowerCase().includes(text?.toLowerCase())
      );
    });

    setSearchedData(results ?? []);
  };

   const mapData = searchedData.length > 0 ? searchedData : restaurants;

  return (
    <SafeAreaView className="bg-white pt-5" style={styles.container}>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!!!
          </Text>
          <Text className="font-bold text-xl">
            Current Location
            <AntDesign
              name="downcircle"
              color="#00CCBB"
              size={20}
            />
          </Text>
        </View>
        <MaterialIcons
          name="person"
          color="#00CCBB"
          size={20}
        />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View
          className="flex-row flex-1 space-x-2 bg-gray-200 p-1 items-center rounded-md"
        >
          <MaterialIcons
            name="search"
            color="#00CCBB"
            size={20}
          />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            onChangeText={onChangeText}
            value={text}
            onKeyPress={handleFilter}
          />
        </View>
        <Octicons
          name="filter"
          color="#00CCBB"
          size={26}
        />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        {/* Featured Rows */}
        <FeaturedRow
          restaurants={mapData}
          id={"12345"}
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          restaurants={mapData}
          id={"32345"}
          title="Tasty Discounts"
          description="Everyone's been enjoying this tasty discounts"
        />
        <FeaturedRow
          restaurants={mapData}
          id={"12545"}
          title="Offers near you"
          description="Why not support your local restaurant tonight?"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
