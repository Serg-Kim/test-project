import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { horizontalScale, moderateScale } from '../../../../../../utils/styleUtils';
import { COLORS } from '../../../../../../constants/colors';

export const Logo = () => (
  <View style={styles.logo}>
    <Text style={styles.logoText}>T</Text>
    <View style={styles.logoChar}>
      <View style={styles.logoCharLine} />
      <View style={styles.logoCharLineMiddle} />
      <View style={styles.logoCharLine} />
    </View>
    <Text style={styles.logoText}>S</Text>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    height: moderateScale(34),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoText: {
    fontSize: moderateScale(28),
    lineHeight: moderateScale(34),
    fontWeight: '200',
    color: COLORS.gray,
  },
  logoChar: {
    height: moderateScale(18.5),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: horizontalScale(12),
  },
  logoCharLine: {
    height: moderateScale(1),
    width: horizontalScale(16),
    backgroundColor: COLORS.gray,
  },
  logoCharLineMiddle: {
    height: moderateScale(1),
    width: horizontalScale(4),
    backgroundColor: COLORS.gray,
  },
});
