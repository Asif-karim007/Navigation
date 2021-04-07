import React from "react";
import {Text,View,StyleSheet,Button} from "react-native";


const ColorCounter = ({colors , onIncrease, onDecrease }) =>{
    
    return(
        
    <View>
        <Text>{colors}</Text>
        <Button 
        onPress={()=> onIncrease()}
         title={`Increase ${colors}` }/>
        <Button 
        onPress={()=> onDecrease()}
        title={`Decrease ${colors}`}/>
    </View>
);};

export default ColorCounter;


