import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View,Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./pages/Home";
import Details from "./pages/Details";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import FontAWS from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return <>
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabicon : ({focused, color, size}) => {
          let iconName ="palette"
          if(route.name === "Home"){
            iconName = 'palette'
          }else if(route.name === "Details"){
            iconName = "wrench-simple"
          }
          return <FontAWS name={iconName} size={size} color={color} />
        }
      })}
      >
        <Tab.Screen
        options={
          {title: "Overview"}
        }
        name="Home" component={HomeScreen} />
        <Tab.Screen
        options={
          {title: "Full Details"}
        }
        name="Details" component={Details} />
      </Tab.Navigator>
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
