import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
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



export default function App() {
  const [name, setName] = useState("");

  const isValidAnimal = (animal: string) => {
    if(animal.length === 0) return false;
    return ["dog", "cat", "bird"].includes(animal.toLowerCase());
  }
  
  return (
    <ImageBackground
    style={{flex:1}}
    source={{uri:'https://e1.pxfuel.com/desktop-wallpaper/96/635/desktop-wallpaper-best-one-piece-iphone-one-piece-iphone.jpg'}}>
      <View style={styles.body}>
       <Text style={styles.text}>Enter the Name of an animal</Text>
       <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,width: 200}}
        onChangeText={text => setName(text)}
        value={name}
        />
       {
        isValidAnimal(name)? <Image
        style={styles.img}
        source={require('./assets/sucess.png')}
        />: <Image
        style={styles.img}
        source={require('./assets/err.jpg')}
        />
       }
      </View>
      </ImageBackground>
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
