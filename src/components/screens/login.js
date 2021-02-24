import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
      }

      loginUser(){
        let to_send = {
          email: this.state.email,
          password: this.state.password

        };

        return fetch("http://10.0.2.2:3333/api/1.0.0/user/login",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(to_send)
        })
        .then((response) => {
          if(response.status === 200)
          {
            Alert.alert("Logged in!");
          this.props.navigation.navigate('Main')
          }
          else{
            Alert.alert("Error");
          }
          
        })
        .catch((error) => {
          console.error(error);
        });
      }



  render(){

    
    return(
        <View>
            <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder = "Enter Email: "
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}> 
            </TextInput>

            <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder = "Enter Password: "
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={true}
                value={this.state.password}> 
            </TextInput>

            <Button 
                title="Log In"
                //onPress = {() => this.props.navigation.navigate('Main')}
                onPress = {() => this.loginUser()}
                
            />
            <Button 
                title="Go MainScreen Test"
                onPress = {() => this.props.navigation.navigate('Main')}
                
            />
            <Button 
                title="Sign Up"
                onPress = {() => this.props.navigation.navigate('SignUp')}
                
            />
        </View>
    );
  }
}

export default Login;
