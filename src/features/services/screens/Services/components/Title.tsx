import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DetailsEnumPrimary } from './InfoPrimaryBlock';
import { moderateScale } from '../../../../../utils/styleUtils';
import { titles } from '../../../../../constants/common';
import { COLORS } from '../../../../../constants/colors';

type OwnProps = {
  isFuel: boolean;
  blockType: DetailsEnumPrimary;
  fuelType: string;
};

export const Title = ({ isFuel, blockType, fuelType }: OwnProps) => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>{titles[blockType]}</Text>
    {isFuel && (
      <Text style={styles.fuelType}>{fuelType}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: COLORS.mainGray,
  },
  fuelType: {
    fontSize: moderateScale(12),
    color: COLORS.lightGray,
  },
});
