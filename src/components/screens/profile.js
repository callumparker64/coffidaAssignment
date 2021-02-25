import React, { Component } from 'react';
import { Text, View, Button,AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          id: ''
        };
      }

      userProfile(){

        return fetch("http://10.0.2.2:3333/user/" + this.state.id,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          Alert.alert("Profile");
        })
        .catch((error) => {
          console.error(error);
        });
      }

      componentDidMount(){
          this.userProfile()
      }

      updateProfile(){
        let to_send = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password

        };

        return fetch("http://10.0.2.2:3333/user/"+this.state.id,
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
            <Text>Profile</Text>

            <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(first_name) => this.setState({first_name})}
                value={this.state.first_name}
                defaultValue ={this.state.first_name}> 
            </TextInput>

            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(last_name) => this.setState({last_name})}
                value={this.state.last_name}
                defaultValue ={this.state.last_name}> 
            </TextInput>
            <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                defaultValue ={this.state.email}> 
            </TextInput>

            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={true}
                value={this.state.password}
                defaultValue ={this.state.password}> 
            </TextInput>

            <Button 
                onPress={() => this.updateProfile()}
                title="Update Information"
            />



        </View>
    );
  }
}

export default Profile;
