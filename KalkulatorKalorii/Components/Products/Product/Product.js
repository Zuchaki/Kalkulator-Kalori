import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, TextInput, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';
import { AntDesign, Ionicons} from '@expo/vector-icons';
import useToday from '../../../hooks/useToday';

export default function Product(props) {
    const [number, onChangeNumber] = useState('');
    const [hidden, setHidden] = useState(false);
    const today = useToday()
    const countMakro = async(thisId) => {
      return({
        name: props.name,
        protein: await unitCount(props.protein),
        fats: await unitCount(props.fats),
        carbo:await unitCount(props.carbo),
        energy: await unitCount(props.energy),
        size: number,
        date: today,
        id: thisId
      })
    }
    const unitCount = (unit) => {
      return Math.round((unit/100)*number)
    }
    const addProduktToDay = async () => {

      try{
        let lastId = await AsyncStorage.getItem('LASTID');
        let value = await AsyncStorage.getItem('TODAYPRODUCTS');
        if(value===null){
            const makroObj = await countMakro(1)
            let produktJSON = await JSON.stringify([makroObj]);
            let lastIdJSON = await JSON.stringify(1);
            await AsyncStorage.setItem('TODAYPRODUCTS', produktJSON);
            await AsyncStorage.setItem('LASTID', lastIdJSON);
        }
        else{
            value = await JSON.parse(value);
            lastId = await JSON.parse(lastId);
            lastId = await lastId+1;
            const makroObj = await countMakro(lastId)
            let produktJSON = await JSON.stringify([...value, makroObj]);
            let lastIdJSON = await JSON.stringify(lastId);
            await AsyncStorage.setItem('TODAYPRODUCTS', produktJSON);
            await AsyncStorage.setItem('LASTID', lastIdJSON);
        }
        value = await AsyncStorage.getItem('TODAYPRODUCTS');
        value = await JSON.parse(value);
        await console.log(value)
      }
      catch(err){
        console.log(err)
      }
    }

  return (
            <View style={styles.containerlevel2}>
            <View style={styles.productContainer}>
                <View style={styles.leftRow}>
                    <Text style={styles.produktName}>{props.name}</Text>
                </View>
                <View style={styles.rightRow}>
                    <View style={styles.rightColl}>
                        <View style={styles.makroData}>
                            <Text style={styles.makroName}>Białko</Text>
                            <View style={styles.unitData}>
                                <Text style={styles.unitValue}><Text style={{color:"#1e3799"}}>{props.protein}</Text> </Text><Text>g</Text>
                            </View>
                        </View>
                        <View style={styles.makroData}>
                            <Text style={styles.makroName}>Węglowodany</Text>
                            <View style={styles.unitData}>
                                <Text style={styles.unitValue}><Text style={{color:"#27ae60"}}>{props.carbo}</Text> </Text><Text>g</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rightColl}>
                    <View style={styles.makroData}>
                            <Text style={styles.makroName}>Tłuszcze</Text>
                            <View style={styles.unitData}>
                                <Text style={styles.unitValue}><Text style={{color:"#e58e26"}}>{props.fats}</Text> </Text><Text>g</Text>
                            </View>
                        </View>
                        <View style={styles.makroData}>
                            <Text style={styles.makroName}>Energia</Text>
                            <View style={styles.unitData}>
                                <Text style={styles.unitValue}><Text style={{color:"#e55039"}}>{props.energy}</Text> </Text><Text>kcal</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.rightRowInfo}>Wartości na 100g produktu</Text>
                </View>
            </View>
            {hidden?
            <View style={styles.hiddenElement}>
                <View style={styles.addHiddenElement}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=""
                        keyboardType="numeric"
                    />

                    <Text style={styles.addHiddenElementText}>/g</Text>

                    <TouchableOpacity style={styles.buttonAdd} onPress={() => addProduktToDay()}>
                        <Ionicons name="add" size={24} color="#f1f2f6"/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => setHidden(false)}>
                    <AntDesign name="upcircleo" size={24} color="#e74c3c" />
                </TouchableOpacity>
            </View>:
            <TouchableOpacity style={styles.button} onPress={() => setHidden(true)}>
                <AntDesign name="downcircleo" size={24} color="#2ed573"/>
            </TouchableOpacity>
            }
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
    backgroundColor: "#f1f2f6"
  },
  containerlevel2:{
    marginTop:40,
    marginBottom: 10,
    width:"90%",
    paddingHorizontal:15,
    paddingVertical: 15,
    shadowColor:"#000",
    shadowOpacity:4.12,
    shadowRadius:300.46,
    elevation:9,
    borderRadius:30,
    backgroundColor:"white"
  },
  productContainer:{
    alignItems:'flex-start',
    flexDirection:"row",
    justifyContent:"flex-start",
  },
  rightRow:{
    width:"60%",
    flexDirection:"column",
    justifyContent:"flex-start",
  },
  produktName:{
    fontSize:20,
    fontWeight: "400"
  },    
  leftRow:{
    width:"40%",
    flexDirection:"column",
    justifyContent:"flex-start",
    paddingRight: 20
  },
  rightRowInfo:{
    fontSize:10,
    fontWeight: "300",
    marginTop:8,
    textAlign:"right",
    fontStyle: 'italic',
    color:"#57606f"
  },    
  rightColl:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"flex-start",
  },
  makroData:{
    width:"50%",
    flexDirection:"column",
    justifyContent:"flex-start",
    marginBottom:16
  },
  unitData:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:'center',
  },
  makroName:{
    fontSize:12,
    fontWeight: "300",
  },
  unitValue:{
    fontSize:28,
    fontWeight: "300"
  },
  input:{
    width:"45%",
    borderRadius:10,
    paddingLeft: 16,
    paddingVertical:4 ,
    borderWidth: 1,
    borderColor:"#a4b0be"
  },
  button:{
    width:"100%",
    height:40,
    alignItems:'center',
    justifyContent:"center",
    borderRadius:15,
    marginTop:10,
    shadowColor:"#000",
    shadowOpacity:4.12,
    shadowRadius:300.46,
    elevation:3,
    backgroundColor:"#f1f2f6"
  },
  hiddenElement:{
    flexDirection:"column",
  },
  addHiddenElement:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"flex-start",
    marginTop:10
  },
  addHiddenElementText:{
    fontSize:14,
    fontWeight: "300",
    marginLeft:6,
    width:"10%"
  },
  buttonAdd:{
    borderRadius:10,
    padding: 6,
    backgroundColor: "#2ed573",
    alignItems:'center',
    justifyContent:"center",
    width:"45%"
  }
});
