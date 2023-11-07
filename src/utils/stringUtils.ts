import { ServiceEnum } from '../types/widgets';

export const addSpacesFormatter = (str: string) => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const serviceTypesFormatter = (services: ServiceEnum[]) =>
  services
    .map((serviceType, idx) => {
      if (idx !== 0) {
        return serviceType.charAt(0).toLowerCase() + serviceType.slice(1);
      }

      return serviceType;
    })
    .join(', ');
