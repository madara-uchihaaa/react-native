import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Linking,
  Modal,
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
  Image,
  ImageBackground,
} from "react-native";
import CustomBTN from "./components/Button";



export default function App() {
  const [name, setName] = useState("");

  const isValidAnimal = (animal: string) => {
    if(animal.length === 0) return false;
    return ["dog", "cat", "bird"].includes(animal.toLowerCase());
  }
  
  return (
    <>
      <View style={styles.body}>

      <CustomBTN
        title="Press me 1"
        styles={{  width: 200,justifyContent: "center", alignItems: "center"}}
        onPress={() => Alert.alert("Simple Button pressed 1")}
      />
      <CustomBTN  
        title="Press me 2"
        styles={{  width: 200,justifyContent: "center", alignItems: "center"}}
        onPress={() => Alert.alert("Simple Button pressed 2")}
      />
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  img:{
    width: 200,
    height: 200,
    opacity: 0.5,
  }
});
// U can also use url to get the image from the internet
// <Image
// style={styles.img}
// source={{
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
// }}
