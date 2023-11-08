import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DetailsEnum } from '../../../../../navigation/types';
import { type Car } from '../../../../../types/car';
import { addSpacesFormatter } from '../../../../../utils/stringUtils';
import { horizontalScale, moderateScale, verticalScale } from '../../../../../utils/styleUtils';
import { COLORS } from '../../../../../constants/colors';
import { CURRENCY_RUB, icons, titles } from '../../../../../constants/common';
import { fuelCost } from '../../../../../constants/mockData';

type DetailsEnumSecondary = Exclude<
  DetailsEnum,
  DetailsEnum.FUEL | DetailsEnum.SERVICE
>;

type OwnProps = {
  car: Car;
  blockType: DetailsEnumSecondary;
  navigateToDetails: (key: DetailsEnum) => void;
};

export const InfoSecondaryBlock = ({ car, blockType, navigateToDetails }: OwnProps) => {
  const subtitles = {
    [DetailsEnum.FINE]: `${car.fineAmount} новых`,
    [DetailsEnum.PARKING]: `№ ${car.parkingNumber}`,
    [DetailsEnum.GAS_STATION]: `${car.gasStationDistance / 1000} км`,
  };

  const costs = {
    [DetailsEnum.FINE]: `${addSpacesFormatter(
      car.fineAmount * car.fineCost + '',
    )} ${CURRENCY_RUB}`,
    [DetailsEnum.PARKING]: `${addSpacesFormatter(
      car.parkingHours * car.parkingCostInHour + '',
    )} ${CURRENCY_RUB}`,
    [DetailsEnum.GAS_STATION]: `${addSpacesFormatter(
      fuelCost[car.fuelType] + '',
    )} ${CURRENCY_RUB}`,
  };

  const costDescriptions = {
    [DetailsEnum.FINE]: 'Всего',
    [DetailsEnum.PARKING]: `${car.parkingHours} ч прошло`,
    [DetailsEnum.GAS_STATION]: `1 л ${car.fuelType}`,
  };

  const Icon = icons[blockType as DetailsEnum];

  const onPressDetails = () => {
    navigateToDetails(blockType as DetailsEnum);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPressDetails}
    >
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>{titles[blockType]}</Text>
          <Text style={styles.secondaryText}>{subtitles[blockType]}</Text>
        </View>
        {Icon}
      </View>
      <Text style={styles.cost}>{costs[blockType]}</Text>
      <Text style={styles.secondaryText}>{costDescriptions[blockType]}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '31%',
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(12),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(16),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 18,
  },
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
  cost: {
    marginTop: verticalScale(12),
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: COLORS.backgroundGray,
  },
  secondaryText: {
    marginTop: verticalScale(4),
    fontSize: moderateScale(12),
    color: COLORS.gray,
  },
});
