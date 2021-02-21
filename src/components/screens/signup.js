import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          lname: '',
          email: '',
          password: ''
        };
      }


      addUser(){
        let to_send = {
          fname: this.state.fname,
          lname: this.state.lname,
          email: this.state.email,
          password: this.state.password

        };

        return fetch("http://10.0.2.2:3333/user",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(to_send)
        })
        .then((response) => {
          Alert.alert("User Added!");
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
                onChangeText={(fname) => this.setState({fname})}
                value={this.state.fname}> 
            </TextInput>

            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(lname) => this.setState({lname})}
                value={this.state.lname}> 
            </TextInput>
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
