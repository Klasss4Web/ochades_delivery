import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        shortDescription,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />

      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: imgUrl }} />
        <TouchableOpacity style={styles.backArrow} onPress={navigation.goBack}>
          <AntDesign name="back" color="green" size={22} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ backgroundColor: "#fff" }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.ratingContainer}>
              <View style={styles.ratings}>
                <AntDesign
                  style={{ opacity: 0.4 }}
                  name="star"
                  color="green"
                  size={18}
                />

                <Text style={{ color: "gray", opacity: 0.4, marginLeft: 10 }}>
                  <Text>{rating}</Text> . {genre}
                </Text>
              </View>
              <View style={styles.ratings}>
                <EvilIcons name="location" color="gray" size={22} />
                <Text style={{ color: "gray", opacity: 0.4 }}>
                  <Text>Nearby</Text> . {address}
                </Text>
              </View>
            </View>
            <Text style={styles.description}>{shortDescription}</Text>
          </View>
          <TouchableOpacity style={styles.allergyQuestion}>
            <EvilIcons name="question" color="gray" size={22} />
            <Text
              style={{
                marginLeft: 5,
                opacity: 0.5,
                fontWeight: "bold",
                flex: 1,
              }}
            >
              Have a food allergy?
            </Text>
            <EvilIcons name="chevron-right" color="gray" size={22} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 65 }}>
          <Text style={{ ...styles.menu, ...styles.titleText }}>Menu</Text>
          {dishes?.map((dish) => (
            <DishRow
              key={dish?.id}
              id={dish?.id}
              name={dish?.name}
              description={dish?.description}
              price={dish?.price}
              image={dish?.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  header: {
    position: "relative",
  },
  image: {
    // width: 200,
    height: 180,
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: "gray",
    padding: 10,
  },
  backArrow: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: "#d4d4d4",
    borderRadius: 20,
    // fontWeight: "bold"
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // justifyContent: "space-between"
  },
  titleText: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    color: "gray",
    opacity: 0.7,
    marginTop: 7,
    paddingBottom: 10,
  },
  allergyQuestion: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#d4d4d4",
    borderBottomColor: "#d4d4d4",
  },
  menu: {
    paddingHorizontal: 22,
    paddingTop: 12,
    marginBottom: 8,
  },
});
