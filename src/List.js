import React from "react";
import {Text , View , StyleSheet, FlatList} from "react-native";

function List ({navigation}) {
const friends= [
    {name :'Friend #1' ,age:20},
    {name :'Friend #2' ,age:20},
    {name :'Friend #3' ,age:20},
    {name :'Friend #4' ,age:20},
    {name :'Friend #5' ,age:20},
    {name :'Friend #6' ,age:20},
    {name :'Friend #7' ,age:20},
    {name :'Friend #8' ,age:20},
    {name :'Friend #9' ,age:20}
];

return(
    <View>
    <FlatList
    
    keyExtractor={(friend =>friend.name)}
    data={friends}
    renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} -Age {item.age}</Text>;
    }}
    /></View>
);
};


const newLocal = "center";
const styles =StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 30,
        flex:1,
        justifyContent:newLocal
    }
});

export default List;