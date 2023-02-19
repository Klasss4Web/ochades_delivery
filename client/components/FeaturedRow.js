import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
// import { restaurants } from "../data/restaurants";

const FeaturedRow = ({ id, restaurants, title, description }) => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <AntDesign
          name="arrowright"
          color="#00CCBB"
          size={20}
          // onPress={() => setModalOpen(false)}
          // style={{ ...styles.modalToggle }}
        />
      </View>

      <Text style={styles.descriptions}>{description}</Text>
      <ScrollView
        style={styles.scrollview}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
       
        {restaurants?.map((restaurant, key) => (
          <RestaurantCard
            key={key}
            id={key}
            imgUrl={restaurant?.image}
            title={restaurant?.name}
            rating={restaurant?.rating}
            genre={restaurant?.genre}
            address={restaurant?.address}
            shortDescription={restaurant?.short_description}
            dishes={restaurant?.dishes}
            long={restaurant?.long}
            lat={restaurant?.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 20,
  },
  descriptions: {
    paddingHorizontal: 20,
    color: "gray",
    // fontWeight: "bold",
    fontSize: 16,
  },
  scrollview: {
    paddingTop: 20,
  },
});
