import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../../../../utils/styleUtils';
import { COLORS } from '../../../../../../constants/colors';

const profileImage = require('../../../../../../assets/images/profile.png');

export const Profile = () => (
  <TouchableOpacity style={styles.container} activeOpacity={0.8}>
    <Image source={profileImage} style={styles.image} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: verticalScale(36),
    right: horizontalScale(12),
    padding: moderateScale(2),
    borderWidth: moderateScale(1),
    borderColor: COLORS.white,
    borderRadius: 100,
  },
  image: {
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: 100,
  },
});
