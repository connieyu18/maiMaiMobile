import * as React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import store, {persistor} from './src/store/storeConfig';
import {PersistGate} from 'redux-persist/integration/react';
import {View, Button} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabs from './src/navigation/homeTabs/homeTabs';
import {ProductDetails} from './src/screens/productDetails/productDetailsScreen';
import {OrdersScreen} from './src/screens/orders/OrdersScreen';
import {ProductsScreen} from './src/screens/products/productsScreen';

function getHeaderTitle(route) {
  // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Orders';

  switch (routeName) {
    case 'Orders':
      return 'Orders';
    case 'Products':
      return 'Products';
    case 'Profile':
      return 'Profile';
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.8)'}}>
{
  /* <StoreProvider store={store}>
        <PersistGate persistor={persistor}> */
}
{
  /* </PersistGate>
      </StoreProvider>
    </SafeAreaView> */
}
