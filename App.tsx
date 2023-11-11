import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
 const [name, setName] = useState('John Doe')
  return (
   <>
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
      <Button  title="Change Name" onPress={() => setName('Jane Doe')} />
      </View>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 6,
    borderRadius: 10,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%'
  },
  text:{
    color: 'black',
    fontStyle: 'italic',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  button:{
    width: '50%',
    height: '50%',
  }
});

// Stylesheet have various methods to style the components
// 1. StyleSheet.create() - This is the most common method to style the components
// 2. StyleSheet.flatten() - This method is used to combine multiple styles into one
// 3. StyleSheet.absoluteFillObject - This method is used to fill the entire screen with the component
// 4. StyleSheet.hairlineWidth - This method is used to get the width of the hairline of the device
// 5. StyleSheet.compose() - This method is used to combine multiple styles into one


// Styles methods in React Native
// 1: By inline styling
// 2: By StyleSheet.create() method
// 3: By StyleSheet.flatten() method
// 4: By StyleSheet.absoluteFillObject method
// 5: By StyleSheet.hairlineWidth method
// 6: By StyleSheet.compose() method

