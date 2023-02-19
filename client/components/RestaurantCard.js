import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
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
}) => {

  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("RestaurantScreen", {
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
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Image
        style={styles.image}
        source={{
          uri: imgUrl,
        }}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rating}>
          <AntDesign name="star" color="green" size={20} />
          <Text style={styles.actualRating}>
            {rating} . {genre}
          </Text>
        </View>
        <View style={styles.locationWrapper}>
          <EvilIcons name="location" color="gray" size={22} />
          <Text style={styles.location}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#f4f4f4",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginRight: 8,
  },
  image: {
    // width: 200,
    height: 100,
    borderRadius: 10,
  },
  titleWrapper: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  actualRating: {
    marginLeft: 10,
    // opacity: 0.4
  },
  location: {
    color: "gray",
  },
  locationWrapper: {
    flexDirection: "row",
  },
});
