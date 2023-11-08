import React from 'react';
import { DetailsEnum } from '../navigation/types';
import { GasStationIcon } from '../assets/icons/GasStation';
import { MaintenanceIcon } from '../assets/icons/Maintenance';
import { CCTVIcon } from '../assets/icons/CCTV';
import { ParkingIcon } from '../assets/icons/Parking';
import { GasStationFillIcon } from '../assets/icons/GasStationFill';
import { COLORS } from './colors';

export const CURRENCY_RUB = '\u20BD';

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
