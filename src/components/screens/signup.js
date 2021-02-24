import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          password: ''
        };
      }


      addUser(){
        let to_send = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password

        };

        return fetch("http://10.0.2.2:3333/api/1.0.0/user",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(to_send)
        })
        .then((response) => {
          if(response.status === 201){
            Alert.alert("User Added!");
            return response.json()
            
          }
          else if(response.status === 400)
          {
            throw "Failed Validation";
          }
          else
          {
            throw "Error";
          }
          
        })
        .then((responseJson) => {
            this.props.navigation.navigate('Login')
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
                placeholder = "Enter First Name: "
                onChangeText={(first_name) => this.setState({first_name})}
                value={this.state.first_name}> 
            </TextInput>

            <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder = "Enter Last Name: "
                onChangeText={(last_name) => this.setState({last_name})}
                value={this.state.last_name}> 
            </TextInput>
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
                onPress={() => this.addUser()}
                title="Create User"
            />
            <Button 
                onPress={() => this.props.navigation.goBack()}
                title="Go Back"
            />
        </View>
    );
  }
}

export default SignUp;
