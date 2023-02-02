import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import SingleMyProdukt from './SingleMyProdukt/SingleMyProdukt';

export default function MyDay() {
    const [hidden, setHidden] = useState(false);
    const deleteThat = () => {
        
    }
  return (
    <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <SingleMyProdukt/>
            <SingleMyProdukt/>
            <SingleMyProdukt/>
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
