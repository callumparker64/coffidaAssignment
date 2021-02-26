import React, { Component } from 'react';
import { Text, View, Button,AsyncStorage,Alert } from 'react-native';
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

      addReview = async() => {
        let to_send = {
          overall_rating: parseInt(this.state.overall_rating),
          price_rating: parseInt(this.state.price_rating),
          quality_rating: parseInt(this.state.quality_rating),
          clenliness_rating: parseInt(this.state.clenliness_rating),
          review_body: this.state.review_body

        };
        let loc_id = await AsyncStorage.getItem('@location_id');
        let token = await AsyncStorage.getItem('@session_token');
        return fetch("http://10.0.2.2:3333/api/1.0.0/location/" + loc_id +"/review",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
          "X-Authorization": token},
          body: JSON.stringify(to_send)
        })
        .then((response) => {
          if(response.status === 201){
            Alert.alert("Review Added!");
            return response.json()
            
          }
          else if(response.status === 400)
          {
            throw "Failed Validation";
          }
          else if(response.status === 401)
          {
            throw "Unauthorized";
          }
          else if(response.status === 404)
          {
            throw "Location not found";
          }
          else
          {
            throw "Error";
          }
          
        })
        .then((responseJson) => {
            
        })
        .catch((error) => {
          console.error(error);
        });
      }

    render(){

    
        return(
            <View>
                <Text>Main Screen!2</Text>

                <TextInput 
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Overall Rating: "
                    keyboardType = 'numeric'
                    onChangeText={(overall_rating) => this.setState({overall_rating})}
                    value={this.state.overall_rating}> 
                </TextInput>

                <TextInput 
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Price Rating: "
                    onChangeText={(price_rating) => this.setState({price_rating})}
                    value={this.state.price_rating}> 
                </TextInput>
                <TextInput 
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Quality Rating: "
                    keyboardType = 'numeric'
                    onChangeText={(quality_rating) => this.setState({quality_rating})}
                    value={this.state.quality_rating}> 
                </TextInput>

                <TextInput 
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Clenliness Rating: "
                    keyboardType = 'numeric'
                    onChangeText={(clenliness_rating) => this.setState({clenliness_rating})}
                    value={this.state.clenliness_rating}> 
                </TextInput>

                <TextInput 
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Please Write your review here: "
                    keyboardType = 'numeric'
                    onChangeText={(review_body) => this.setState({review_body})}
                    value={this.state.review_body}> 
                </TextInput>
                <Button 
                    onPress={() => this.addReview()}
                    title="Add Review"
                />
                <Button 
                  onPress={() => this.props.navigation.navigate('Edit')}
                  title="Edit a review"
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
