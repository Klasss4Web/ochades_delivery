import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  if (items?.length === 0) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Basket")}
      >
        <Text style={styles.items}>{items.length}</Text>
        <Text style={styles.viewBasket}>View Basket</Text>
        <Text style={styles.currency}>
          <Currency quantity={parseInt(basketTotal, 10)} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    position: "absolute",
    right: 0,
    left: 0,
    flaxDirection: "row",
    bottom: 10,
    zIndex: 1000,
    // alignSelf: "stretch",
  },
  btnStyle: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    // flex: 1,
    // flexGrow: 1,
    // alignSelf: "stretch",
    backgroundColor: "#00CCBB",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },

  items: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#01a296",
    fontSize: 18,
    color: "#fff",
  },
  viewBasket: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  currency: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
