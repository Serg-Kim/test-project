import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { type RouteProp } from '@react-navigation/native';

export enum RootNavigatorScreens {
  MAIN = 'Main',
  AUTO = 'Auto',
  SERVICES = 'Services',
  TRAVELS = 'Travels',
  MARKET = 'Market',
}

export enum MainNavigatorScreens {
  HOME = 'Home',
  DETAILS = 'Details',
}

export enum ServicesNavigatorScreens {
  SERVICES = 'TabServices',
  SUBSCRIPTION = 'TabSubscription',
  MARKET = 'TabMarket',
}

export enum DetailsEnum {
  FUEL = 'Fuel',
  SERVICE = 'Service',
  FINE = 'Fine',
  PARKING = 'Parking',
  GAS_STATION = 'Gas station',
}

export type MainStackParamList = {
  [MainNavigatorScreens.HOME]: undefined;
  [MainNavigatorScreens.DETAILS]: { key: DetailsEnum };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  MainNavigatorScreens.HOME
>;

export type DetailsScreenRouteProp = RouteProp<
  MainStackParamList,
  MainNavigatorScreens.DETAILS
>;
