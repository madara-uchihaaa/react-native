import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name,setName] = useState('Rahul')
  const [session,setSession] = useState({
    number:0,
    title:'React Native'  
  })
  const [value,setalue] = useState(true)

  const clickHanlder = () => {
   setName('Rahul Kumar')
    setSession({
      number:1,
      title:'React Native Session 1'
    })
    setalue((prev) => !prev)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {name}</Text>
      <Text style={styles.text}> {session.number}</Text>
      <Text style={styles.text}>
        {value ? 'True' : 'False'}
      </Text>
      <Button title="Click me to chnage name" onPress={clickHanlder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
