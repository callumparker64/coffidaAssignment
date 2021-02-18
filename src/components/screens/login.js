import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
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
                title="Log In"
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
