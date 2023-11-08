import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from '../../../../../utils/styleUtils';
import { COLORS } from '../../../../../constants/colors';

type OwnProps = {
  costText: string;
  serviceDuration: string;
  Icon: JSX.Element;
};

export const CostBlock = ({ costText, serviceDuration, Icon }: OwnProps) => (
  <View style={styles.costContainer}>
    <View>
      <Text style={styles.costText}>{costText}</Text>
      <Text style={styles.serviceDurationText}>{serviceDuration}</Text>
    </View>
    <View style={styles.costIcon}>{Icon}</View>
  </View>
);

const styles = StyleSheet.create({
  costContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  costText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: COLORS.backgroundGray,
  },
  serviceDurationText: {
    fontSize: moderateScale(12),
    color: COLORS.gray,
  },
  costIcon: {
    padding: moderateScale(8),
    backgroundColor: COLORS.white,
    borderRadius: 100,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
});
