import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignUpScreen from './screens/auth/signup/SignupScreen';
import ProfileScreen from './screens/profile/profileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function TabStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SignUpScreen} />
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}
