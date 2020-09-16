import React, { useState, useEffect } from "react";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  StatusBar,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Recipe from "./Recipe";
import * as Location from "expo-location";
const HomeScreen = ({ navigation }) => {
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      myOwnColor: '#BADA55',
    }
  };
  const APP_ID = "ab5d35ef";
  const APP_KEY = "4f7394bdfb7c4817c4df1bafbaedccb4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [hold, setHold] = useState("chicken");
  useEffect(() => {});
  useEffect(() => {
    getRecipes();
  }, [hold]);
  const getRecipes = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status != "granted") {
      alert("access denied");
    }
    const response = await fetch(
      `https://api.edamam.com/search?q=${hold}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = (text) => {
    setSearch(text);
  };
  const getSearch = (e) => {
    e.preventDefault()

    if (search === "") {
      setHold("chicken");
    } else {
      setHold(search);
    }
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerContainer}>
          {/* <Button
            title="Add Item"
            
          /> */}
         {/* <Button variant="contained">Default</Button> */}
         <Button mode="outlined"   onPress={() => alert("currently unavailable")}>
    Add Item
  </Button>
        </View>
      ),
    });
  });
  return (
    <View style={styles.Container}>
      <View style={styles.searchContainer}>
{/* <Searchbar value={search} onChangeText={updateSearch} autoCapitalize="none" placeholder="Search" style={{margin:10,flex:1,height:40}}  clearIcon={()=><Text></Text>} /> */}
         <TextInput
     placeholder="Enter a food item"
      value={search}
      onChangeText={updateSearch}
      autoCapitalize="none"
      mode="outlined"
      
     style={{
       flex:0.9,
       height:40,
       borderColor:"transparent" ,
       backgroundColor:"rgba(255,255,255,1)"
     }}
    />
      {/* <Button variant="contained">Default</Button> */}
      <Button mode="outlined" color="red" style={{backgroundColor:"rgba(255,255,255,1)",margin:5,}} onPress={getSearch} disabled={!search}>Search</Button> 
      </View> 

      {/* <ScrollView>
      
      </ScrollView> */}
<PaperProvider theme={theme}>
  <ScrollView>
<Text style={{ color: "red", fontSize: 18,fontWeight:"bold" }}>
          {hold === "chicken" ? "" : `Results found:${recipes.length}`}
        </Text>
        {recipes.map((recipe, i) => (
          <Recipe
            key={i}
            source={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
        </ScrollView>
    </PaperProvider>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",

  },
  searchContainer: {
    width:"100%",
    height:70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-around",
    backgroundColor: "wheat",
  },
  headerContainer: {
    right: 20,
    borderRadius: 25,
  },
  searchBox: {
    borderWidth: 2,
    backgroundColor: "rgba(255,255,255,1)",
    width: Dimensions.get("screen").width - 130,
    marginLeft: 10,
    padding: 5,
    fontSize: 20,
    color: "black",
    textAlign: "left",
    borderColor: "brown",
    borderRadius: 10,
  },
  searchButton: {
    flex: 1,
    fontSize: 18,
    color: "red",
    textAlign: "center",
    width: "30%",
    fontWeight: "bold",
    borderWidth: 2,
    backgroundColor: "rgba(255,255,255,1)",
    padding: 10,
    margin: 10,
    borderRadius: 25,
  },
});

export default HomeScreen;
