import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Write from '../screens/writereview.js';
import Edit from '../screens/editreview.js';
import MyReviews from '../screens/myreviews.js';
import MainNav from '../navigation/mainnav.js'

const Stack = createStackNavigator();

class LoginNav extends Component
{
    render()
    {


        
       return (
           
          <Stack.Navigator>
              <Stack.Screen name = "Write" component = {Write} /> 
              <Stack.Screen name = "Edit" component = {Edit} />
              <Stack.Screen name = "Main" component = {MainNav}/>
          </Stack.Navigator>
    );  
    }
   

}


export default LoginNav;
