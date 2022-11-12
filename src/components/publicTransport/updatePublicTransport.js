import { View, Text,StyleSheet ,ScrollView,TextInput ,TouchableHighlight ,ToastAndroid } from 'react-native'
import React , {useState, useEffect} from 'react'
import SelectList from 'react-native-dropdown-select-list';
import { updatePublicTransport ,DeletePublicTransport} from '../../../services/publicTransportService';

export default function UpdatePublicTransportDetails(props) {

    console.log("update" , props);

    const [routeNo, setRouteNo] = useState("");
    const [route, setRoute] = useState("");
    const [discription , setDiscription] = useState ("");
    const [vehicleNo , setVehicleNo] = useState ("");
    const [contact, setContact] = useState("");



    const sendData = async() =>{
        const newupdatePublicTransport={
            routeNo,
            route,
            discription,
            vehicleNo,
            contact
        }

        let response=await updatePublicTransport (props.data._id,newupdatePublicTransport );

        console.log("data add",response);


        if(response.ok){
            ToastAndroid.show(

                'Public Transport Details Successfully Updated..', ToastAndroid.SHORT
              );

            props.onHide(true);
            props.refresh();
        }


    }

const deletePublicTransport=async()=>{
    let response = await DeletePublicTransport(props.data._id);


    if(response.ok){
        ToastAndroid.show(

            'Public Transport Details Successfully Deleted..', ToastAndroid.SHORT
          );

        props.onHide(true);
        props.refresh();
    }
}
      
    useEffect(() => {

        setRouteNo(props.data.routeNo)
        setRoute(props.data.route)
        setDiscription(props.data.discription)
        setVehicleNo(props.data.vehicleNo)
        setContact(props.data.contact)
    }, [props.data])


  return (
    <View style={styles.centeredView}>
        <View style={styles.modalView}>

        <ScrollView>
    
        <View style={{ marginTop: 10 }} >
        
                        <Text style={styles.stationName}>{route} </Text>

                        <Text style={styles.selectText}>Route No :</Text>
                        <TextInput style={styles.name}
                            value={routeNo} 
                    onChangeText={(e) => {setRouteNo(e)}} 
                    // placeholder ="Fuel Station Name"
                    >

                    </TextInput>

                    {/* Fuel station Loaction  */}
 
                    <Text style={styles.selectText}>Route :</Text>
                    <TextInput style={styles.name} 
                    value ={route}
                    onChangeText={(e) => {setRoute(e)}} 
                    // placeholder ="Location"
                    required>

                    </TextInput>

                      {/* Opening hours fuel station from selection */}
                      <Text style={styles.selectText}>Discription :</Text>
                      <TextInput style={styles.name} 
                    value ={discription}
                    onChangeText={(e) => {setDiscription(e)}} 
                    // placeholder ="Location"
                    required>

                    </TextInput>

                    {/* opening hours time to selection */}

                    <Text style={styles.selectText}>Vehicle No : </Text>
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
                       onPress={() => deletePublicTransport()
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