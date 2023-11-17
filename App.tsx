import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View,Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./pages/Home";
import Details from "./pages/Details";
import {createDrawerNavigator} from "@react-navigation/drawer"

const Drawer = createDrawerNavigator();

export default function App() {
  return <>
    <NavigationContainer>
     <Drawer.Navigator
     initialRouteName="Home"
      screenOptions={{
        headerStyle:{
          backgroundColor: "darkslateblue",
        },
        headerTintColor: "#fff",
        headerTitleStyle:{
          fontWeight: "bold",
        },
      }}
     >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Details" component={Details}/>
      </Drawer.Navigator>
    </NavigationContainer>
  </>;
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize: 20,
    color: "darkslateblue",
  },
});
