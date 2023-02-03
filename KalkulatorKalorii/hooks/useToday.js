import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, ScrollView, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';
import { AntDesign, Ionicons} from '@expo/vector-icons';

export default function useToday() {


    let date = new Date();

    let res =String(date.getDate() +"."+date.getMonth() + "." + date.getFullYear());
    
  return res;
}