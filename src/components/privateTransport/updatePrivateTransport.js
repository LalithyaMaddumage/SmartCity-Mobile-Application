import { View, Text,StyleSheet ,ScrollView,TextInput ,TouchableHighlight ,ToastAndroid } from 'react-native'
import React , {useState, useEffect} from 'react'
import SelectList from 'react-native-dropdown-select-list';
import { updatePrivateTransport ,DeletePrivateTransport} from '../../../services/privateTransportService';

export default function UpdatePrivateTransportDetails(props) {

    console.log("update" , props);

    const [vehicle, setVehicle] = useState("");
    const [type, setType] = useState("");
    const [vehicleNo , setVehicleNo] = useState ("");
    const [contact, setContact] = useState("");
    const [km , setKm] = useState ("");
    const [totalPrice , setTotalPrice] = useState ("");
    const [name , setName] = useState ("");
    const [count , setCount] = useState ("");




    const sendData = async() =>{
        const newupdatePrivateTransport={
            vehicle,
            type,
            vehicleNo,
            contact,
            km,
            totalPrice,
            name,
            count
        }

        let response=await updatePrivateTransport (props.data._id,newupdatePrivateTransport );

        console.log("data add",response);


        if(response.ok){
            ToastAndroid.show(

                'Private Transport Details Successfully Updated..', ToastAndroid.SHORT
              );

            props.onHide(true);
            props.refresh();
        }


    }

const deletePrivateTransport=async()=>{
    let response = await DeletePrivateTransport(props.data._id);


    if(response.ok){
        ToastAndroid.show(

            'Private Transport Details Successfully Deleted..', ToastAndroid.SHORT
          );

        props.onHide(true);
        props.refresh();
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
      
    useEffect(() => {

        setVehicle(props.data.vehicle)
        setType(props.data.type)
        setVehicleNo(props.data.vehicleNo)
        setContact(props.data.contact)
        setKm(props.data.km)
        setTotalPrice(props.data.totalPrice)
        setName(props.data.name)
        setCount(props.data.count)

    }, [props.data])


  return (
    <View style={styles.centeredView}>
        <View style={styles.modalView}>

        <ScrollView>
    
        <View style={{ marginTop: 10 }} >
        
                        <Text style={styles.stationName}>{name} </Text>

                        <Text style={styles.selectText}>Service Name :</Text>
                      <TextInput style={styles.name} 
                    value ={name}
                    onChangeText={(e) => {setName(e)}} 
                    // placeholder ="Location"
                    required>

                    </TextInput>

                        <Text style={styles.selectText}>Vehicle :</Text>
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
                    data={vdata}
                  
                    setSelected={setVehicle} 
                    defaultOption={{ key:vehicle, value:vehicle }}
                    />

                    {/* Fuel station Loaction  */}
 
                    <Text style={styles.selectText}>Type :</Text>
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
                    data={tdata}
                  
                    setSelected={setType} 
                    defaultOption={{ key:type, value:type }}
                    />

                    <Text style={styles.selectText}>No of Passengers :</Text>
                      <TextInput style={styles.name} 
                    value ={count}
                    onChangeText={(e) => {setCount(e)}} 
                    // placeholder ="Location"
                    required>

                    </TextInput>        


                      {/* Opening hours fuel station from selection */}
                      <Text style={styles.selectText}>Vehicle No :</Text>
                      <TextInput style={styles.name} 
                    value ={vehicleNo}
                    onChangeText={(e) => {setVehicleNo(e)}} 
                    // placeholder ="Location"
                    required>

                    </TextInput>

                     {/* petrol availability selection  */}
                       
                     <Text style={styles.selectText}>Contact :</Text>
                     <TextInput style={styles.name} 
                    value ={contact}
                    onChangeText={(e) => {setContact(e)}} 
                    // placeholder ="Location"
                    required>

                    </TextInput>

                    {/* opening hours time to selection */}

                    <Text style={styles.selectText}>km : </Text>
                    <TextInput style={styles.name} 
                    value ={km}
                    onChangeText={(e) => {setKm(e)}} 
                    // placeholder ="Location"
                    required>

                    </TextInput>

                    {/* opening hours time to selection */}

                    <Text style={styles.selectText}>Price : </Text>
                    <TextInput style={styles.name} 
                    value ={totalPrice}
                    onChangeText={(e) => {setTotalPrice(e)}} 
                    // placeholder ="Location"
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
                       onPress={() => deletePrivateTransport()
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