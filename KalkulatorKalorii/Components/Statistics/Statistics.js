import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import { useEffect, useState } from 'react';

export default function Statistics() {
    const fontSize = 28;
    const [addProduct, setAddProdukt] = useState(false);

    useEffect(()=>{console.log("Załadowano komponent")},[])

  return (
        <View style={styles.container}>
            <Text style={styles.title}>Twoje dzisiejsze makro</Text>
            <View style={styles.statisticsRow}>
                <Text style={styles.rowName}>Białko </Text>
                <Text style={styles.rowValue}><Text style={{color:"#1e3799"}}>123</Text></Text>
                <Text style={styles.rowUnit}>g</Text>
            </View>

            <View style={styles.statisticsRow}>
                <Text style={styles.rowName}>Węglowodany </Text>
                <Text style={styles.rowValue}><Text style={{color:"#27ae60"}}>134</Text></Text>
                <Text style={styles.rowUnit}>g</Text>
            </View>

            <View style={styles.statisticsRow}>
                <Text style={styles.rowName}>Tłuszcze </Text>
                <Text style={styles.rowValue}><Text style={{color:"#e58e26"}}>134</Text></Text>
                <Text style={styles.rowUnit}>g</Text>
            </View>

            <View style={styles.statisticsRow}>
                <Text style={styles.rowName}>Energia </Text>
                <Text style={styles.rowValue}><Text style={{color:"#e55039"}}>1234</Text></Text>
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
    backgroundColor: "#f9faff"
  },
  title:{
    marginTop:20,
    alignItems:'center',
    fontSize:30,
    fontWeight:'bold',
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
    elevation:7,
    borderRadius:30,
    backgroundColor:"white"
  },
  rowName:{
    width:"70%",
    fontSize:20,
    fontWeight:"400",
  },
  rowValue:{
    fontSize:30,
    color:"#2f3542",
  },
  rowUnit:{
    marginLeft:8,
    fontSize:24,
    color:"#2f3542",
    fontStyle: 'italic'
  }
});
