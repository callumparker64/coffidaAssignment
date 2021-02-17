import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
          username = '',
          password = ''
        };
      }



  render(){

    
    return(
        <View>
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
                onPress={this.loginAlert}
                title="Log In"
            />
        </View>
    );
  }
}

export default Login;
