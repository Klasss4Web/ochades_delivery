import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        // className="w-50 h-50"
        style={{ width: 50, height: 50 }}
        source={{ uri: imgUrl }}
        // resizeMode={"cover"}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginRight: 10,
  },
  title: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontWeight: "bold",
  },
});
