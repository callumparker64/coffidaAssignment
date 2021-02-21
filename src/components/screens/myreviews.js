import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
class MyReviews extends Component{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
      }

      logoutUser(){

        return fetch("http://10.0.2.2:3333/user/logout",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          Alert.alert("You have been logged out");
          this.props.navigation.navigate('Login')
        })
        .catch((error) => {
          console.error(error);
        });
      }

  render(){

    
    return(
        <View>
            <Text>My Reviews</Text>
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
                onPress={() => this.logoutUser()}
                title="Go Back"
            />
        </View>
    );
  }
}

export default MyReviews;
