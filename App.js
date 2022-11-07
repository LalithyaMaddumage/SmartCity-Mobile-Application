import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddFuelDetails from './src/components/fuelSection/addFuelDetails';
import ViewFuelDetails from './src/components/fuelSection/viewFuelDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
        {/* <AddFuelDetails/>  */}
       <ViewFuelDetails/>
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
