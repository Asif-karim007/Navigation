import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


function ComponentsScreen  ({navigation}) {
    const name = "Asif";
    return( 
        
    <View>
        <Text style={styles.textStyle}> Getting started with react native!</Text>
        <Text style={styles.second}>My name is {name} </Text>
    </View>
    )};




const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    second: {
        fontSize:20
    }
});
export default ComponentsScreen;