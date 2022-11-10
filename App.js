import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddFuelDetails from './src/components/fuelSection/addFuelDetails';
import ViewFuelDetails from './src/components/fuelSection/viewFuelDetails';
import AddGassDetails from './src/components/gasSection/addGassDetails';
import ViewGasDetails from './src/components/gasSection/viewGasDetails';
import AddEventDetails from './src/components/eventSection/addEventDetails';
import ViewEventDetails from './src/components/eventSection/viewEventDetails';
import GasDetails from './src/components/gasSection/GasDetails';
import FuelDetails from './src/components/fuelSection/FuelDetails';
import EventDetails from './src/components/eventSection/EventDetails';
export default function App() {
  return (
    <View style={styles.container}>
        {/* <AddFuelDetails/>  */}
       {/* <ViewFuelDetails/> */}
       {/* <AddGassDetails/>*/}
      {/* <ViewGasDetails/> */}
    {/* <AddEventDetails/> */}
    {/* <ViewEventDetails/> */}
    {/* <GasDetails/>*/}
    {/* <FuelDetails/> */}
    <EventDetails/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingLeft: 60,
    // paddingRight: 60,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
