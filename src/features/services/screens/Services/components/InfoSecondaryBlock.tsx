import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DetailsEnum } from '../../../../../navigation/types';
import { Car } from '../../../../../types/car';
import { addSpacesFormatter } from '../../../../../utils/stringUtils';
import { horizontalScale, moderateScale, verticalScale } from '../../../../../utils/styleUtils';
import { icons, titles } from '../ServicesScreen';
import { COLORS } from '../../../../../constants/colors';
import { fuelCost } from '../../../../../constants/mockData';

type OwnProps = {
  car: Car;
  blockType: string;
  navigateToDetails: (key: DetailsEnum) => void;
};

export const InfoSecondaryBlock = ({ car, blockType, navigateToDetails }: OwnProps) => {
  const isFine = blockType === DetailsEnum.FINE;
  const isParking = blockType === DetailsEnum.PARKING;

  const getSubtitle = () => {
    if (isFine) {
      return `${car.fineAmount} новых`;
    }

    if (isParking) {
      return `№ ${car.parkingNumber}`;
    }

    return `${car.gasStationDistance / 1000} км`;
  };

  const getCostDescription = () => {
    if (isFine) {
      return 'Всего';
    }

    if (isParking) {
      return `${car.parkingHours} ч прошло`;
    }

    return `1 л ${car.fuelType}`;
  };

  const getCost = () => {
    if (isFine) {
      return `${addSpacesFormatter(car.fineAmount * car.fineCost + '')} \u20BD`;
    }

    if (isParking) {
      return `${addSpacesFormatter(
        car.parkingHours * car.parkingCostInHour + '',
      )} \u20BD`;
    }

    return `${addSpacesFormatter(fuelCost[car.fuelType] + '')} \u20BD`;
  };

  const subtitle = getSubtitle();
  const cost = getCost();
  const costDescription = getCostDescription();

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
          <Text style={styles.title}>{titles[blockType as DetailsEnum]}</Text>
          <Text style={styles.secondaryText}>{subtitle}</Text>
        </View>
        {Icon}
      </View>
      <Text style={styles.cost}>{cost}</Text>
      <Text style={styles.secondaryText}>{costDescription}</Text>
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
