import { Button, StyleSheet, Text, View } from "react-native";


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

export default Details