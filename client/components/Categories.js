import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Categories card */}
      {categories?.map((category, key) => (
        <CategoryCard
          key={category?.id}
          imgUrl={category?.image}
          title={category?.name}
        />
      ))}

      
      {/* <Text>Categories</Text> */}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
