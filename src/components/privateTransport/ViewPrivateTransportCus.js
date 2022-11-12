
import { View, Text,StyleSheet ,ScrollView,TextInput ,TouchableHighlight ,ToastAndroid } from 'react-native'
import React , {useState, useEffect} from 'react'


export default function ViewPrivateTransportDetailsCus(props) {

    console.log("update" , props);

    const [vehicle, setVehicle] = useState("");
    const [type, setType] = useState("");
    const [vehicleNo , setVehicleNo] = useState ("");
    const [contact, setContact] = useState("");
    const [km , setKm] = useState ("");
    const [totalPrice , setTotalPrice] = useState ("");
    const [name , setName] = useState ("");
    const [count , setCount] = useState ("");



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


                    

                    {/* Fuel station Loaction  */}
                        <View style={styles.time1}>
                       
                       <Text style={styles.name2}>Service Name : </Text>
  
                       <Text style={styles.name3}>{name}</Text>
                          </View>

                      {/* Opening hours gas station from selection
                      <Text style={styles.name2}>Open From :</Text>

                      <View style={styles.time}>
                      <Text style={styles.name3}>{from}</Text>
                      <Text style={styles.name3}> - </Text>
                      <Text style={styles.name3}>{to}</Text>

                      </View> */}

                    
                     {/* gas availability selection  */}
                     <View style={styles.time1}>
                       
                     <Text style={styles.name2}>Vehicle : </Text>

                     <Text style={styles.name3}>{vehicle}</Text>
                        </View>

                        {/* description */}
                        <View style={styles.time1}>
                       
                       <Text style={styles.name2}>Type : </Text>
  
                       <Text style={styles.name3}>{type}</Text>
                          </View>

                          {/* description */}
                        <View style={styles.time1}>
                       
                       <Text style={styles.name2}>No of Passengers : </Text>
  
                       <Text style={styles.name3}>{count}</Text>
                          </View>

                          {/* description */}
                        <View style={styles.time1}>
                       
                       <Text style={styles.name2}>Vehicle No : </Text>
  
                       <Text style={styles.name3}>{vehicleNo}</Text>
                          </View>

                    {/* description */}
                    <View style={styles.time1}>
                       
                       <Text style={styles.name2}>Contact : </Text>
  
                       <Text style={styles.name3}>{contact}</Text>
                          </View>

                          {/* description */}
                    <View style={styles.time1}>
                       
                       <Text style={styles.name2}>km : </Text>
  
                       <Text style={styles.name3}>{km}</Text>
                          </View>

                          {/* description */}
                    <View style={styles.time1}>
                       
                       <Text style={styles.name2}>Price : </Text>
  
                       <Text style={styles.name3}>{totalPrice}</Text>
                          </View>


                  
                    <View style={styles.Btn}>

                    <View style={styles.upBtn}>

                    <TouchableHighlight underlayColor='none' style={styles.upbutton}

                       onPress={() => props.onHide()

                        
                     } 
                    >
                     <Text style={styles.uptext}>Close</Text>
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
    fontSize: 30,
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
    // marginLeft: 45,
    marginLeft:110,
    backgroundColor: "#ff4f6e",
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

  name1:{
    fontSize: 22,
    color:'#64dc9b',
    marginLeft:10,
    marginTop:20
  },

  name2:{
    fontSize: 22,
    color:'black',
    marginLeft:10,
    marginTop:10
  },

  name3:{
    fontSize: 22,
    color:'#64dc9b',
    marginLeft:10,
    marginTop:10
  },
  time:{
    flexDirection:'row',
    alignItems:'flex-start',
    marginLeft:20
  },
  time1:{
    flexDirection:'row',
    alignItems:'flex-start'
  }

})