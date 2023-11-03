import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Car } from '../../../../../types/car';
import { DetailsEnum } from '../../../../../navigation/types';
import { GradientBackground } from '../../../../../components/GradientBackground';
import { WarningIcon } from '../../../../../assets/icons/Warning';
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

export const InfoPrimaryBlock = ({ car, blockType, navigateToDetails }: OwnProps) => {
  const isFuel = blockType === DetailsEnum.FUEL;

  const isFuelLow = isFuel && car.fuelLimit / car.currentFuel > 2;
  const isServiceFar = !isFuel && car.serviceDistance > 50;

  const fuelLevelInPercent = car.currentFuel / (car.fuelLimit / 100);
  const fuelDifference = car.fuelLimit - car.currentFuel;

  const totalFuelCost = fuelDifference * fuelCost[car.fuelType] + 385;
  const costText = isFuel
    ? `${addSpacesFormatter((totalFuelCost) + '')} \u20BD`
    : `${addSpacesFormatter(car.serviceCost + '')} \u20BD`;

  const serviceDuration = isFuel
    ? `~ ${car.fuelDeliveryTime} мин`
    : `~ ${car.serviceDuration} ч`;

  const serviceTypes = car.serviceTypes
    .map((serviceType, idx) => {
      if (idx !== 0) {
        return serviceType.charAt(0).toLowerCase() + serviceType.slice(1);
      }

      return serviceType;
    })
    .join(', ');

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
      <GradientBackground
        height="100%"
        width="100%"
        borderRadius={moderateScale(16)}
        gradientBegin={COLORS.white}
        gradientEnd={isFuel ? COLORS.backgroundBlue : COLORS.backgroundGreen}
      />
      <View style={styles.blockContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{titles[blockType as DetailsEnum]}</Text>
          {isFuel && (
            <Text style={styles.fuelType}>{car.fuelType}</Text>
          )}
        </View>

        <View style={styles.contentContainer}>
          {(isFuelLow || isServiceFar) && (
            <View style={styles.warningContainer}>
              <WarningIcon fill={COLORS.lightRed} />
              <Text style={styles.warning}>{isFuel ? 'Мало топлива' :  `Через ${car.serviceDistance} км`}</Text>
            </View>
          )}

          {isFuel ? (
            <View>
              <View style={styles.progressBar}>
                <View style={[styles.progress, {width: `${fuelLevelInPercent}%`}]} />
              </View>
              <Text style={styles.fuelDifference}>
                {`+ ${fuelDifference} л`}
              </Text>
            </View>
          ) : (
            <Text style={styles.services}>{serviceTypes}</Text>
          )}
        </View>

        <View style={styles.costContainer}>
          <View>
            <Text style={styles.costText}>{costText}</Text>
            <Text style={styles.serviceDurationText}>{serviceDuration}</Text>
          </View>
          <View style={styles.costIcon}>
            {Icon}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
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
  blockContainer: {
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(12),
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
  fuelType: {
    fontSize: moderateScale(12),
    color: COLORS.lightGray,
  },
  contentContainer: {
    height: verticalScale(70),
    marginTop: verticalScale(8),
  },
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
  services: {
    marginTop: verticalScale(4),
    fontSize: moderateScale(11),
    fontWeight: '500',
    color: COLORS.backgroundGray,
  },
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
