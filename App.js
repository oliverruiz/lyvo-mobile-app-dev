import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login.js'
import Register from './src/components/Register.js'
import Main from './src/components/Main.js'

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};
register = () => {

};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'teal' },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'teal' }, headerStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
