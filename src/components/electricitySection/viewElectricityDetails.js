import { View, Text, StyleSheet,RefreshControl,ScrollView,TouchableOpacity ,Modal } from 'react-native'
import React , {useState, useEffect} from 'react'
import {getShedule} from '../../../services/electricityService';
import UpdatePowerCutDetails from '../electricitySection/updateElectricityDetails';

const wait = (timeout)=>{
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function ViewPowerCutDetails(){
    const [PowerList, setPowerList] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const [modalData, setModalData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [id, setId] = useState("");

    const onRefresh = React.useCallback(() => {

        setRefreshing(true);

        wait(500).then(() => setRefreshing(false));

        getShedule().then((res) => {
            if (res.ok) {
                setPowerList(res.data);
            }

        }).catch((err) => {
            alert("error", err);
        })

    }, []);

    useEffect(() => {
        getShedule().then((res) => {
            if (res.ok) {
                setPowerList(res.data);
            }
        }).catch((err) => {
            alert("error", err);
        })
    }, [])

    const List = ()=>{
        return PowerList.map((element)=>{
            return(
                <View key={element._id}>
                    <TouchableOpacity 
                    onPress={() => { setId(element._id), setModalData(element) ,setModalVisible(true) }}>
                        <View style={[styles.itemList, styles.elevation]}>
                            <Text style={styles.titleID}>{element.Location}</Text>
                            <View style={styles.location}>
                                <Text style={styles.titleData}>{element.Date}</Text>
                            </View>
                            <View style={styles.list3}>
                                <Text style={styles.list}>Power Cut    </Text>

                                <View style={styles.fuellist}>
                                    <Text style={styles.time}>From :  </Text>
                                    <Text style={styles.list1} > {element.From} </Text>
                                    <Text style={styles.time}>To :  </Text>
                                    <Text  style={styles.list1}>{element.To} </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        })
    }

    return(
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
                        Power Cut Details
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
                <UpdatePowerCutDetails
                    data={modalData}
                    onHide={() => setModalVisible(false)}
                    refresh ={onRefresh}
                />
                </Modal>
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
})