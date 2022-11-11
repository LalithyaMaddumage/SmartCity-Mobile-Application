import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddFuelDetails from './src/components/fuelSection/addFuelDetails';
import ViewFuelDetails from './src/components/fuelSection/viewFuelDetails';
import AddWaterCutDetails from './src/components/waterSection/addWaterDetails';
import ViewWaterCutDetails from './src/components/waterSection/viewWaterDetails';
import AddPowerCutDetails from './src/components/electricitySection/addElectricityDetails';
import ViewPowerCutDetails from './src/components/electricitySection/viewElectricityDetails';
import WaterDetails from './src/components/waterSection/waterDetails';
import PowerCutDetails from './src/components/electricitySection/electricityDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      {/* <AddFuelDetails/>  */}
      {/* <ViewFuelDetails/> */}
      {/* <AddWaterCutDetails/> */}
      {/* <ViewWaterCutDetails/> */}
      {/* <AddPowerCutDetails/> */}
      {/* <ViewPowerCutDetails/> */}
      {/* <WaterDetails/> */}
      <PowerCutDetails/>
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
