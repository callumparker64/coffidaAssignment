import React, { Component } from 'react';
import { Text, View, Button,AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class WriteReview extends Component{

    constructor(props) {
        super(props);
        this.state = {
          overall_rating: '',
          price_rating: '',
          quality_rating: '',
          clenliness_rating: '',
          review_body: ''
        };
      }

  
    render(){

    
        return(
            <View>
                <Text>Main Screen!2</Text>

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

export default WriteReview;
