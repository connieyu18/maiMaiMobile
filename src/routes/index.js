import * as React from 'react';
import HomeScreen from '../screens/home/home';
import SignInScreen from '../screens/auth/signup/SignupScreen';
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={Main}
        options={{tabBarLabel: 'Home!'}}
      />
    </HomeStack.Navigator>
  );
}

function SignInScreen() {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen
        name="B"
        component={SignInScreen}
        options={{tabBarLabel: 'Settings!'}}
      />
    </SignInStack.Navigator>
  );
}
