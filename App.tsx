import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Linking,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.text}>Hello World!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(val) => setName(val)}
        />
        <Text style={styles.text}>{name ? `Your name is ${name}` : ""}</Text>
        <Button
          title="Click Me"
          onPress={() => {
            Alert.alert(
              "My Title",
              "My Message",
              [
                {
                  text: "Yes",
                  onPress: () => console.warn("Yes"),
                },
                {
                  text: "No",
                  onPress: () => console.warn("No"),
                },
              ],
              {
                cancelable: true,
                onDismiss: () => console.warn("Dismissed"),
              }
            );
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
    textAlign: "center",
    width: 300,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    margin: 10,
  },
});
