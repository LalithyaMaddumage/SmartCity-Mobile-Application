import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddFuelDetails from './src/components/fuelSection/addFuelDetails';
import ViewFuelDetails from './src/components/fuelSection/viewFuelDetails';
import AddPublicTransport from './src/components/publicTransport/addPublicTransport';
import ViewPublicTransportDetails from './src/components/publicTransport/viewPublicTransport';
import PublicTransportDetails from './src/components/publicTransport/publicTransportDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
        {/* <AddFuelDetails/>  */}
       {/* <ViewFuelDetails/> */}
       {/* <AddPublicTransport/> */}
       {/* <ViewPublicTransportDetails/> */}
       <PublicTransportDetails/>
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
