import React from "react";
import {Text,View,StyleSheet,Image} from "react-native";


const ImageDetail =(props) => {
    return(
    <View>
        <Image source={props.ImageSource}/>
        <Text>{props.title}</Text>
        <Text>{props.score}</Text>
    </View>
)}

export default ImageDetail;

