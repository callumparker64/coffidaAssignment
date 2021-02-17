import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Homescreen from './components/homescreen';
import Testscreen from './components/testscreen';
import Mainscreen from './components/mainscreen';

const Stack = createStackNavigator();

class MainNav extends Component
{
    render()
    {


        
       return (
           
      <NavigationContainer>
          <Stack.Navigator          screenOptions={{
              headerShown: false
              }}>

              <Stack.Screen name = "HomeScreen" component = {Homescreen} /> 
              <Stack.Screen name = "MainScreen" component = {Mainscreen} />
              <Stack.Screen name = "TestScreen" component = {Testscreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );  
    }
   

}


export default MainNav;
