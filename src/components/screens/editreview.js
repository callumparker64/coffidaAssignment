import React, { Component } from 'react';
import { Text, View, Button,AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class EditReview extends Component{

    render(){

    
        return(
            <View>
                <Text>Main Screen!</Text>
                <Button 
                    onPress={() => this.props.navigation.goBack()}
                    title="Go Back"
                />
            </View>
        );
      }
}

export default EditReview;
