import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useHome } from './useHome';
import { ServicesNavigator } from '../../../../navigation/ServicesNavigator';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { FocusAwareStatusBar } from '../../../../components/FocusAwareStatusBar';

export const HomeScreen = () => {
  const {
    cars,
    currentIndex,
    refreshing,
    setCurrentIndexHandler,
    onRefresh,
  } = useHome();

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar isDarkMode={false} />
      <HeaderComponent
        cars={cars}
        currentIndex={currentIndex}
        refreshing={refreshing}
        setCurrentIndexHandler={setCurrentIndexHandler}
        onRefresh={onRefresh}
      />
      <ServicesNavigator cars={cars} currentIndex={currentIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
