import React, { Component } from 'react';
import { Text, View, Button, Alert,FlatList,AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Reviews extends Component{

    constructor(props) {
        super(props);
        this.state = {
          LocationData: []
        };
      }




      displayLocation = async() =>{
        let token = await AsyncStorage.getItem('@session_token');
        return fetch("http://10.0.2.2:3333/api/1.0.0/find/",
        {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json',
            "X-Authorization": token
          },
        })
        .then((response) => {
          if(response.status === 200)
          {
            return response.json()
          }
          else if(response.status === 401)
          {
            throw 'Not Authorized';
          }
          else if(response.status === 404)
          {
            throw 'Location Not found';
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
        this.displayLocation()
      }


  render(){

    
    return(
        <View>
              <FlatList
                data={this.state.LocationData}
                renderItem={({item}) =>(
                  <View>
                    <Text>{item.location_name}</Text>
                  </View>

                )}
                keyExtractor={(item,index) => item.id}
              />
        </View>
    );
  }
}

export default Reviews;
