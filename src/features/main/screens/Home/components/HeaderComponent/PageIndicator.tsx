import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale, verticalScale } from '../../../../../../utils/styleUtils';
import { COLORS } from '../../../../../../constants/colors';

type OwnProps = {
  itemAmount: number;
  currentIndex: number;
};

export const PageIndicator = ({itemAmount, currentIndex}: OwnProps) => (
  <View style={styles.pageIndicatorContainer}>
    {new Array(itemAmount).fill(null).map((_, idx) => (
      <View
        key={idx}
        style={[
          styles.pageIndicatorItem,
          currentIndex === idx && styles.activeItem,
        ]}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  pageIndicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: verticalScale(24),
  },
  pageIndicatorItem: {
    height: moderateScale(6),
    width: moderateScale(6),
    backgroundColor: COLORS.backgroundLightGray,
    borderRadius: 30,
    marginLeft: moderateScale(6),
  },
  activeItem: {
    backgroundColor: COLORS.white,
  },
});
