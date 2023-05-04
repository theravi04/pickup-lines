import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const[pickUpLines, setPickUpLines] = useState("");
  useEffect(() => {
    fetchLines();
  },[]);

  const fetchLines = () => {
    fetch("https://vinuxd.vercel.app/api/pickup")
    .then((res) => res.json())
    .then((json) => {
      const {pickUp} = json;
      setPickUpLines(pickUp);
      console.log(json);
    })
    .catch((error) => console.error(error));
  };


  return (
    <View style={styles.container}>
      <Button onPress={fetchLines} title = "Get PickUp Lines"></Button>
      <Text>{pickUpLines}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
