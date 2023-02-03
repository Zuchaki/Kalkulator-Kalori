import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, ScrollView, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';
import SingleMyProdukt from './SingleMyProdukt/SingleMyProdukt';
import useToday from '../../hooks/useToday';

/*
const willBeImported= [
  {
    name: "Filet z kurczaka",
    protein: 32,
    fats: 15,
    carbo: 42,
    energy:540,
    size: 90,
    date: "1.5.2023",
    id: 1
  },
  {
    name: "Twaróg",
    protein: 12,
    fats: 30,
    carbo: 42,
    energy:450,
    size: 200,
    date: "1.5.2023",
    id: 2
  },
]
*/

export default function MyDay() {
    const [hidden, setHidden] = useState(false);
    const today = useToday();
    const [willBeImported, setWillBeImported] = useState([]);

    const deleteThat = async(id) => {
      let value = await AsyncStorage.getItem('TODAYPRODUCTS');
      
      value = await JSON.parse(value);
      console.log(value);
      const newFearuter= await value.filter(x => x.id!=id);
      let produktJSON = await JSON.stringify(newFearuter);
      await AsyncStorage.setItem('TODAYPRODUCTS', produktJSON);
      await getElements();
    }

    const getElements = async () => {
      let value = await AsyncStorage.getItem('TODAYPRODUCTS');
      if(value===null){
        setHidden(true)
      }
      else{
        setHidden(false)
      }
      value = await JSON.parse(value);
      console.log(value);
      const newFearuter= await value.filter(x => x.date==today);
      let produktJSON = await JSON.stringify(newFearuter);
      await AsyncStorage.setItem('TODAYPRODUCTS', produktJSON);
      value = await AsyncStorage.getItem('TODAYPRODUCTS');
      value = await JSON.parse(value);

      await setWillBeImported(value)
    }

    useEffect(()=>{
        getElements();
      },[])

  return (
    <ScrollView style={styles.scrollView}>
      {hidden?
        <Text style={styles.title}>Nie wprowadzono dzisiaj żdnych zjedzonych produktów</Text>
        :
        <View style={styles.container}>
            {willBeImported.map(imported => <SingleMyProdukt {...imported} deleteThat={deleteThat}/>)}
        </View>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
container:{
    height:"100%",
    width:"100%",
    marginBottom: 100,
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
  fontSize:30,
  fontWeight:'300',
  textAlign:"center",
},
});
