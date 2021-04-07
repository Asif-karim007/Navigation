import React,{useState, useEffect} from "react";
import {Text,View,StyleSheet, Button} from "react-native";
import ColorCounter from "./ColorCounter";

const COLOR_INCREMENT = 15;

const SquireScreen = () =>{
    const [red , setRed] = useState(0);
    const [blue , setBlue] = useState(0);
    const [green , setGreen] = useState(0);
    
    const setColor =(color, change) =>{
        switch (color) {
            case red:
                red+change>255 || red + change <0 ? null : setRed(red+change);
                return;
        
        case blue:
                blue+change>255 || blue + change <0 ? null : setBlue(blue+change);
                return;
        
        
        case green:
            green+change>255 || green + change <0 ? null : setGreen(green+change);
                return;
        }
        
    };
    
    return(
    <View> 
        <ColorCounter
        onIncrease = {()=> setColor(red,COLOR_INCREMENT)}
        onDecrease = {()=> setColor(red, -1 * COLOR_INCREMENT) }
         colors="Red"/>
        <ColorCounter
        onIncrease = {()=> setBlue(blue + 50 ) }
        onDecrease = {()=> setBlue(blue - 50 ) }
        colors="BluE"/>
        <ColorCounter
        onIncrease = {()=> setGreen(green + 50) }
        onDecrease = {()=> setGreen(green - 50) }
         colors="Green"/>
        <View style={{height:200,width:150,backgroundColor:`rgb(${red},${blue},${green})`}}/>
    </View>
     
);};

export default SquireScreen;