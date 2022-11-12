import React, { useState }  from "react";
import Text from "@kaloraat/react-native-text";
import { 
     ScrollView,
     ImageBackground, 
     Dimensions, 
     Image, 
     View, 
     StyleSheet,
     TouchableOpacity,
     TextInput,
    } from "react-native";
import SelectList from 'react-native-dropdown-select-list';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

    const [selected, setSelected] = React.useState("");
   
    const [Password, setPassword] = useState("");
    const [UserName, setUserName] = useState("");

    const handleSubmit = async () => {

   
        if(!UserName || !Password ) {
          alert("all Field are required");
          setLoading(false);
          return;
        }
       
            axios.get(`http://10.0.2.2:4000/Login/getUser/${UserName}/${Password}`).then((response)=>{
                console.log("data",response.data);
 
                if(response.data.login === null){
                    alert("User not available")
                }else{
                    alert("Success!");
                    AsyncStorage.setItem('Email',Email);
                    AsyncStorage.setItem('Password',Password);               
                  
                    navigation.navigate("Profile")
                }
    
            }).catch((err)=>{
                alert(err.response.data.error)
            });
      

    }

    return(

    <ScrollView style={{flex:1,backgroundColor:"#FFFFFF"}} showsVerticalScrollIndicator ={false}>
    <ImageBackground source = { require('../../../assets/logins.png')}
    style = {{
        height: Dimensions.get('window').height/2.5,

    }}> 
    <View style= {{flex:1,justifyContent:'center',alignItems:'center'}}>
      {/* <Image source= {require('../../../assets/loginman.png')} style= {{flex:2,justifyContent:'center',alignItems:'center'}}/> */}
        <Text style = {styles.brandViewText}>Smart City </Text>
    </View>
        
    </ImageBackground>
    <View style = {styles.bottomView}>
        <View style = {{ padding:25}}>
            <Text style = {{color:'#0047AB',fontSize:30,fontWeight:"bold"}}>Welcome</Text>
                <Text style = {{fontSize:20}}>Don't have an account ?
                    <Text style = {{fontSize:20,color:'red',marginLeft:10}} >
                    { '  '}
                        Register 
                    </Text>
            </Text>
           <View style= {{marginTop:30}}>
                
                  <Text style={styles.selectText}>User Name </Text>
                  <View  style= {{justifyContent:'center',alignItems:'center'}}>
                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setUserName(e)}} 
                    // placeholder ="Contact Number"
                    value={UserName}
                    required>

                    </TextInput>
                   </View>
                    <Text style={styles.selectText}>Password </Text>
                    <View style= {{justifyContent:'center',alignItems:'center'}}>
                    <TextInput style={styles.name} 
                    onChangeText={(e) => {setPassword(e)}} 
                    // placeholder ="Contact Number"
                    value={Password}
                    required>

                    </TextInput>
                    </View>
                   <View style= {{marginHorizontal:30,marginTop:15}}>
                   {/* <SelectList setSelected={setSelected} data={data} onSelect={() => storetype()}/> */}
                   </View>
           </View>
           
           <View style= {{marginTop:30}}>
           <TouchableOpacity
            style = {{
                backgroundColor: "#260B8C",
                height: 50,
                marginBottom:20,
                justifyContent: "center",
                alignItems:"center",
                marginHorizontal: 100,
                borderRadius: 24,

            }}  onPress={handleSubmit} >
                <Text bold medium center style = {{ color: 'white',fontSize:20,}}>
                login
                </Text>
            </TouchableOpacity>
            <View style = {{ 
            flex:1,
            marginHorizontal:30,
            marginTop:10,
           }}>

                <Text style = {{ fontSize:20, }}>
                    Forget Password ?
                    <Text style = {{ fontSize:20,fontWeight:'regular',color:'red'}}>
                    {'   '}
                        Reset
                    </Text>
                </Text>

           </View>
            </View>
                <View style={{flexDirection: 'row', alignItems: 'center',marginTop:20}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        <View>
                            <Text style={{width: 50, textAlign: 'center'}}>or</Text>
                        </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>
                  
           
        </View>

    </View>

    </ScrollView>

    );

};

const styles = StyleSheet.create({
    brandViewText:{
        color:'#FFFFFF',
        fontSize:40,
        fontWeight: 'bold',
    },
    bottomView:{

        flex:1.5,
        bottom:40,
        backgroundColor: '#FFFFFF',
        borderTopStartRadius: 30,
        borderTopEndRadius:30,

    },
    selectText: {
        marginLeft: 20,
        marginTop:12,
        // marginBottom:8,
        fontWeight:'bold',
    
        fontSize: 18,
    
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
});

export default Login;