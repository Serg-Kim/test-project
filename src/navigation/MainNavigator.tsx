import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigatorScreens, RootNavigatorScreens } from './types';
import { HomeScreen } from '../features/main/screens/Home/HomeScreen';
import { DetailsScreen } from '../features/main/screens/Details/DetailsScreen';

const Tab = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export const MainNavigator = () => (
  <Tab.Navigator
    initialRouteName={RootNavigatorScreens.MAIN}
    screenOptions={screenOptions}
  >
    <Tab.Screen name={MainNavigatorScreens.HOME} component={HomeScreen} />
    <Tab.Screen name={MainNavigatorScreens.DETAILS} component={DetailsScreen} />
  </Tab.Navigator>
);
