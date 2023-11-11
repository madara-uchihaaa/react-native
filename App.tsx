import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Linking, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("John Doe");
  return (
    <>
      <View style={styles.body}>
        <View style={styles.view1}>
          <Text>{name}</Text>
        </View>
        <View style={styles.view2}>
          <Text>{name}</Text>
        </View>
        <View style={styles.view3}>
          <Text>{name}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    // height: "80%",
    // width: "80%",
    flex: 1,
    // flexDirection: 'column',
    flexDirection: "row",
  },
  view1: {
    // width: 100,
    // height: 100,
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 50,
  },
  view2: {
    flex: 3,
    // width: 100,
    // height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  view3: {
    flex: 2,
    // width: 100,
    // height: 100,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
