import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Car } from '../../../../../../types/car';
import { horizontalScale, moderateScale, verticalScale } from '../../../../../../utils/styleUtils';
import { COLORS } from '../../../../../../constants/colors';

type OwnProps = {
  car: Car;
};

export const CarItem = ({ car }: OwnProps) => (
  <View style={styles.container}>
    <View style={styles.subscriptionContainer}>
      <Text style={styles.subscription}>
        {`Подписка до ${car.subscriptionBefore}`}
      </Text>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.model}>{car.model}</Text>
      <Text style={styles.number}>{car.number}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(300),
    alignItems: 'center',
  },
  subscriptionContainer: {
    position: 'absolute',
    alignItems: 'center',
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(4),
    borderRadius: moderateScale(100),
    backgroundColor: COLORS.backgroundLightGray,
    zIndex: 1,
  },
  subscription: {
    fontSize: moderateScale(12),
    fontWeight: '300',
    color: COLORS.white,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: verticalScale(4) + moderateScale(6),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(8),
    paddingHorizontal: horizontalScale(24),
    borderRadius: moderateScale(100),
    backgroundColor: COLORS.backgroundGray,
  },
  model: {
    fontSize: moderateScale(28),
    fontWeight: '300',
    letterSpacing: 1,
    color: COLORS.white,
  },
  number: {
    fontSize: moderateScale(12),
    color: COLORS.gray,
  },
});
