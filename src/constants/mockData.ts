import { FuelEnum, ServiceEnum } from '../types/widgets';
import { type Car } from '../types/car';

export const fuelCost = {
  [FuelEnum.AI92]: 42,
  [FuelEnum.AI95]: 49,
  [FuelEnum.AI98]: 56,
};

export const mockedCars: Car[] = [
  {
    model: 'Genesis G70',
    number: 'K 332 MB 777',
    subscriptionBefore: '14.07.23',
    fuelType: FuelEnum.AI95,
    currentFuel: 15,
    fuelLimit: 75,
    fuelDeliveryTime: 45,
    serviceDistance: 937,
    serviceTypes: [ServiceEnum.OIL, ServiceEnum.FILTER],
    serviceDuration: '6',
    serviceCost: 27200,
    fineAmount: 4,
    fineCost: 5200,
    parkingNumber: 1119,
    parkingHours: 4,
    parkingCostInHour: 200,
    gasStationDistance: 1600,
    currentLocation: {
      latitude: 59.92994341746703,
      longitude: 30.344734833466003,
      address: 'ул. Рубинштейна, 22к4',
    },
  },
  {
    model: 'Renault Logan',
    number: 'M 290 HG 139',
    subscriptionBefore: '22.08.23',
    fuelType: FuelEnum.AI95,
    currentFuel: 24,
    fuelLimit: 70,
    fuelDeliveryTime: 30,
    serviceDistance: 2,
    serviceTypes: [ServiceEnum.ENGINE, ServiceEnum.GEARBOX],
    serviceDuration: '4',
    serviceCost: 16800,
    fineAmount: 2,
    fineCost: 2400,
    parkingNumber: 392,
    parkingHours: 1,
    parkingCostInHour: 150,
    gasStationDistance: 3900,
    currentLocation: {
      latitude: 55.754508,
      longitude: 37.682279,
      address: 'ул. Волочаевская, 128/2',
    },
  },
  {
    model: 'Toyota Corolla',
    number: 'J 124 OA 485',
    subscriptionBefore: '09.09.23',
    fuelType: FuelEnum.AI98,
    currentFuel: 55,
    fuelLimit: 80,
    fuelDeliveryTime: 25,
    serviceDistance: 48,
    serviceTypes: [
      ServiceEnum.STEERING_WHEEL,
      ServiceEnum.ENGINE,
      ServiceEnum.FILTER,
    ],
    serviceDuration: '7',
    serviceCost: 22400,
    fineAmount: 6,
    fineCost: 7400,
    parkingNumber: 930,
    parkingHours: 6,
    parkingCostInHour: 350,
    gasStationDistance: 825,
    currentLocation: {
      latitude: 47.254366,
      longitude: 39.774244,
      address: 'ул. Металлургическая, 53',
    },
  },
  {
    model: 'Peugeot 207',
    number: 'E 194 FK 843',
    subscriptionBefore: '30.08.23',
    fuelType: FuelEnum.AI95,
    currentFuel: 40,
    fuelLimit: 70,
    fuelDeliveryTime: 40,
    serviceDistance: 152,
    serviceTypes: [ServiceEnum.WHEELS, ServiceEnum.FILTER, ServiceEnum.GEARBOX],
    serviceDuration: '4,5',
    serviceCost: 16100,
    fineAmount: 3,
    fineCost: 4800,
    parkingNumber: 134,
    parkingHours: 1,
    parkingCostInHour: 250,
    gasStationDistance: 1328,
    currentLocation: {
      latitude: 56.296547,
      longitude: 44.055029,
      address: 'ул. им. Генерала Ивлиева, 92',
    },
  },
  {
    model: 'Ford Focus',
    number: 'J 952 KV 495',
    subscriptionBefore: '03.08.23',
    fuelType: FuelEnum.AI95,
    currentFuel: 35,
    fuelLimit: 80,
    fuelDeliveryTime: 10,
    serviceDistance: 59,
    serviceTypes: [ServiceEnum.STEERING_WHEEL, ServiceEnum.OIL],
    serviceDuration: '3',
    serviceCost: 10200,
    fineAmount: 1,
    fineCost: 1800,
    parkingNumber: 395,
    parkingHours: 3,
    parkingCostInHour: 300,
    gasStationDistance: 209,
    currentLocation: {
      latitude: 54.699596,
      longitude: 20.482373,
      address: 'ул. Портовая, 241/3',
    },
  },
];
