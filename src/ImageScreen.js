import React from "react";
import {Text,View,StyleSheet} from "react-native";
import ImageDetail from "./components/ImageDetail";

const ImageScreen =() => {
    return(
    <View>
        < ImageDetail title="Forest" ImageSource={require('./assets/forest.jpg')} score="(9/10)"/>
        < ImageDetail title="Beach" ImageSource={require('./assets/beach.jpg')} score="(8/10)"/>
        < ImageDetail title="Mountain" ImageSource={require('./assets/mountain.jpg')} score="(7/10)"/>
    </View>
)}

export default ImageScreen;

