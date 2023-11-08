import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, verticalScale } from '../../../../../utils/styleUtils';
import { COLORS } from '../../../../../constants/colors';

type OwnProps = {
  fuelLevelInPercent: number;
  fuelDifference: number;
};

export const ProgressBar = ({ fuelLevelInPercent, fuelDifference }: OwnProps) => (
  <View>
    <View style={styles.progressBar}>
      <View style={[styles.progress, {width: `${fuelLevelInPercent}%`}]} />
    </View>
    <Text style={styles.fuelDifference}>
      {`+ ${fuelDifference} л`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  progressBar: {
    width: '100%',
    height: verticalScale(4),
    marginTop: verticalScale(8),
    backgroundColor: COLORS.lighterGray,
    borderRadius: 100,
  },
  progress: {
    height: verticalScale(4),
    backgroundColor: COLORS.backgroundGray,
    borderRadius: 100,
  },
  fuelDifference: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(4),
    fontSize: moderateScale(12),
    color: COLORS.backgroundLightGray,
    opacity: 0.5,
  },
});
