import { View, Text, StyleSheet,RefreshControl,ScrollView,TouchableOpacity ,Modal } from 'react-native'
import Swipeable from 'react-native-gesture-handler';
import React , {useState, useEffect} from 'react'
import { getFuelStation } from '../../../services/fuelService'
import ViewFuelDetailsCus from './viewFuelDetailsCus';


const wait = (timeout) => {
return new Promise(resolve => setTimeout(resolve, timeout));
}



export default function FuelDetails() {

    const [fuelList, setFuelList] =useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const [modalData, setModalData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [id, setId] = useState("");


    const onRefresh = React.useCallback(() => {

        setRefreshing(true);

        wait(500).then(() => setRefreshing(false));

        getFuelStation().then((res) => {



            if (res.ok) {

                setFuelList(res.data);

            }

        }).catch((err) => {

            alert("error", err);

        })

    }, []);


    useEffect(() => {
        getFuelStation().then((res) => {
            if (res.ok) {
                setFuelList(res.data);
            }
        }).catch((err) => {

            alert("error", err);

        })
    }, [])



const List = () => {

    return fuelList.map((element) => {
    return (
    <View key={element._id}>

  
   
    <TouchableOpacity 
                onPress={() => { setId(element._id), setModalData(element) ,setModalVisible(true) }}
                >

    <View style={[styles.itemList, styles.elevation]}>

        
        <Text style={styles.titleID}>{element.stationName}</Text>
        {/* <View style={styles.fuellist}> */}
        <View style={styles.location}>
        <Text style={styles.titleData}>{element.location}</Text>
        {/* </View> */}
        </View>

        <View style={styles.list3}>
        <Text style={styles.list}>Opening Hours    </Text>

        <View style={styles.fuellist}>
        <Text style={styles.time}>From :  </Text>
        <Text style={styles.list1} > {element.from} </Text>
        <Text style={styles.time}>To :  </Text>
        <Text  style={styles.list1}>{element.to} </Text>
        </View>
        </View>
       
     
      
        </View>
        </TouchableOpacity>
       
        </View >
        )
         })
    }

   
  return (
    <View style ={styles.body}>
        
<ScrollView
refreshControl={
<RefreshControl
    refreshing={refreshing}
        onRefresh={onRefresh}
        />
        }
         >
    <View style={{ flex: 1, paddingTop: 20 }}>
    <Text style={styles.header}>
                    Fuel Details
                </Text>
         <View>{List()}</View>

    </View>


    <Modal

        animationType="slide"

        transparent={true}

        onHide={() => setModalVisible(false)}





        visible={modalVisible}

        onRequestClose={() => {

            // Alert.alert("Modal has been closed.");

            setModalVisible(false);

}}

>

<ViewFuelDetailsCus

    data={modalData}

    onHide={() => setModalVisible(false)}

    refresh ={onRefresh}

/>



</Modal>

</ScrollView >


      {/* <Text >Fuel Details</Text> */}
    </View>
  )
}



const styles = StyleSheet.create({
    body: {
   
        // alignItems: 'center',
        paddingTop: 50,
        margin:12,
      
       
    },

    header:{
        textAlign: 'left',
        fontSize: 40,
        marginLeft:15,
    },

    titleData: {
        color:'#75CEFF',
        fontSize: 18,
        fontWeight:'bold',
        marginLeft: 0,

    },

    titleID: {

        fontWeight: 'bold',
        color:'white',
        fontSize: 20,

    },



    itemList: {

        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "#111B34",
        borderRadius: 10,
        marginLeft: 17,
        borderColor: "#D8D8D8",
        borderWidth: 0.5,



    },

    elevation: {

        shadowColor: "Black",
        elevation: 2,

    },

    fuellist: {
       
        // marginTop:5,
        marginLeft:30,
        flexDirection : "row",
        alignItems : 'flex-start'
        // justifyContent: "center",
    },

    location :{
        flexDirection : "row",
        alignItems:"flex-end"
    },

    time:{
        fontWeight:'bold',
        color:'white'
    },


    list:{
        fontWeight:'bold',
        color:'white'
    },

    list1:{
        color:'#F2CD41'
    },

    list3 :{
        marginTop : 5,
    },
})