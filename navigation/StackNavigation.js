import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import ResultScreen from '../screens/ResultScreen';

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Test" component={TestScreen} options={{headerShown:false}} />
        <Stack.Screen name="Result" component={ResultScreen} options={{headerShown:false}} />
      </Stack.Navigator>
         </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})