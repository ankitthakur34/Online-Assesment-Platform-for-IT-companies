import React, { useState } from 'react';
import {Button, StyleSheet, Text,TouchableOpacity,View,StatusBar, SafeAreaView} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigation from './navigation/StackNavigation';



const App=()=>{

    return(
      <>
        <SafeAreaView style={styles.androidView} >
        <StatusBar 
        backgroundColor="grey"
        barStyle="light-content"
         />
<StackNavigation/>

          </SafeAreaView>

      </>
    )
}

const styles =StyleSheet.create({

  androidView:{
    flex:1,
    paddingTop: Platform.OS==="android"?StatusBar.length:0
  }

})

export default App;