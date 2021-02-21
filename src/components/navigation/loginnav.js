import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/login.js';
import SignUp from '../screens/signup.js';
import Main from '../screens/main.js';
import MainNav from '../navigation/mainnav.js'

const Stack = createStackNavigator();

class LoginNav extends Component
{
    render()
    {


        
       return (
           
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name = "Login" component = {Login} /> 
              <Stack.Screen name = "SignUp" component = {SignUp} />
              <Stack.Screen name = "Main" component = {MainNav}/>
          </Stack.Navigator>
      </NavigationContainer>
    );  
    }
   

}


export default LoginNav;
