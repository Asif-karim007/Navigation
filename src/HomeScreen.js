import React from "react";
import {Text,View,Button,StyleSheet} from "react-native";



function HomeScreen({navigation}) {
    return(
        <View >
          <View style={styles.container}>
            <Text style={styles.textStyle1}>Hi there!</Text></View>
            <Button 
              onPress={() => navigation.navigate("Componunt")}
              title='Go to Components Demo'
            />
            
            <Button
            
            title="Go to list demo"
            onPress={() => navigation.navigate('List')}
            />

      <Button
      title="Images"
      onPress={() => navigation.navigate("image")}
      />
    </View>
    )};
  
  
  const styles =StyleSheet.create({
    textStyle1:{
        fontSize:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
      
      justifyContent: 'center',
      alignItems: 'center',
  },
  });

  export default HomeScreen;