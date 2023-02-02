import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './Components/TopBar/TopBar';
import TestComponent from './Components/Test component/TestComponent';
import Statistics from './Components/Statistics/Statistics';
import Products from './Components/Products/Prodacts';
import MyDay from './Components/MyDay/MyDay';
import AddProduct from './Components/AddProduct/AddProduct';

export default function App() {

  const [site, setSite] = useState(1);

  const myPages = () => {
    switch(site){
      case 1:
        return <Statistics/>
      break;
      case 2:
        return <MyDay/>
      break;
      case 3:
        return <Products/>
      break;
      case 4:
        return <AddProduct/>
      break;
    }
  }

  const myPage = myPages();

  return (
    <View style={styles.container}>
      <TopBar setSite={setSite} site={site}/>
      {myPage}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
