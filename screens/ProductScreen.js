import React from 'react';
import {Text,Button,View } from 'react-native';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OnlineRetailer from './components/onlineRetailers';
import OfflineRetailer from './components/offlineRetailers';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WholesaleRetailer from './components/wholesaleRetailer';
const Tab = createBottomTabNavigator();



function DetailsScreen() {
    return (
      
        <Tab.Navigator tabBarOptions ={ {
          labelStyle: {
            fontSize: 30,
            margin: 0,
            padding: 0,
          }
        }}>
        <Tab.Screen name="Online" component={OnlineRetailer} />
        <Tab.Screen name="offline" component={OfflineRetailer} />
        <Tab.Screen name="wholesale" component={WholesaleRetailer} />
      </Tab.Navigator>
     
    );
  }
  export default DetailsScreen;