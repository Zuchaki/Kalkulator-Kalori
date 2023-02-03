import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, ScrollView, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';
import { AntDesign, Ionicons} from '@expo/vector-icons';
import Product from './Product/Product';
import useToday from '../../hooks/useToday';

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
  const [willBeImported, setWillBeImported] = useState([]);
  const [today] = useToday();
  const [hidden, setHidden] = useState(false);
  const getElements = async () => {
    let value = await AsyncStorage.getItem('PRODUCTS');
    if(value===null){
      setHidden(true)
    }
    else{
      setHidden(false)
    }
    value = await JSON.parse(value);
    await setWillBeImported(value)
  }
  useEffect(()=> {
    getElements();
  
  },[])

  return (
    <ScrollView style={styles.scrollView}>
      {hidden?
        <Text style={styles.title}>Nie masz jeszcze żadnych dodanych produktów</Text>
      :
        <View style={styles.container}>
            {willBeImported.map(unit => <Product {...unit}/>)}
        </View>
      }
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
},
title:{
  marginHorizontal: 30,
  marginTop:20,
  alignItems:'center',
  justifyContent: 'center',
  fontSize:34,
  fontWeight:'300',
  textAlign:"center",
},
});
