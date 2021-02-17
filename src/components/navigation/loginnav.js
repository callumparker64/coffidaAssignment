import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/componets/screens/login';
import SignUp from './src/componets/screens/signup';

const Stack = createStackNavigator();

class LoginNav extends Component
{
    render()
    {


        
       return (
           
      <NavigationContainer>
          <Stack.Navigator          screenOptions={{
              headerShown: false
              }}>

              <Stack.Screen name = "Login" component = {Login} /> 
              <Stack.Screen name = "SignUp" component = {SignUp} />
          </Stack.Navigator>
      </NavigationContainer>
    );  
    }
   

}


export default LoginNav;
