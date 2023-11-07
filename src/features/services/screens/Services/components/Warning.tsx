import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WarningIcon } from '../../../../../assets/icons/Warning';
import { horizontalScale, moderateScale } from '../../../../../utils/styleUtils';
import { COLORS } from '../../../../../constants/colors';

type OwnProps = {
  text: string;
};

export const Warning = ({ text }: OwnProps) => (
  <View style={styles.warningContainer}>
    <WarningIcon fill={COLORS.lightRed} />
    <Text style={styles.warning}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  warning: {
    marginLeft: horizontalScale(8),
    fontSize: moderateScale(10),
    fontWeight: '500',
    color: COLORS.backgroundGray,
  },
});
