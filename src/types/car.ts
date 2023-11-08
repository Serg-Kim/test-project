import { FuelEnum, ServiceEnum } from './widgets';

export type Car = {
  model: string;
  number: string;
  subscriptionBefore: string;
  fuelType: FuelEnum;
  currentFuel: number;
  fuelLimit: number;
  fuelDeliveryTime: number;
  serviceDistance: number;
  serviceTypes: ServiceEnum[];
  serviceDuration: string;
  serviceCost: number;
  fineAmount: number;
  fineCost: number;
  parkingNumber: number;
  parkingHours: number;
  parkingCostInHour: number;
  gasStationDistance: number;
  currentLocation: {
    latitude: number;
    longitude: number;
    address: string;
  };
};
