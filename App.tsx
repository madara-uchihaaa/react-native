import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Linking,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
        <Text style={styles.text}>Please enter your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(val) => setName(val)}
          multiline
          secureTextEntry={true}
        />
        <Text style={styles.text}>Hello {name}</Text>
        <Button
          title="Open Google"
          onPress={() => Linking.openURL("https://www.google.com")}
          disabled
        ></Button>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.google.com")}
          activeOpacity={0.3}
        >
          <Text style={styles.button}>Click Me</Text>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://www.google.com")}
          activeOpacity={0.3}
          underlayColor="red"
        >
          <Text style={styles.button}>Click Me Hi</Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL("https://www.google.com")}
        >
          <Text style={styles.button}>Click Me Hi</Text>
        </TouchableWithoutFeedback>
        <Pressable
        android_ripple={{color: 'pink'}}
        onPress={() => Linking.openURL("https://www.google.com")}>
          <Text style={styles.button}>Click Me Hi</Text>
        </Pressable>
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
