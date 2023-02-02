import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function TestComponent() {
    const fontSize = 40;
    const [addProduct, setAddProdukt] = useState(false);

    useEffect(()=>{console.log("Załadowano komponent")},[])

  return (
    <View style={styles.menu}>

   </View>
  );
}

const styles = StyleSheet.create({
  menu:{
    height: 50,
    padding: 15,
    paddingTop: 40,
    backgroundColor: "red",
    alignItems:'flex-start',
    justifyContent: 'center',
  }
});
