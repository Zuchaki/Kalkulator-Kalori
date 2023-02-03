import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, AsyncStorage} from 'react-native';
import { useEffect, useState } from 'react';
import useToday from '../../hooks/useToday';


export default function Statistics() {
    const fontSize = 28;
    const [addProduct, setAddProdukt] = useState(false);
    const today = useToday();
    const [willBeImported, setWillBeImported] = useState({
      protein:0,
      fats:0,
      carbo:0,
      energy: 0
    })
    const loadComponent = async() => {
      let value = await AsyncStorage.getItem('TODAYPRODUCTS');
      if(value!==null){
      value = await JSON.parse(value);
      console.log(value);
      const newFearuter= await value.filter(x => x.date==today);
      let produktJSON = await JSON.stringify(newFearuter);
      await AsyncStorage.setItem('TODAYPRODUCTS', produktJSON);
      value = await AsyncStorage.getItem('TODAYPRODUCTS');
      value = await JSON.parse(value);
      let handler = await 0;
      let proteinhHandler = await value.map(e => handler = handler+e.protein);
      proteinhHandler = await proteinhHandler[proteinhHandler.length-1];
      handler = await 0;
      let fatsHandler = await value.map(e => handler+=e.fats);
      fatsHandler = await fatsHandler[fatsHandler.length-1];
      handler = await 0;
      let carboHandler = await value.map(e => handler = handler+e.carbo);
      carboHandler = await carboHandler[carboHandler.length-1];
      handler = await 0;
      let energyHandler = await value.map(e => handler = handler+e.energy);
      energyHandler = await energyHandler[energyHandler.length-1];

      await setWillBeImported({
        protein:proteinhHandler,
        fats:fatsHandler,
        carbo:carboHandler,
        energy: energyHandler
      })
    }
    }
    useEffect(()=>{
      loadComponent()
    },[])

  return (
        <View style={styles.container}>
            <Text style={styles.title}>Twoje dzisiejsze makro</Text>
            <View style={styles.statisticsRow}>
                <Text style={styles.rowName}>Białko </Text>
                <Text style={styles.rowValue}><Text style={{color:"#1e3799"}}>{willBeImported.protein}</Text></Text>
                <Text style={styles.rowUnit}>g</Text>
            </View>

            <View style={styles.statisticsRow}>
                <Text style={styles.rowName}>Węglowodany </Text>
                <Text style={styles.rowValue}><Text style={{color:"#27ae60"}}>{willBeImported.carbo}</Text></Text>
                <Text style={styles.rowUnit}>g</Text>
            </View>

            <View style={styles.statisticsRow}>
                <Text style={styles.rowName}>Tłuszcze </Text>
                <Text style={styles.rowValue}><Text style={{color:"#e58e26"}}>{willBeImported.fats}</Text></Text>
                <Text style={styles.rowUnit}>g</Text>
            </View>

            <View style={styles.statisticsRow}>
                <Text style={styles.rowName}>Energia </Text>
                <Text style={styles.rowValue}><Text style={{color:"#e55039"}}>{willBeImported.energy}</Text></Text>
                <Text style={styles.rowUnit}>kcal</Text>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
container:{
    height:"100%",
    width:"100%",
    backgroundColor:"white",
    alignItems:'center',
    flexDirection:"column",
    backgroundColor: "white"
  },
  title:{
    marginTop:20,
    alignItems:'center',
    fontSize:34,
    fontWeight:'300',
    textAlign:"center"
  },
statisticsRow:{
    marginTop:40,
    marginBottom: 10,
    width:"90%",
    paddingHorizontal:30,
    paddingVertical: 15,
    alignItems:'center',
    flexDirection:"row",
    justifyContent:"flex-start",
    shadowColor:"#000",
    shadowOpacity:4.12,
    shadowRadius:300.46,
    elevation:4,
    borderRadius:30,
    backgroundColor:"white"
  },
  rowName:{
    width:"65%",
    fontSize:20,
    fontWeight:"400",
  },
  rowValue:{
    fontSize:30,
    fontWeight:"300",
    color:"#2f3542",
  },
  rowUnit:{
    marginLeft:8,
    fontSize:24,
    fontWeight:"300",
    color:"#2f3542",
    fontStyle: 'italic'
  }
});
