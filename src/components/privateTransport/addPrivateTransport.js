import { View, Text , StyleSheet , TextInput ,SafeAreaView,Picker,Button ,Alert ,ScrollView, TouchableHighlight,ToastAndroid } from 'react-native'
import SelectList from 'react-native-dropdown-select-list';
import React, { useState } from 'react';
import {PrivateTransportAdd} from '../../../services/privateTransportService';

export default function AddPrivateTransport() {

    const [vehicle, setVehicle] = useState("");
    const [type, setType] = useState("");
    const [vehicleNo , setVehicleNo] = useState ("");
    const [contact, setContact] = useState("");
    const [km , setKm] = useState ("");
    const [totalPrice , setTotalPrice] = useState ("");
    const [name , setName] = useState ("");
    const [count , setCount] = useState ("");



    const sendData = async() =>{
        const newPrivateTransport={
            vehicle,
            type,
            vehicleNo,
            contact,
            km,
            totalPrice,
            name,
            count
        }

        let response=await PrivateTransportAdd (newPrivateTransport);

        console.log("data add",response);


        if(response.ok){
            ToastAndroid.show(

                'Private Transport Successfully Added..', ToastAndroid.SHORT
              );

            
        }


    }

    const vdata = [
        {key :'Car' , value: 'Car '},
        {key :'Van' , value: 'Van'},
        {key :'Tuk' , value: 'Tuk'},

    ];

    const tdata = [
        {key :'taxi' , value: 'taxi'},
        {key :'self-drive' , value: 'self-drive'},
    ];
    
   
  return (
    <View style={styles.body}>
      
      <View>

      <ScrollView>
                <Text style={styles.header}>
                    Private Transport Details
                </Text>
                <View>
               
                <SafeAreaView>

                  {/* Service Name */}
                  <Text style={styles.selectText}>Service Name :</Text>

                  <TextInput style={styles.name} 
                    onChangeText={(e) => {setName(e)}} 
                    placeholder ="Service Name"
                    required>
                    </TextInput>

                    {/* Route Number */}

                    <Text style={styles.selectText}>Vehicle :</Text>
                    <SelectList  
                    boxStyles ={{borderColor:'blue', borderRadius:20,  width:300,
                    height: 45,
                    margin: 12,
                    borderWidth: 1,
                    padding: 12,}}

                    dropdownStyles={{borderColor:'blue',
                    borderRadius:20,
                    margin: 12,
                    width:300,
                    }}
                    data={vdata}
                    setSelected={setVehicle} />

                    {/* type  */}
 
                    <Text style={styles.selectText}>Type :</Text>
                    <SelectList  
                    boxStyles ={{borderColor:'blue', borderRadius:20,  width:300,
                    height: 45,
                    margin: 12,
                    borderWidth: 1,
                    padding: 12,}}

                    dropdownStyles={{borderColor:'blue',
                    borderRadius:20,
                    margin: 12,
                    width:300,
                    }}
                    data={tdata}
                    setSelected={setType} />

                     {/* Service Name */}
                  <Text style={styles.selectText}>No of Passengers :</Text>

                  <TextInput style={styles.name} 
                    onChangeText={(e) => {setCount(e)}} 
                    placeholder ="No of Passengers"
                    required>
                    </TextInput>


                    {/* Vehicle No */}

                    <Text style={styles.selectText}>Vehicle No :</Text>

                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setVehicleNo(e)}} 
                    placeholder ="Vehicle No"
                    required>
                    </TextInput>

                    {/* contact */}
                    <Text style={styles.selectText}>Contact :</Text>

                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setContact(e)}} 
                    placeholder ="Contact"
                    required>
                    </TextInput>

                     {/* km */}
                     <Text style={styles.selectText}>km :</Text>

                     <TextInput style={styles.name} 
                    onChangeText={(e) => {setKm(e)}} 
                    placeholder ="km"
                    required>
                    </TextInput>

                     {/* contact */}
                     <Text style={styles.selectText}>Price :</Text>

                     <TextInput style={styles.name} 
                    onChangeText={(e) => {setTotalPrice(e)}} 
                    placeholder ="Total Price"
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

