import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View,Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function Details({ navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.push("Home")}
      />
    </View>
  );
}
export default function App() {
  return <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={
          {title: "Overview"}
        }
        name="Home" component={HomeScreen} />
        <Stack.Screen
        options={
          {title: "Full Details"}
        }
        name="Details" component={Details} />
      </Stack.Navigator>
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
