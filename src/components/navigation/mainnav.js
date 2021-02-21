import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Main from '../screens/main.js';
import MyReviews from '../screens/myreviews.js';
import Reviews from '../screens/reviews.js';
import Profile from '../screens/profile.js';


const Tab = createBottomTabNavigator();

class MainNav extends Component
{
    render()
    {


        
    return (

          <Tab.Navigator>
              <Tab.Screen name = "Main" component = {Main} /> 
              <Tab.Screen name = "MyReviews" component = {MyReviews} />
              <Tab.Screen name = "Reviews" component = {Reviews} />
              <Tab.Screen name = "Profile" component = {Profile} />
          </Tab.Navigator>
    );  
    }
   

}


export default MainNav;
