import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ServicesNavigatorScreens } from './types';
import { type Car } from '../types/car';
import { ServicesTabBar } from './components/ServicesTabBar';
import { ServicesScreen } from '../features/services/screens/Services/ServicesScreen';
import { verticalScale } from '../utils/styleUtils';
import { deviceWidth } from '../utils/deviceUtils';

type OwnProps = {
  cars: Car[];
  currentIndex: number;
};

const Tab = createMaterialTopTabNavigator();

export const ServicesNavigator = ({cars, currentIndex}: OwnProps) => {
  const car = cars[currentIndex];

  const renderServicesScreen = () => (
    <ServicesScreen car={car} />
  );

  const renderSubscriptionScreen = () => (
    <View style={styles.subscriptionScreen}>
      <Text>{`Подписка до ${car.subscriptionBefore}`}</Text>
    </View>
  );

  const renderMarketScreen = () => (
    <View style={styles.marketScreen}>
      <Text>Market Screen</Text>
    </View>
  );

  return (
    <Tab.Navigator
      style={styles.container}
      initialRouteName={ServicesNavigatorScreens.SERVICES}
      initialLayout={{width: deviceWidth}}
      tabBar={(tabBarProps) => <ServicesTabBar tabBarProps={tabBarProps} />}
    >
      <Tab.Screen name={ServicesNavigatorScreens.SERVICES} children={renderServicesScreen} />
      <Tab.Screen name={ServicesNavigatorScreens.SUBSCRIPTION} children={renderSubscriptionScreen} />
      <Tab.Screen name={ServicesNavigatorScreens.MARKET} children={renderMarketScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(12),
  },
  subscriptionScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marketScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
