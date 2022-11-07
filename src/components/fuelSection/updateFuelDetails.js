import { View, Text,StyleSheet ,ScrollView,TextInput ,TouchableHighlight ,ToastAndroid } from 'react-native'
import React , {useState, useEffect} from 'react'
import SelectList from 'react-native-dropdown-select-list';
import { updateFuel ,DeleteFuel} from '../../../services/fuelService';

export default function UpdateFuelDetails(props) {

    console.log("update" , props);

    const [stationName, setName] = useState("");
    const [location, setLocation] = useState("");
    const [from , setTimeFromSelected] = useState ("");
    const [to , setTimeToSelected] = useState ("");
    const [petrol , setPetrolAvailabilitySelected] = useState ("");
    const [diesel , setdieselAvailabilitySelected] = useState ("");
    const [contact, setContact] = useState("");



    const sendData = async() =>{
        const newupdateFuel={
            stationName,
            location,
            from,
            to,
            petrol,
            diesel,
            contact
        }

        let response=await updateFuel (props.data._id,newupdateFuel );

        console.log("data add",response);


        if(response.ok){
            ToastAndroid.show(

                'Fuel Station Successfully Updated..', ToastAndroid.SHORT
              );

            props.onHide(true);
            props.refresh();
        }


    }

const deleteFuelStation=async()=>{
    let response = await DeleteFuel(props.data._id);


    if(response.ok){
        ToastAndroid.show(

            'Fuel Station Successfully Deleted..', ToastAndroid.SHORT
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

    const avdata = [
        {key :'Yes' , value: 'Yes '},
        {key :'No' , value: 'No'},  
    ];
      

    useEffect(() => {

        setName(props.data.stationName)
        setLocation(props.data.location)
        setTimeFromSelected(props.data.from)
        setTimeToSelected(props.data.to)
        setPetrolAvailabilitySelected(props.data.petrol)
        setdieselAvailabilitySelected(props.data.diesel)
        setContact(props.data.contact)
        
    }, [props.data])


  return (
    <View style={styles.centeredView}>
        <View style={styles.modalView}>

        <ScrollView>
    
        <View style={{ marginTop: 10 }} >
        
                        <Text style={styles.stationName}>{stationName} </Text>
                        <TextInput style={styles.name}
                            value={stationName} 
                    onChangeText={(e) => {setName(e)}} 
                    // placeholder ="Fuel Station Name"
                    >

                    </TextInput>

                    {/* Fuel station Loaction  */}
 
                    <TextInput style={styles.name} 
                    value ={location}
                    onChangeText={(e) => {setLocation(e)}} 
                    // placeholder ="Location"
                    required>

                    </TextInput>

                      {/* Opening hours fuel station from selection */}
                      <Text style={styles.selectText}>Open From :</Text>
                    <SelectList  
                    boxStyles ={{borderColor:'blue', borderRadius:20,  width:300,
                    height: 45,
                    margin: 7,
                    borderWidth: 1,
                    padding: 12,}}

                    dropdownStyles={{borderColor:'blue',
                    borderRadius:20,
                    margin: 7,
                    width:300,
                    }}
                    data={data}
                  
                    setSelected={setTimeFromSelected} 
                    defaultOption={{ key:from, value:from }}
                    />

                    {/* opening hours time to selection */}

                    <Text style={styles.selectText}>To : </Text>
                    <SelectList  
                    boxStyles ={{borderColor:'blue', borderRadius:20,  width:300,
                    height: 45,
                    marginLeft: 7,
                    marginTop:8,
                    borderWidth: 1,
                    padding: 10,}}

                    dropdownStyles={{borderColor:'blue',
                    borderRadius:20,
                    margin: 7,
                    width:300,
                    }}
                    data={data}
                    setSelected={setTimeToSelected}
                    defaultOption={{ key:to, value:to }}
                    />

                    
                     {/* petrol availability selection  */}
                       
                     <Text style={styles.selectText}>Petrol Available :</Text>
                    <SelectList  
                    boxStyles ={{borderColor:'blue', borderRadius:20,  width:300,
                    height: 45,
                    marginLeft: 7,
                    marginTop:8,
                    borderWidth: 1,
                    padding: 10,}}

                    dropdownStyles={{borderColor:'blue',
                    borderRadius:20,
                    margin: 7,
                    width:300,
                    }}
                    data={avdata}
                    setSelected={setPetrolAvailabilitySelected} 
                    defaultOption={{ key:petrol, value:petrol }}
                    />

                    {/* diesel availability selection */}

                    <Text style={styles.selectText}>Diesel Available : </Text>
                    <SelectList  
                    boxStyles ={{borderColor:'blue', borderRadius:20,  width:300,
                    height: 45,
                    marginLeft: 7,
                    marginTop:8,
                    borderWidth: 1,
                    padding: 10,}}

                    dropdownStyles={{borderColor:'blue',
                    borderRadius:20,
                    margin: 7,
                    width:300,
                    }}
                    data={avdata}
                    setSelected={setdieselAvailabilitySelected}
                    defaultOption={{ key:diesel, value:diesel }}
                    />


                    {/* Fuel station contact number */}

                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setContact(e)}} 
                    // placeholder ="Contact Number"
                    value={contact}
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
                       onPress={() => deleteFuelStation()
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