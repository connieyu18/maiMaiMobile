// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import SignUpScreen from '../screens/auth/signup/SignupScreen';
// import ProfileScreen from '../screens/profile/profileScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export function MainScreenStack() {
//   return (
//     <Stack.Navigator initialRouteName="SignUpScreen">
//       <Stack.Screen
//         name="SignUpScreen"
//         component={SignUpScreen}
//         options={{
//           headerTintColor: 'white',
//           headerStyle: {backgroundColor: 'tomato'},
//         }}
//       />
//       {/* <Stack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{headerStyleInterpolator: forFade}}
//       /> */}
//     </Stack.Navigator>
//   );
// }

// const forFade = ({current, next}) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0,
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     leftButtonStyle: {opacity},
//     rightButtonStyle: {opacity},
//     titleStyle: {opacity},
//     backgroundStyle: {opacity},
//   };
// };

// // export default Switcher;
