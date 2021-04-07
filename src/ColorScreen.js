import React,{useState} from "react";
import {Text,View,StyleSheet,Image,Button, FlatList} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const SquireScreen = () =>{
    const [Colors, setColors]= useState ([]);
    return(
    <View>
        <Button
        title="Add a Color"
        onPress ={ ()=>{
            setColors([...Colors,randomColor() ]);
        }}
        />
        <FlatList
        keyExtractor={item => item}
        data={Colors}
        renderItem={({item}) =>{
            return(
                <View style={{height:100,width:100,backgroundColor:item }}/>
            );
        }}
        />

        
    </View>
    );
};

    const randomColor =() => {
        const red =Math.floor( Math.random() * 256);
        const blue =Math.floor( Math.random() * 256);
        const green =Math.floor( Math.random() * 256);

        return`rgb(${red},${blue},${green})`;
    };

export default SquireScreen;

