import React, { Component } from 'react';
import { Text, View, Button,AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
class Main extends Component{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
      }

      // logoutUser(){

      //   return fetch("http://10.0.2.2:3333/user/logout",
      //   {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //   })
      //   .then((response) => {
      //     Alert.alert("You have been logged out");
      //     this.props.navigation.navigate('Login')
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      // }


      logoutUser = async () =>
      {
        let token = await AsyncStorage.getItem('@session_token');
        await AsyncStorage.removeItem('@session_token');
        await AsyncStorage.removeItem('@user_id');
        return fetch("http://10.0.2.2:3333/api/1.0.0/user/logout",
        {
          method: 'POST',
          headers: { "X-Authorization": token}
        })
        .then((response) => {
          if(response.status === 200)
          {
            this.props.navigation.navigate('Login');
          }
          else if(response.status === 401)
          {
            throw 'Unauthorized';
          }
          else
          {
            throw 'Error';
          }
        })
      }

  render(){

    
    return(
        <View>
            <Text>Main Screen!</Text>
            <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}> 
            </TextInput>

            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={true}
                value={this.state.password}> 
            </TextInput>

            <Button 
                onPress={() => this.props.navigation.goBack()}
                title="Go Back"
            />
            <Button 
                onPress={() => this.logoutUser()}
                title="Logout"
            />
        </View>
    );
  }
}

export default Main;
