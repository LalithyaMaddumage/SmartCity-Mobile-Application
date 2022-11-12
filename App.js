import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddFuelDetails from './src/components/fuelSection/addFuelDetails';
import ViewFuelDetails from './src/components/fuelSection/viewFuelDetails';
import AddPublicTransport from './src/components/publicTransport/addPublicTransport';
import ViewPublicTransportDetails from './src/components/publicTransport/viewPublicTransport';
import PublicTransportDetails from './src/components/publicTransport/publicTransportDetails';
import AddPrivateTransport from './src/components/privateTransport/addPrivateTransport';
import ViewPrivateTransportDetails from './src/components/privateTransport/viewPrivateTransport';
import PrivateTransportDetails from './src/components/privateTransport/privateTransportDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
        {/* <AddFuelDetails/>  */}
       {/* <ViewFuelDetails/> */}
       {/* <AddPublicTransport/> */}
       {/* <ViewPublicTransportDetails/> */}
       {/* <PublicTransportDetails/> */}
       {/* <AddPrivateTransport/> */}
       {/* <ViewPrivateTransportDetails/> */}
       <PrivateTransportDetails/>
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
