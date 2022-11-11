import { View, Text , StyleSheet , TextInput ,SafeAreaView,Picker,Button ,Alert ,ScrollView, TouchableHighlight,ToastAndroid, RefreshControl } from 'react-native'
import SelectList from 'react-native-dropdown-select-list';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import {AddWaterCut} from '../../../services/waterServices';

export default function AddWaterCutDetails(){
    const [Location, setLocation] = useState("");
    const [From, setTimeFrom] = useState("");
    const [To, setTimeTo] = useState("");
    const [Date, setDate] = useState("");
    // const [open, setOpen] = useState(false);

    const sendData = async()=>{
        console.log("sendData");
        const newWater = {
            Location,
            From,
            To,
            Date
        }

        let response = await AddWaterCut (newWater);

        console.log("data added", response);

        if (response.ok){
            ToastAndroid.show(
                'Water Cut Shedule Successfully Added..', ToastAndroid.SHORT
            );
        }
    }

    const data = [
        {key :'24.00 am' , value: '24.00 am '},
        {key :'1.00 am' , value: '1.00 am'},
        {key :'2.00 am' , value: '2.00 am'},
        {key :'3.00 am' , value: '3.00 am'},
        {key :'4.00 am' , value: '4.00 am'},
        {key :'5.00 am' , value: '5.00 am'},
        {key :'6.00 am' , value: '6.00 am'},
        {key :'7.00 am' , value: '7.00 am'},
        {key :'8.00 am' , value: '8.00 am'},
        {key :'9.00 am' , value: '9.00 am'},
        {key :'10.00 am' , value: '10.00 am'},
        {key :'11.00 am' , value: '11.00 am'},
        {key :'12.00 pm' , value: '12.00 pm'},
        {key :'13.00 pm' , value: '13.00 pm'},
        {key :'14.00 pm' , value: '14.00 pm'},
        {key :'15.00 pm' , value: '15.00 pm'},
        {key :'16.00 pm' , value: '16.00 pm'},
        {key :'17.00 pm' , value: '17.00 pm'},
        {key :'18.00 pm' , value: '18.00 pm'},
        {key :'19.00 pm' , value: '19.00 pm'},
        {key :'20.00 pm' , value: '20.00 pm'},
        {key :'21.00 pm' , value: '21.00 pm'},
        {key :'22.00 pm' , value: '22.00 pm'},
        {key :'23.00 pm' , value: '23.00 pm'},
    ];

    const ldata =[
        {key :'Colombo 1' , value: 'Colombo 1 '},
        {key :'Colombo 2' , value: 'Colombo 2 '},
        {key :'Colombo 3' , value: 'Colombo 3 '},
        {key :'Colombo 4' , value: 'Colombo 4 '},
        {key :'Colombo 5' , value: 'Colombo 5 '},
        {key :'Colombo 6' , value: 'Colombo 6 '},
        {key :'Colombo 7' , value: 'Colombo 7 '},
        {key :'Colombo 8' , value: 'Colombo 8 '},
        {key :'Colombo 9' , value: 'Colombo 9 '},
        {key :'Colombo 10' , value: 'Colombo 10 '},
        {key :'Colombo 11' , value: 'Colombo 11 '},
        {key :'Colombo 12' , value: 'Colombo 12 '},
        {key :'Colombo 13' , value: 'Colombo 13 '},
        {key :'Colombo 14' , value: 'Colombo 14 '},
        {key :'Colombo 15' , value: 'Colombo 15 '},
    ];

    return(
        <View style= {StyleSheet.body}>
            <View>
                <ScrollView>

                <Text style={styles.header}>
                    Water Cut Shedules
                </Text>

                <View>
                    <SafeAreaView>

                        {/* Water cut location */}
                        <Text style={styles.selectText}>Location :</Text>
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
                        data={ldata}
                        setSelected={setLocation} />

                        {/* Water cut starting time */}
                        <Text style={styles.selectText}>From :</Text>
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
                        data={data}
                        setSelected={setTimeFrom} />

                        {/* Water cut ending time */}
                        <Text style={styles.selectText}>To :</Text>
                        <SelectList  
                        boxStyles ={{borderColor:'blue', borderRadius:20,  width:300,
                        height: 45,
                        marginLeft: 12,
                        marginTop:8,
                        borderWidth: 1,
                        padding: 10,}}

                        dropdownStyles={{borderColor:'blue',
                        borderRadius:20,
                        margin: 12,
                        width:300,
                        }}
                        data={data}
                        setSelected={setTimeTo} />

                        {/* Water cut date */}
                        <Text style={styles.selectText}>Date :</Text>
                        <TextInput style={styles.name} 
                        onChangeText={(e) => {setDate(e)}} 
                        placeholder ="Date"
                        type='date'
                        required>
                        </TextInput>

                    </SafeAreaView>

                    {/* Add water cut shedule button  */}
             
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