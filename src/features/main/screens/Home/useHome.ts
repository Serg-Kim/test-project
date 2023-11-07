import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { type Car } from '../../../../types/car';
import { mockedCars } from '../../../../constants/mockData';

export const useHome = () => {
  const [cars, setCars] = useState(mockedCars);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const timer = useRef<NodeJS.Timeout | null>(null);

  const setCurrentIndexHandler = (index: number) => {
    setCurrentIndex(index);
  };

  const updateCars = async (): Promise<Car[]> => {
    return new Promise(resolve => {
      setTimeout(() => resolve(mockedCars), 2000);
    });
  };

  const onRefresh = async () => {
    if (!refreshing) {
      setRefreshing(true);
    }

    if (timer.current) {
      setRefreshing(false);
      return;
    }

    try {
      const res = await updateCars();
      if (res) {
        setCars(res);
      }
    } catch {
      Alert.alert('Ошибка', 'Не удалось получить данные о машинах');
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        timer.current = null;
      }, 15000);
    }

    return () => {
      timer.current = null;
    };
  }, [refreshing]);

  return {
    cars,
    currentIndex,
    refreshing,
    setCurrentIndexHandler,
    onRefresh,
  };
};
