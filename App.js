/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductWrapper from './src/Screens/ProductWrapper';
import UserList from './src/Screens/UserList';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper} />
        <Stack.Screen name="User" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
