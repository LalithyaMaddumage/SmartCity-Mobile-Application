import { View, Text } from 'react-native'
import React from 'react'

export default function AddGassDetails() {
    const [stationName, setName] = useState("");
    const [location, setLocation] = useState("");
    const [from , setTimeFromSelected] = useState ("");
    const [to , setTimeToSelected] = useState ("");
    const [availability , setAvaialability] = useState ("");
    const [contact, setContact] = useState("");

    
    const sendData = async() =>{
        const newFuel={
            stationName,
            location,
            from,
            to,
            petrol,
            diesel,
            contact
        }

        let response=await FuelAdd (newFuel);

        console.log("data add",response);


        if(response.ok){
            ToastAndroid.show(

                'Fuel Station Successfully Added..', ToastAndroid.SHORT
              );

            
        }


    }


  return (
    <View>
      <Text>addGassDetails



      </Text>
    </View>
  )
}