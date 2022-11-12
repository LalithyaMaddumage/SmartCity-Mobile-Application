import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WasteCenterDetails from './wasteCenterSection/wasteCenterDetails'
import WasteDetails from './wasteSection/wasteDetails'
import GasDetails from './gasSection/GasDetails';
import FuelDetails from './fuelSection/FuelDetails';

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

);

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


const WasteCenterDetailsSreen = ({navigation})=>(
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

const LoginDetailsScreen = ({navigation})=>(
  <LoginStackScreen.Navigator screenOptions={{ headerShown: false }}>
  <LoginStackScreen.Screen name="Login" component={FuelDetails} options = {{
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