import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";

import { MaterialIcons } from "@expo/vector-icons";

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const basketTotal = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item?.id] = results[item?.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
        <View
          style={{ backgroundColor: "#fff", padding: 20 }}
          className="shadow-xs border-b border-[#00CCBB]"
        >
          <View>
            <Text style={styles.titleText}>Basket</Text>
            <Text style={{ textAlign: "center", color: "gray" }}>
              {restaurant?.title}
            </Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} style={styles.cancel}>
            <MaterialIcons name="cancel" color="#00CCBB" size={30} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 45 - 70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-300">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-4"
            >
              <Text className="text-[#00CCBB]">{items?.length} x</Text>
              <Image
                source={{ uri: items[0]?.image }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items?.[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency
                  quantity={parseInt(items?.[0]?.price, 10)}
                  currency="USD"
                />
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-[#ee2121] text-xs"
                  onPress={() => {
                    dispatch(removeFromBasket({ id: Number(key) }));
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white space-y-4 mt-5">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={parseInt(basketTotal, 10)} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={parseInt(7, 10)} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Total Price</Text>
            <Text className="font-extra-bold">
              <Currency
                quantity={parseInt(basketTotal, 10) + 7}
                currency="USD"
              />
            </Text>
          </View>
          <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4" onPress={() => navigation.navigate("PreparingOrderScreen")}>
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  titleText: {
    color: "#000",
    opacity: 0.8,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  cancel: {
    position: "absolute",
    top: 12,
    right: 20,
  },
});
