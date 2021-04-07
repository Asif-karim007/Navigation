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
      title="go to images demo"
      onPress={() => navigation.navigate("image")}
      />
      <Button
      title="Go to counter screen demo"
      onPress={() => navigation.navigate("compo")}
      />
      <Button
      title="Go to color screen demo"
      onPress={() => navigation.navigate("Color")}
      />
      <Button
      title="GO TO squire screen demo"
      onPress={() => navigation.navigate("squire")}
      />
      <Button
      title="GO TO text screen demo"
      onPress={() => navigation.navigate("text")}
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