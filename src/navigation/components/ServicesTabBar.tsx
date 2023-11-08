import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialTopTabBarProps, MaterialTopTabNavigationEventMap } from '@react-navigation/material-top-tabs';
import { NavigationHelpers, useNavigation } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/routers';
import { ServicesNavigatorScreens } from '../types';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/styleUtils';
import { COLORS } from '../../constants/colors';

type TabBarPropsType = {
  tabBarProps: MaterialTopTabBarProps;
};

const tabBarLabels = {
  [ServicesNavigatorScreens.SERVICES]: 'Услуги',
  [ServicesNavigatorScreens.SUBSCRIPTION]: 'Подписка',
  [ServicesNavigatorScreens.MARKET]: 'Маркетплейс',
};

export const ServicesTabBar = ({ tabBarProps }:  TabBarPropsType) => {
  const navigation =
    useNavigation<
      NavigationHelpers<ParamListBase, MaterialTopTabNavigationEventMap>
    >();

  const state = tabBarProps.state;

  const renderTab = useCallback((routeName: string, index: number) => {
      const isFocused = state.index === index;

      const label = tabBarLabels[routeName as ServicesNavigatorScreens];

      const onPress = () => {
        navigation.navigate(routeName);
      };

      return (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.tab, isFocused && styles.activeTab]}
          key={routeName}
          activeOpacity={0.6}
          hitSlop={8}
          disabled={isFocused}
        >
          <Text style={[styles.tabText, isFocused && styles.activeTabText]}>
            {label}
          </Text>
        </TouchableOpacity>
      );
  }, [state.index]);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => renderTab(route.name, index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(16),
  },
  tab: {
    paddingBottom: verticalScale(6),
    paddingHorizontal: horizontalScale(2),
  },
  tabText: {
    fontSize: moderateScale(16),
    fontWeight: '300',
    color: COLORS.lightGray,
  },
  activeTab: {
    borderBottomWidth: moderateScale(2),
    borderColor: COLORS.mainGray,
  },
  activeTabText: {
    fontWeight: '500',
    color: COLORS.mainGray,
  },
});
