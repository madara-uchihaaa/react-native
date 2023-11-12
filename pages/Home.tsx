import { Button, StyleSheet, Text, View } from "react-native";

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

export default HomeScreen