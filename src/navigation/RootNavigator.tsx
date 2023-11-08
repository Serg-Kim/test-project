import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootNavigatorScreens } from './types';
import { BottomTabBar } from './components/BottomTabBar';
import { MainNavigator } from './MainNavigator';
import { AutoScreen } from '../features/main/screens/Auto/AutoScreen';

const Tab = createBottomTabNavigator();

const MockScreen = () => <></>;

export const screenOptions = {
  headerShown: false,
};

export const RootNavigator = () => (
  <Tab.Navigator
    initialRouteName={RootNavigatorScreens.MAIN}
    screenOptions={screenOptions}
    tabBar={(tabBarProps) => <BottomTabBar tabBarProps={tabBarProps} />}
  >
    <Tab.Screen name={RootNavigatorScreens.MAIN} component={MainNavigator} />
    <Tab.Screen name={RootNavigatorScreens.AUTO} component={AutoScreen} />
    <Tab.Screen name={RootNavigatorScreens.SERVICES} component={MockScreen} />
    <Tab.Screen name={RootNavigatorScreens.TRAVELS} component={MockScreen} />
    <Tab.Screen name={RootNavigatorScreens.MARKET} component={MockScreen} />
  </Tab.Navigator>
);
