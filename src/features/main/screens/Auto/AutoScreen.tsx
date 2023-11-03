import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Car } from '../../../../types/car';
import { horizontalScale, moderateScale, verticalScale } from '../../../../utils/styleUtils';
import { COLORS } from '../../../../constants/colors';
import { mockedCars } from '../../../../constants/mockData';

const keyExtractor = (item: Car) => item.number;

const renderItem = ({ item: car }: ListRenderItemInfo<Car>) => (
  <View style={styles.carContainer}>
    <Text style={styles.model}>{car.model}</Text>
    <Text style={styles.number}>{car.number}</Text>
  </View>
);

export const AutoScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Car park</Text>
    </View>
    <FlatList
      data={mockedCars}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      style={styles.list}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(16),
  },
  titleContainer: {
    alignSelf: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(32),
    marginTop: verticalScale(12),
    backgroundColor: COLORS.backgroundGray,
    borderRadius: 100,
  },
  title: {
    fontSize: moderateScale(18),
    textTransform: 'uppercase',
    color: COLORS.white,
  },
  list: {
    marginTop: verticalScale(4),
  },
  carContainer: {
    flex: 1,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(16),
    marginTop: verticalScale(16),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(1),
    borderColor: COLORS.backgroundGray,
  },
  model: {
    alignSelf: 'center',
    fontSize: moderateScale(16),
    fontWeight: '500',
    textTransform: 'uppercase',
    color: COLORS.mainGray,
  },
  number: {
    alignSelf: 'center',
    fontSize: moderateScale(12),
    textTransform: 'uppercase',
    color: COLORS.mainGray,
    marginTop: verticalScale(8),
  },
});
