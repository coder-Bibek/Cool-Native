import React from "react";
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
} from "react-native";
import { useState } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

const Recipe = ({ source, calories, image }) => {
  return (
    <>
      <TouchableHighlight
        onLongPress={() => alert("liked")}
       underlayColor="white"
      >
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.foodImage} />
          <Text style={styles.foodText}>{source}</Text>
          <Text style={styles.calorieText}>Calorie:{calories}</Text>
        </View>
      </TouchableHighlight>
    </>
  );
};
const styles = StyleSheet.create({
  foodImage: {
    width: Dimensions.get("screen").width - 20,
    height: Dimensions.get("window").height - 400,
  },
  container: {
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    padding: 4,
    width: Dimensions.get("screen").width - 10,
    borderRadius: 10,
  },
  foodText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Recipe;
