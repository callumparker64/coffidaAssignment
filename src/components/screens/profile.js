import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {
          fname: '',
          lname: '',
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
          fname: this.state.fname,
          lname: this.state.lname,
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
                onChangeText={(fname) => this.setState({fname})}
                value={this.state.fname}
                defaultValue ={this.state.fname}> 
            </TextInput>

            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(lname) => this.setState({lname})}
                value={this.state.lname}
                defaultValue ={this.state.lname}> 
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
