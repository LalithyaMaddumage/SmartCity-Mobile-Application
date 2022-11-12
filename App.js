import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import AddFuelDetails from './src/components/fuelSection/addFuelDetails';
import ViewFuelDetails from './src/components/fuelSection/viewFuelDetails';
import AddGassDetails from './src/components/gasSection/addGassDetails';
import ViewGasDetails from './src/components/gasSection/viewGasDetails';
import AddEventDetails from './src/components/eventSection/addEventDetails';
import ViewEventDetails from './src/components/eventSection/viewEventDetails';
import GasDetails from './src/components/gasSection/GasDetails';
import FuelDetails from './src/components/fuelSection/FuelDetails';
import EventDetails from './src/components/eventSection/EventDetails';
import AddWasteDetails from './src/components/wasteSection/addWasteDetails'
import ViewWasteDetails from './src/components/wasteSection/viewWasteDetails';
import WasteDetails from './src/components/wasteSection/wasteDetails'
import AddWasteCenter from './src/components/wasteCenterSection/addWasteCenterDetails'
import ViewWasteCenter from './src/components/wasteCenterSection/viewWasteCenterDetails'
import WasteCenterDetails from './src/components/wasteCenterSection/wasteCenterDetails'

const Drawer = createDrawerNavigator();
const GasStackScreen = createStackNavigator();
const WasteCenterStackScreen = createStackNavigator();
const WasteStackScreen = createStackNavigator();
const FuelStackScreen =createStackNavigator();

const WasteDetailsScreen = ({navigation})=>(
  <WasteStackScreen.Navigator screenOptions={{ headerShown: false }}>
  <WasteStackScreen.Screen name="Waste" component={WasteDetails} options = {{
    headerLeft: () => (
      <Icon.Button name="menu" size ={25}
         backgroundColor="#009387" onPress = {() => {
          navigation.openDrawer()}}
         >

         </Icon.Button>
    )
    }} />
    </WasteStackScreen.Navigator>

);

const FuelDetailsScreen = ({navigation})=>(
  <FuelStackScreen.Navigator screenOptions={{ headerShown: false }}>
  <FuelStackScreen.Screen name="Waste" component={FuelDetails} options = {{
    headerLeft: () => (
      <Icon.Button name="ios-menu" size ={25}
         backgroundColor="#009387" onPress = {() => {
          navigation.openDrawer()}}
         >
         </Icon.Button>
    )
    }} />
    </FuelStackScreen.Navigator>

);


const WasteCenterDetailsScreen = ({navigation})=>(
  <FuelStackScreen.Navigator screenOptions={{ headerShown: false }}>
  <FuelStackScreen.Screen name="WasteCenter" component={WasteCenterDetails} options = {{
    headerLeft: () => (
      <Icon.Button name="ios-menu" size ={25}
         backgroundColor="#009387" onPress = {() => {
          navigation.openDrawer()}}
         >
         </Icon.Button>
    )
    }} />
    </FuelStackScreen.Navigator>

);

const GasDetailsScreen = ({navigation})=>(
  <FuelStackScreen.Navigator screenOptions={{ headerShown: false }}>
  <FuelStackScreen.Screen name="Gas" component={GasDetails} options = {{
    headerLeft: () => (
      <Icon.Button name="ios-menu" size ={25}
         backgroundColor="#009387" onPress = {() => {
          navigation.openDrawer()}}
         >
         </Icon.Button>
    )
    }} />
    </FuelStackScreen.Navigator>

);

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Waste" screenOptions={{ headerShown: false }}
     >
      <Drawer.Screen name="Waste" component={WasteDetailsScreen} 
     
      />
      <Drawer.Screen name="FuelDetails" component={FuelDetailsScreen} />
      <Drawer.Screen name="WasteCenter" component={WasteCenterDetailsScreen} />
      <Drawer.Screen name="Gas" component={GasDetailsScreen} />
     </Drawer.Navigator>
    </NavigationContainer>

  //  <View style={styles.container}>
  //       {/* <AddFuelDetails/>  */}
  //      {/* <ViewFuelDetails/> */}
  //      {/* <AddGassDetails/>*/}
  //     {/* <ViewGasDetails/> */}
  //   {/* <AddEventDetails/> */}
  //   {/* <ViewEventDetails/> */}
  //   {/* <GasDetails/>*/}
  //   {/* <FuelDetails/> */}
  //   {/* <AddWasteDetails/> */}
  //   {/* <ViewWasteDetails/> */}
  //   {/* <WasteDetails/> */}
  //   {/* <AddWasteCenter/> */}
  //   {/* <ViewWasteCenter/> */}
  //   {/* <WasteCenterDetails/> */}
  //   </View>
 
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
