import * as React from 'react';
import {View, Button} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {ProfileScreen} from '../../screens/profile/profileScreen';
import {ProductsScreen} from '../../screens/products/productsScreen';
import {OrdersScreen} from '../../screens/orders/OrdersScreen';

export default HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
