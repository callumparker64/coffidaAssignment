import React, { Component } from 'react';
import { Text, View, Button,AsyncStorage,FlatList,Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class EditReview extends Component{

    constructor(props) {
      super(props);
      this.state = {
        idInp: '',
        overall_rating: '',
        price_rating: '',
        quality_rating: '',
        clenliness_rating: '',
        review_body: '',
        LocationData: []
      };
    }

    getLocation = async() =>{
        let loc_id = await AsyncStorage.getItem('@location_id');
        return fetch("http://10.0.2.2:3333/api/1.0.0/location/" + loc_id,
        {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if(response.status === 200)
          {
            return response.json()
          }
          else if(response.status === 404)
          {
            throw 'User Not found';
          }
          else
          {
            throw 'Error';
          }
        })
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({LocationData: responseJson,});
        })
        .catch((error) => {
          console.error(error);
        });
      }


      componentDidMount(){
          this.getLocation()
      }

      updateReview = async() => {
        let loc_id = await AsyncStorage.getItem('@location_id');
        let token = await AsyncStorage.getItem('@session_token');

        let to_send = {
          overall_rating: parseInt(this.state.overall_rating),
          price_rating: parseInt(this.state.price_rating),
          quality_rating: parseInt(this.state.quality_rating),
          clenliness_rating: parseInt(this.state.clenliness_rating),
          review_body: this.state.review_body

        };

        return fetch("http://10.0.2.2:3333/api/1.0.0/location/"+loc_id,
        {
          method: 'PATCH',
          headers: { 
            'Content-Type': 'application/json',
            "X-Authorization": token
          },
          body: JSON.stringify(to_send)
        })
        .then((response) => {
            if(response.status === 200)
            {
              Alert.alert("Updated Successfully!");
            }
            else if(response.status === 400)
            {
              throw 'Bad request';
            }
            else if(response.status === 401)
            {
              throw 'Not Authorized';
            }
            else if(response.status === 403)
            {
              throw 'Forbidden';
            }
            else if(response.status === 404)
            {
              throw 'User Not found';
            }
            else
            {
              throw 'Error';
            }
        })
        .catch((error) => {
          console.error(error);
        });
      }



    render(){

    
        return(
            <View>
                <FlatList
                  data={this.state.LocationData}
                  renderItem={({item}) =>(
                    <View>
                      <Text>{item.location_name}</Text>
                      <TextInput 
                          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                          onChangeText={(overall_rating) => this.setState({overall_rating})}
                          value={this.state.overall_rating}
                          defaultValue ={this.state.overall_rating}> 
                      </TextInput>

                      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                          onChangeText={(price_rating) => this.setState({price_rating})}
                          value={this.state.price_rating}
                          defaultValue ={this.state.price_rating}> 
                      </TextInput>
                      <TextInput 
                          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                          onChangeText={(quality_rating) => this.setState({quality_rating})}
                          value={this.state.quality_rating}
                          defaultValue ={this.state.quality_rating}> 
                      </TextInput>
                      <TextInput 
                          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                          onChangeText={(clenliness_rating) => this.setState({clenliness_rating})}
                          value={this.state.clenliness_rating}
                          defaultValue ={this.state.clenliness_rating}> 
                      </TextInput>
                      <TextInput 
                          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                          onChangeText={(review_body) => this.setState({review_body})}
                          value={this.state.review_body}
                          defaultValue ={this.state.review_body}> 
                      </TextInput>
                      <Button 
                        onPress={() => this.updateReview(item.location_id)}
                        title="Write a review"
                      />
                    </View>
                  
                  )}
                  keyExtractor={(item,index) => item.id}
                />


                <Button 
                    onPress={() => this.props.navigation.goBack()}
                    title="Go Back"
                />
            </View>
        );
      }
}

export default EditReview;
