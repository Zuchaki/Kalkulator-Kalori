import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { AntDesign, Ionicons} from '@expo/vector-icons';
import Product from './Product/Product';

const willBeImported= [
  {
    name: "Filet z kurczaka",
    protein: 32,
    fats: 15,
    carbo: 42,
    energy:540
  },
  {
    name: "Twaróg",
    protein: 22,
    fats: 27,
    carbo: 12,
    energy:670
  },
  {
    name: "Łosoś",
    protein: 52,
    fats: 37,
    carbo: 32,
    energy:920
  }
]
export default function Produkts() {


  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            {willBeImported.map(unit => <Product {...unit}/>)}
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container:{
    height:"100%",
    width:"100%",
    backgroundColor:"white",
    alignItems:'center',
    flexDirection:"column",
    backgroundColor: "#f9faff",
    overflow:"scroll"
}
});
