import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, Entypo, MaterialIcons, AntDesign  } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function TopBar(props) {
    //const navigationRef = useNavigationContainerRef();
    //const navigation = useNavigation();
    const fontSize = 28;
    const [addProduct, setAddProdukt] = useState(false);

    const goToProdukct = () => {
      props.setSite(3)
    }
    const goToStatistics = () => {
      props.setSite(1)
    }
    const goToMyDay = () => {
      props.setSite(2)
    }
    const goToAddProduct = () => {
      props.setSite(4)
    }
    useEffect(()=>{console.log("Załadowano komponent")},[])

  return (
    <>
        <View style={styles.menu}>

            <TouchableOpacity style={styles.button} onPress={() => goToProdukct()}>
              {props.site==3?
                <MaterialCommunityIcons name="food-apple" size={fontSize} color="#2ed573" />
              :
                <MaterialCommunityIcons name="food-apple" size={fontSize} color="#57606f" />}
                <Text style={styles.buttonText}>Produkty</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => goToAddProduct()}>
                {props.site==4?
                <Ionicons name="add" size={fontSize} color="#2ed573"/>
                :
                <Ionicons name="add" size={fontSize} color="#57606f"/>
                }
                <Text style={styles.buttonText}>Dodaj</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => goToStatistics()}>
              {props.site==1?
                <AntDesign name="barschart" size={fontSize} color="#2ed573" />
              :
                <AntDesign name="barschart" size={fontSize} color="#57606f" />
              }
                <Text style={styles.buttonText}>Statystyki</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => goToMyDay()}>
            {props.site==2?
              <AntDesign name="pushpino" size={24} color="#2ed573" />
            :
              <AntDesign name="pushpino" size={24} color="#57606f" />
            }
                <Text style={styles.buttonText}>Dzisiaj</Text>
            </TouchableOpacity>

        </View>
   </>
  );
}

const styles = StyleSheet.create({
  menu:{
    height:120,
    flexDirection:"row",
    justifyContent:"space-around",
    padding:2,
    backgroundColor:"white",
    shadowColor:"#000",
    shadowOffset:{width:0, height:10},
    shadowOpacity:0.12,
    shadowRadius:5.46,
    elevation:9,
    alignItems:'flex-end',
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    overflow:'hidden'
  },
  button:{
    width:"20%",
    height:80,
    alignItems:'center',
    justifyContent: 'center',
  },
  buttonText:{
    textAlign: 'center'
  },
  menuv2:{
    height:80,
    flexDirection:"row",
    justifyContent:"space-around",
    padding:2,
    backgroundColor:"white",
    alignItems:'center',
  }
});
