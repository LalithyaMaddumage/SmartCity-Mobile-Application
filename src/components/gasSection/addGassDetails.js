import { View, Text } from 'react-native'
import React from 'react'

export default function AddGassDetails() {
    const [stationName, setName] = useState("");
    const [location, setLocation] = useState("");
    const [from , setTimeFromSelected] = useState ("");
    const [to , setTimeToSelected] = useState ("");
    const [availability , setAvaialability] = useState ("");
    const [contact, setContact] = useState("");


  return (
    <View>
      <Text>addGassDetails</Text>
    </View>
  )
}