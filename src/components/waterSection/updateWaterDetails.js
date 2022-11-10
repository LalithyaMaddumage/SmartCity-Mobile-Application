import { View, Text,StyleSheet ,ScrollView,TextInput ,TouchableHighlight ,ToastAndroid } from 'react-native'
import React , {useState, useEffect} from 'react'
import SelectList from 'react-native-dropdown-select-list';
import {updateShedule, DeleteShedule} from '../../../services/waterServices';

export default function UpdateWaterCutDetails(props){
    console.log("update water cut details",props);

    const [Location, setLocation] = useState("");
    const [From, setTimeFrom] = useState("");
    const [To, setTimeTo] = useState("");
    const [Date, setDate] = useState("");

    const sendData = async()=>{
        const updateWater = {
            Location,
            From,
            To,
            Date
        }

        let response = await updateShedule(props.data._id, updateWater);
        console.log("data update",response);

        if(response.ok){
            ToastAndroid.show(

                'Water Cut Shedule Successfully Updated..', ToastAndroid.SHORT
              );

            props.onHide(true);
            props.refresh();
        }

    }

    const deleteWaterCutShedule=async()=>{
        let response = await DeleteShedule(props.data._id);
    
    
        if(response.ok){
            ToastAndroid.show(
    
                'Water Cut Shedule Successfully Deleted..', ToastAndroid.SHORT
              );
    
            props.onHide(true);
            props.refresh();
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

    useEffect(()=>{
        setLocation(props.data.Location)
        setTimeFrom(props.data.From)
        setTimeTo(props.data.To)
        setDate(props.data.Date)
    },[props.data])

    return(
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <ScrollView>
                <View style={{ marginTop: 10 }} >
                <Text style={styles.stationName}>Water Cut - {Location} </Text>

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
                        setSelected={setLocation}
                        defaultOption = {{key:Location, value:Location}} 
                />

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
                        setSelected={setTimeFrom} 
                        defaultOption = {{key:From, value:From}}
                />

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
                        setSelected={setTimeTo} 
                        defaultOption={{key:To, value:To}}
                />

                {/* Water cut date */}
                <Text style={styles.selectText}>Date :</Text>
                        <TextInput style={styles.name} 
                        onChangeText={(e) => {setDate(e)}} 
                        // placeholder ="Date"
                        type='date'
                        value={Date}
                        required>
                </TextInput>

                <View style={styles.Btn}>
                    <View style={styles.upBtn}>
                        <TouchableHighlight underlayColor='none' style={styles.upbutton}
                        onPress={() => sendData()
                            } >
                        <Text style={styles.uptext}>Update</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.delBtn}>
                    <TouchableHighlight underlayColor='none' style={styles.delbutton}
                       onPress={() => deleteWaterCutShedule()
                        } >
                     <Text style={styles.deltext}>Delete</Text>
                     </TouchableHighlight> 
                     </View>

                </View>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: "flex-start",
        // alignItems: "flex-start",
        margin:20,
        marginTop: 22
    },
    
    stationName:{
        textAlign:'center',
        fontSize: 22,
        color:'darkblue',
    },
    
    modalView: {
        marginLeft: 7,
        marginRight: 7,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    
    
    text: {
        color: 'black',
        fontSize: 18
    },
    
    name: {
        
        borderColor: 'blue' , 
        borderRadius:20,
        width:300,
        height: 45,
        marginLeft: 7,
        marginTop:12,
        borderWidth: 1,
        padding: 12,
      },
    
      selectText: {
        marginLeft: 20,
        marginTop:10,
        // marginBottom:8,
        fontStyle:'bold',
    
        fontSize: 14,
        
        color: 'black',
        
    
      },
     Btn:{
        flexDirection:'row'
     },
      upBtn:{
        // margin:12,
        marginTop:20,
        marginBottom:20,
      },
    
      upbutton: {
        width: 80,
        height: 30,
        //marginTop: 8,
        marginLeft: 45,
        backgroundColor: "orange",
        borderRadius: 15,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 100,
        shadowRadius: 50,
        elevation: 5,
      },
    
      uptext: {
        marginTop: 2,
        padding: 2,
        //marginLeft: 40,
        fontSize: 15,
        color: "white",
        textAlign: 'center',
    
      },
    
      delBtn:{
        // margin:12,
        marginTop:20,
        marginBottom:20,
      },
    
      delbutton: {
        width: 80,
        height: 30,
        //marginTop: 8,
        marginLeft: 60,
        backgroundColor: "red",
        borderRadius: 15,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 100,
        shadowRadius: 50,
        elevation: 5,
      },
    
      deltext: {
        marginTop: 2,
        padding: 2,
        //marginLeft: 40,
        fontSize: 15,
        color: "white",
        textAlign: 'center',
    
      },
    
    
    })