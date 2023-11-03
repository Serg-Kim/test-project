import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

type OwnProps = {
  isDarkMode: boolean;
};

export const FocusAwareStatusBar = ({ isDarkMode }: OwnProps) => {
  const isFocused = useIsFocused();
  const statusBarStyle = isDarkMode ? 'dark-content' : 'light-content';

  if (!isFocused) {
    return null;
  }

  return <StatusBar barStyle={statusBarStyle} />;
};
