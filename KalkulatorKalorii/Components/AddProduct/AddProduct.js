import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { AntDesign, Ionicons} from '@expo/vector-icons';
import {AsyncStorage} from 'react-native';

export default function AddProduct(props) {
    const [number, onChangeNumber] = useState('');
    const [hidden, setHidden] = useState(false);
    const [test, setTest] = useState("");
    const addProduktToDay =() => {
        console.log("Dodano produkt")
    }
    const [product, setProduct] = useState({
        name: "",
        protein: 0,
        fats: 0,
        carbo: 0,
        energy: 0
    })
    const onChangeHandler = (value, stateElement) => {
        setProduct({...product, [stateElement]:value})
    }

    const addHandler = async () => {
        /*try{
            await AsyncStorage.setItem(
                'TASKS',
                'I like to save it.',
            );
        }
        catch(err){

        }*/

        try{
          const value = await AsyncStorage.getItem('PRODUCTS');
          if(value===null){
            console.log("zrob cos")
            }
        }
        catch(err){

        }

    }

  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
        <View style={styles.dataContainer}>
                <Text style={styles.name}>Nazwa</Text>
                <TextInput
                        style={styles.input}
                        onChangeText={(value) => onChangeHandler(value, "name")}
                        value={product.name}
                        placeholder=""
                        keyboardType="text"
                    />
                <Text style={styles.name}>Białko</Text>
                <TextInput
                        style={styles.input}
                        onChangeText={(value) => onChangeHandler(value, "protein")}
                        value={product.protein}
                        placeholder=""
                        keyboardType="numeric"
                    />
                <Text style={styles.name}>Tłuszcze</Text>
                <TextInput
                        style={styles.input}
                        onChangeText={(value) => onChangeHandler(value, "fats")}
                        value={product.fats}
                        placeholder=""
                        keyboardType="numeric"
                    />
                <Text style={styles.name}>Węglowodany</Text>
                <TextInput
                        style={styles.input}
                        onChangeText={(value) => onChangeHandler(value, "carbo")}
                        value={product.carbo}
                        placeholder=""
                        keyboardType="numeric"
                    />
                <Text style={styles.name}>Energia</Text>
                <TextInput
                        style={styles.input}
                        onChangeText={(value) => onChangeHandler(value, "energy")}
                        value={product.energy}
                        placeholder=""
                        keyboardType="numeric"
                    />
        </View>
        <TouchableOpacity style={styles.button} onPress={addHandler}>
            <Ionicons name="add" size={34} color="#2ed573"/>
        </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

container:{
    height:"100%",
    width:"100%",
    alignItems:'center',
    justifyContent:"center",
    flexDirection:"column",
    marginBottom:50
},
dataContainer:{
    width:"90%",
    backgroundColor:"white",
    alignItems:'center',
    justifyContent:"flex-start",
    flexDirection:"column",
    backgroundColor: "#f1f2f6",
    marginTop:30,
    marginBottom:40,
    padding: 20,
    elevation:4,
    backgroundColor:"#f1f2f6",
    borderRadius:30
},
input:{
    width:"90%",
    borderRadius:10,
    paddingLeft: 16,
    paddingVertical:4 ,
    borderWidth: 1,
    borderColor:"#a4b0be",
    backgroundColor:"white",
    marginBottom:20
  },
  name:{
    width:"80%",
    fontSize:16,
    alignItems:'flex-start',
    textAlign:"left",
  },
  button:{
    width:"90%",
    height:40,
    alignItems:'center',
    justifyContent:"center",
    borderRadius:15,
    marginTop:0,
    shadowColor:"#000",
    elevation:4,
    backgroundColor:"#f1f2f6",
    borderRadius:30
  }
});
