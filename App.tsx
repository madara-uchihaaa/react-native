import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Linking, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
    { id: 6, text: "Item 6" },
    { id: 7, text: "Item 7" },
    { id: 8, text: "Item 8" },
    { id: 9, text: "Item 9" },
    { id: 10, text: "Item 10" },
    { id: 11, text: "Item 11" },
    { id: 12, text: "Item 12" },
  ]);
  return (
    <>
      <View style={styles.body}>
        {/* <ScrollView horizontal> */}
        <ScrollView
        
        refreshControl={
          <RefreshControl
          colors={["red", "green", "blue"]}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
              setRefreshing(false);
            }, 2000);
          }}
          />
        }>
        {items.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text>{item.text}</Text>
          </View>
        ))}
        </ScrollView>
        {/* <View style={styles.item}>
          <Text>1</Text>
        </View>
        <View style={styles.item}>
          <Text>2</Text>
        </View>
        <View style={styles.item}>
          <Text>3</Text>
        </View> */}

        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 30,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "pink",
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
