import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
  selectBasketItemsWithIdthId,
  removeFromBasket,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithIdthId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        style={{
          ...styles.container,
          borderBottomColor: isPressed ? "#fff" : "#f4f4f4",
        }}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View style={styles.detailsRow}>
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text style={styles.titleText}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>
              <Currency quantity={parseInt(price, 10)} currency="USD" />
            </Text>
          </View>

          <View>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={{ backgroundColor: "#fff", paddingHorizontal: 18 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 10,
            }}
          >
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <AntDesign
                name="minuscircle"
                color={items.length > 0 ? "#00CCBB" : "gray"}
                size={30}
              />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10, fontSize: 20 }}>
              {items?.length}
            </Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <AntDesign name="pluscircle" color="#00CCBB" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#f4f4f4",
    padding: 15,
  },
  detailsRow: {
    flexDirection: "row",
  },
  titleText: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "gray",
    opacity: 0.6,
    marginBottom: 2,
  },
  image: {
    width: 60,
    height: 60,
    padding: 10,
    backgroundColor: "grey",
    borderWidth: 1,
    borderColor: "#f4f4f4",
    borderRadius: 10,
  },
});
