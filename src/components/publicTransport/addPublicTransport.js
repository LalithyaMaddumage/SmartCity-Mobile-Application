import { View, Text , StyleSheet , TextInput ,SafeAreaView,Picker,Button ,Alert ,ScrollView, TouchableHighlight,ToastAndroid } from 'react-native'
import SelectList from 'react-native-dropdown-select-list';
import React, { useState } from 'react';
import {PublicTransportAdd} from '../../../services/publicTransportService';

export default function AddPublicTransport() {

    const [routeNo, setRouteNo] = useState("");
    const [route, setRoute] = useState("");
    const [discription , setDiscription] = useState ("");
    const [vehicleNo , setVehicleNo] = useState ("");
    const [contact, setContact] = useState("");
    

    const sendData = async() =>{
        const newPublicTransport={
            routeNo,
            route,
            discription,
            vehicleNo,
            contact
        }

        let response=await PublicTransportAdd (newPublicTransport);

        console.log("data add",response);


        if(response.ok){
            ToastAndroid.show(

                'Public Transport Successfully Added..', ToastAndroid.SHORT
              );

            
        }


    }
    
   
  return (
    <View style={styles.body}>
      
      <View>

      <ScrollView>
                <Text style={styles.header}>
                    Public Transport Details
                </Text>
                <View>
               
                <SafeAreaView>

                    {/* Route Number */}

                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setRouteNo(e)}} 
                    placeholder ="Route Number"
                    required>
                    </TextInput>

                    {/* Route  */}
 
                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setRoute(e)}} 
                    placeholder ="Route"
                    required>
                    </TextInput>

                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setDiscription(e)}} 
                    placeholder ="Discription"
                    required>
                    </TextInput>


                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setVehicleNo(e)}} 
                    placeholder ="Vehicle No"
                    required>
                    </TextInput>


                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setContact(e)}} 
                    placeholder ="Contact"
                    required>
                    </TextInput>

            
                    </SafeAreaView>

                    {/* Add fuel Button  */}
             
                    <View style={styles.addBtn}>

                    <TouchableHighlight underlayColor='none' style={styles.resetbutton}
                       onPress={() => sendData()
                     } >
                     <Text style={styles.resettext}>Add</Text>
                     </TouchableHighlight>  

                     </View>  
                 
                </View>
                
                </ScrollView>
        </View>
        
    </View>
  )
}



const styles = StyleSheet.create({
    body: {
    //  alignSelf:'stretch',
        alignItems: 'center',
        paddingTop: 50,
      
        // // backgroundColor: 'blue',
        // // fontSize: 150
        // justifyContent: 'center',
    },

    header:{
        textAlign: 'center',
        fontSize: 40
    },

    nameText: {
        marginLeft: 20,
        marginBottom:8,
        marginTop:12,
        fontStyle:'bold',
    
        fontSize: 15,
    
        color: 'black'
    
      },

      selectText: {
        marginLeft: 20,
        marginTop:12,
        // marginBottom:8,
        fontStyle:'bold',
    
        fontSize: 14,
    
        color: 'black'
    
      },
    
    
    
      name: {
    
        borderColor: 'blue' , 
        borderRadius:20,
        width:300,
        height: 45,
        marginLeft: 12,
        marginTop:12,
        borderWidth: 1,
        padding: 12,
      },

      addBtn:{
        // margin:12,
        marginTop:35,
      },

      resetbutton: {
        width: 200,
        height: 45,
        //marginTop: 8,
        marginLeft: 60,
        backgroundColor: "#40C565",
        borderRadius: 15,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 100,
        shadowRadius: 50,
        elevation: 20,
      },
    
      resettext: {
        marginTop: 5,
        padding: 5,
        //marginLeft: 40,
        fontSize: 18,
        color: "white",
        textAlign: 'center',
    
      },
    

     
})

