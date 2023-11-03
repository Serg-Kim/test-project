import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { DetailsEnum, HomeScreenNavigationProp, MainNavigatorScreens } from '../../../../navigation/types';
import { Car } from '../../../../types/car';
import { InfoPrimaryBlock } from './components/InfoPrimaryBlock';
import { InfoSecondaryBlock } from './components/InfoSecondaryBlock';
import { MapComponent } from './components/MapComponent';
import { CCTVIcon } from '../../../../assets/icons/CCTV';
import { ParkingIcon } from '../../../../assets/icons/Parking';
import { GasStationFillIcon } from '../../../../assets/icons/GasStationFill';
import { GasStationIcon } from '../../../../assets/icons/GasStation';
import { MaintenanceIcon } from '../../../../assets/icons/Maintenance';
import { horizontalScale, verticalScale } from '../../../../utils/styleUtils';
import { COLORS } from '../../../../constants/colors';

type OwnProps = {
  car: Car;
};

export const titles = {
  [DetailsEnum.FUEL]: 'Заправить',
  [DetailsEnum.SERVICE]: 'Техобслуживание',
  [DetailsEnum.FINE]: 'Штрафы',
  [DetailsEnum.PARKING]: 'Паркинг',
  [DetailsEnum.GAS_STATION]: 'АЗС',
};

export const icons = {
  [DetailsEnum.FUEL]: <GasStationIcon stroke={COLORS.backgroundLightGray} />,
  [DetailsEnum.SERVICE]: <MaintenanceIcon stroke={COLORS.backgroundLightGray} />,
  [DetailsEnum.FINE]: <CCTVIcon fill={COLORS.backgroundBlue} />,
  [DetailsEnum.PARKING]: <ParkingIcon fill={COLORS.backgroundGreen} />,
  [DetailsEnum.GAS_STATION]: <GasStationFillIcon fill={COLORS.corall} />,
};

export const ServicesScreen = ({ car }: OwnProps) => {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const spacerStyle = {
    height: bottom + verticalScale(100),
  };

  const navigateToDetails = (key: DetailsEnum) => {
    navigation.navigate(MainNavigatorScreens.DETAILS, { key });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabsRow}>
        <InfoPrimaryBlock
          car={car}
          blockType={DetailsEnum.FUEL}
          navigateToDetails={navigateToDetails}
        />
        <InfoPrimaryBlock
          car={car}
          blockType={DetailsEnum.SERVICE}
          navigateToDetails={navigateToDetails}
        />
      </View>
      <View style={styles.tabsRow}>
        <InfoSecondaryBlock
          car={car}
          blockType={DetailsEnum.FINE}
          navigateToDetails={navigateToDetails}
        />
        <InfoSecondaryBlock
          car={car}
          blockType={DetailsEnum.PARKING}
          navigateToDetails={navigateToDetails}
        />
        <InfoSecondaryBlock
          car={car}
          blockType={DetailsEnum.GAS_STATION}
          navigateToDetails={navigateToDetails}
        />
      </View>
      <MapComponent
        latitude={car.currentLocation.latitude}
        longitude={car.currentLocation.longitude}
        address={car.currentLocation.address}
      />
      <View style={spacerStyle} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(16),
  },
});
