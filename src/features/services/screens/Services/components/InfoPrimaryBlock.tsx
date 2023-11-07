import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { type Car } from '../../../../../types/car';
import { DetailsEnum } from '../../../../../navigation/types';
import { GradientBackground } from '../../../../../components/GradientBackground';
import { Title } from './Title';
import { Warning } from './Warning';
import { ProgressBar } from './ProgressBar';
import { CostBlock } from './CostBlock';
import { addSpacesFormatter, serviceTypesFormatter } from '../../../../../utils/stringUtils';
import { horizontalScale, moderateScale, verticalScale } from '../../../../../utils/styleUtils';
import { COLORS } from '../../../../../constants/colors';
import { CURRENCY_RUB, icons } from '../../../../../constants/common';
import { fuelCost } from '../../../../../constants/mockData';

export type DetailsEnumPrimary = Exclude<
  DetailsEnum,
  DetailsEnum.FINE | DetailsEnum.PARKING | DetailsEnum.GAS_STATION
>;

type OwnProps = {
  car: Car;
  blockType: DetailsEnumPrimary;
  navigateToDetails: (key: DetailsEnum) => void;
};

export const InfoPrimaryBlock = ({ car, blockType, navigateToDetails }: OwnProps) => {
  const isFuel = blockType === DetailsEnum.FUEL;

  const isFuelLow = isFuel && car.fuelLimit / car.currentFuel > 2;
  const isServiceFar = !isFuel && car.serviceDistance > 50;

  const isShowWarning = isFuelLow || isServiceFar;
  const warningText = isFuel
    ? 'Мало топлива'
    : `Через ${car.serviceDistance} км`;

  const fuelLevelInPercent = car.currentFuel / (car.fuelLimit / 100);
  const fuelDifference = car.fuelLimit - car.currentFuel;

  const totalFuelCost = fuelDifference * fuelCost[car.fuelType] + 385;
  const costText = isFuel
    ? `${addSpacesFormatter(totalFuelCost + '')} ${CURRENCY_RUB}`
    : `${addSpacesFormatter(car.serviceCost + '')} ${CURRENCY_RUB}`;

  const serviceDuration = isFuel
    ? `~ ${car.fuelDeliveryTime} мин`
    : `~ ${car.serviceDuration} ч`;

  const serviceTypes = serviceTypesFormatter(car.serviceTypes);

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
        <Title
          isFuel={isFuel}
          blockType={blockType}
          fuelType={car.fuelType}
        />

        <View style={styles.contentContainer}>
          {isShowWarning && (
            <Warning text={warningText}/>
          )}

          {isFuel ? (
            <ProgressBar
              fuelLevelInPercent={fuelLevelInPercent}
              fuelDifference={fuelDifference}
            />
          ) : (
            <Text style={styles.services}>{serviceTypes}</Text>
          )}
        </View>

        <CostBlock
          costText={costText}
          serviceDuration={serviceDuration}
          Icon={Icon}
        />
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
  contentContainer: {
    height: verticalScale(70),
    marginTop: verticalScale(8),
  },
  services: {
    marginTop: verticalScale(4),
    fontSize: moderateScale(11),
    fontWeight: '500',
    color: COLORS.backgroundGray,
  },
});
