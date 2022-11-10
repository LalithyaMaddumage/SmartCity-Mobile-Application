import { View, Text, StyleSheet,RefreshControl,ScrollView,TouchableOpacity ,Modal,ToastAndroid } from 'react-native'
import Swipeable from 'react-native-gesture-handler';
import React , {useState, useEffect} from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getEventDetails } from '../../../services/eventService';
import { addToFavourite } from '../../../services/eventService';

export default function ViewEventDetails() {

        const [eventList, setEventList] =useState([]);
        const [refreshing, setRefreshing] = React.useState(false);

        const [favourite ,setFavourite] =useState()
    
        const [modalData, setModalData] = useState([]);
        const [modalVisible, setModalVisible] = useState(false);
    
        const onRefresh = React.useCallback(() => {

            setRefreshing(true);
    
            wait(500).then(() => setRefreshing(false));
    
            getEventDetails().then((res) => {
    
    
    
                if (res.ok) {
    
                    setEventList(res.data);
    
                }
    
            }).catch((err) => {
    
                alert("error", err);
    
            })
    
        }, []);


        const addToFavouriteFunc = async(id,favourite)=>{
          
            
       

         try {  const newfavourite={
               Favourite:favourite
            }
    
            let response=await addToFavourite (id,newfavourite );
         
    
           
            if(response.ok){

                console.log("addFave" ,response.ok)
                ToastAndroid.show(
    
                    'Event Added To Favourite..', ToastAndroid.SHORT
                  );
    
               
            }}catch(e){
                console.log("erro",e.message)
            }
    

        }

        const enableDisableAttribute = (index ,id) => {



            let filteredArray = [...eventList];
    
            for (let i = 0; i < filteredArray.length; i++) {
    
    
    
                //condition to check for loop i value and index
    
                if (i == index) {
    
                    // let rowCount = selectedRowCount + 1;
    
                    // setSelectedRowCount(rowCount);
    
                    filteredArray[i].Favourite = !filteredArray[i].Favourite;
                    // setFavourite(filteredArray[i].Favourite)
                    addToFavouriteFunc(id,filteredArray[i].Favourite)

                }
    
            }
    
            setEventList(filteredArray);
    
        };



        useEffect(() => {
            getEventDetails().then((res) => {
                if (res.ok) {
                    setEventList(res.data);
                }
            }).catch((err) => {
    
                alert("error", err);
    
            })
        }, [])
    
    

        const List = () => {

            return eventList.map((element , index) => {
            return (
            <View key={element._id}>
                
          
           
            <TouchableOpacity 
                        // onPress={() => { setId(element._id), setModalData(element) ,setModalVisible(true) }}
                        //
                         >
        
            <View style={[styles.itemList, styles.elevation]}>

            <View style={styles.favIcon}>
                <Icon name = "star" color = {element.Favourite? "#F2CD41":"white"} size = {30} 
                onPress ={()=> enableDisableAttribute(index,element._id)}
                />
                </View>
        
                <View style={styles.favStar}>
                <Text style={styles.titleID}>{element.eventType}</Text>


               

                </View>

                {/* <View style={styles.fuellist}> */}
                <View style={styles.location}>
                <Text style={styles.titleData}>{element.location}</Text>
                {/* </View> */}
                </View>
        
                <View style={styles.list3}>
                {/* <Text style={styles.list}>Opening Hours    </Text> */}
              

                
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
        <View style={{ flex: 1, paddingTop: 5 }}>
        <Text style={styles.header}>
                        Event Details
                    </Text>
             <View>{List()}</View>
    
        </View>
    </ScrollView>
    
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

    favStar:{
        flexDirection:'row'
    },

    favIcon:{
      marginStart:250,
     
    }

})