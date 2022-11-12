import { View, Text, StyleSheet,RefreshControl,ScrollView,TouchableOpacity ,Modal,ImageBackground } from 'react-native'
import Swipeable from 'react-native-gesture-handler';
import React , {useState, useEffect} from 'react'
import { getWaste } from '../../../services/wasteService'
import ViewWasteDetailsCus from './viewWasteDetailsCus';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const wait = (timeout) => {
return new Promise(resolve => setTimeout(resolve, timeout));
}



export default function FuelDetails() {

    const [wasteList, setWasteList] =useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const [modalData, setModalData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [id, setId] = useState("");


    const onRefresh = React.useCallback(() => {

        setRefreshing(true);

        wait(500).then(() => setRefreshing(false));

        getWaste().then((res) => {



            if (res.ok) {

                setWasteList(res.data);

            }

        }).catch((err) => {

            alert("error", err);

        })

    }, []);


    useEffect(() => {
        getWaste().then((res) => {
            if (res.ok) {
                setWasteList(res.data);
            }
        }).catch((err) => {

            alert("error", err);

        })
    }, [])



const List = () => {

    return wasteList.map((element) => {
    return (
        
    <View key={element._id}>

  
   
    <TouchableOpacity 
                onPress={() => { setId(element._id), setModalData(element) ,setModalVisible(true) }}
                >

    <View style={[styles.itemList, styles.elevation]}>

        
        
        {/* <View style={styles.wasteList}> */}
        <View style={styles.location}>
        <Text style={styles.titleData}>{element.location}</Text>
        {/* </View> */}
        </View>

        <View style={styles.list3}>
        <Text style={styles.list}>Collect Hours    </Text>

        <View style={styles.wasteList}>
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
    <ImageBackground source = { require('../../../assets/background3.png')}  style={styles.body}>
        
<ScrollView
refreshControl={
<RefreshControl
    refreshing={refreshing}
        onRefresh={onRefresh}
        />
        }
         >
        
    <View style={{ flex: 2, paddingTop: 20 }}>
    <Text style={styles.header}>
                    Waste Manage Details
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

<ViewWasteDetailsCus

    data={modalData}

    onHide={() => setModalVisible(false)}

    refresh ={onRefresh}

/>



</Modal>


</ScrollView>

<View style={styles.bottom}>
<View style={{flex:1,flexDirection: "row"}}>

<Icon name = "cog-outline" color = "#ffffff" size = {40} style={{marginTop:7,marginLeft:50,marginRight:50}}/>
<Icon name = "home-outline" color = "#ffffff" size = {40} style={{marginTop:7,marginLeft:50,marginRight:50}}/>
<Icon name = "account-outline" color = "#ffffff" size = {40} style={{marginTop:7,marginLeft:50,marginRight:50}}/>
</View>

</View>
      {/* <Text >Fuel Details</Text> */}
      </ImageBackground>
  )
}



const styles = StyleSheet.create({
    body: {
        //  alignSelf:'stretch',
            flex:1,
            
            paddingTop: 50,
           
            height:null,
            width:null,
            // // backgroundColor: 'blue',
            // // fontSize: 150
            // justifyContent: 'center',
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

    wasteList: {
       
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
    bottom:{
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#111B34",
        height: 60

    }
})