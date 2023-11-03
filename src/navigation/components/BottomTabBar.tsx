import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ParamListBase } from '@react-navigation/routers';
import { NavigationHelpers, useNavigation } from '@react-navigation/core';
import {
  BottomTabBarProps,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {RootNavigatorScreens} from '../types';
import { HomeIcon } from '../../assets/icons/Home';
import { AutoIcon } from '../../assets/icons/Auto';
import { ServicesIcon } from '../../assets/icons/Services';
import { TravelsIcon } from '../../assets/icons/Travels';
import { MarketIcon } from '../../assets/icons/Market';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/styleUtils';
import { COLORS } from '../../constants/colors';
import { deviceWidth } from '../../utils/deviceUtils';

type TabBarPropsType = {
  tabBarProps: BottomTabBarProps;
};

const tabBarLabels = {
  [RootNavigatorScreens.MAIN]: 'Главная',
  [RootNavigatorScreens.AUTO]: 'Авто',
  [RootNavigatorScreens.SERVICES]: 'Сервисы',
  [RootNavigatorScreens.TRAVELS]: 'Поездки',
  [RootNavigatorScreens.MARKET]: 'Маркет',
};

const tabBarIcons = {
  [RootNavigatorScreens.MAIN]: HomeIcon,
  [RootNavigatorScreens.AUTO]: AutoIcon,
  [RootNavigatorScreens.SERVICES]: ServicesIcon,
  [RootNavigatorScreens.TRAVELS]: TravelsIcon,
  [RootNavigatorScreens.MARKET]: MarketIcon,
};

export const BottomTabBar = ({ tabBarProps }: TabBarPropsType) => {
  const {bottom} = useSafeAreaInsets();

  const navigation =
    useNavigation<
      NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
    >();

  const state = tabBarProps.state;
  const containerStyle = {
    paddingBottom: bottom,
    height: verticalScale(80) + bottom,
  };

  const renderTab = useCallback((routeName: string, index: number) => {
      const isFocused = state.index === index;

      const label = tabBarLabels[routeName as RootNavigatorScreens];
      const Icon = tabBarIcons[routeName as RootNavigatorScreens];

      const onPress = () => {
        navigation.navigate(routeName);
      };

      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.tab}
          key={routeName}
          hitSlop={8}
          disabled={isFocused}
        >
          <Icon stroke={isFocused ? COLORS.white : COLORS.lightGray} />
          <Text style={[styles.text, isFocused && styles.activeText]}>
            {label}
          </Text>
        </TouchableOpacity>
      );
  }, [state.index]);

  return (
    <View style={[styles.container, containerStyle]}>
      {state.routes.map((route, index) => renderTab(route.name, index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -1,
    width: deviceWidth + 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    backgroundColor: COLORS.mainGray,
    opacity: 0.9,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: verticalScale(4),
    fontSize: moderateScale(12),
    lineHeight: moderateScale(14),
    color: COLORS.lightGray,
  },
  activeText: {
    color: COLORS.white,
  },
});
