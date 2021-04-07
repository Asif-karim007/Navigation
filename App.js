import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Components from "./src/Components";
import ImageScreen from "./src/ImageScreen";
import List from"./src/List";
import HomeScreen from './src/HomeScreen';
import CounterScreen from "./src/CounterScreen";
import ColorScreen from "./src/ColorScreen";
import SquireScreen from"./src/SquireScreen";
import TextScreen from"./src/TextScreen";
const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Componunt" component={Components} />
        <Stack.Screen name="List" component={List} /> 
        <Stack.Screen name="image" component={ImageScreen} /> 
        <Stack.Screen name="compo" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} /> 
        <Stack.Screen name="squire" component={SquireScreen} /> 
        <Stack.Screen name="text" component={TextScreen} /> 
 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
