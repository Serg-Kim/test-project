import React, { useCallback } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Car } from '../../../../../../types/car';
import { Logo } from './Logo';
import { CarItem } from './CarItem';
import { Profile } from './Profile';
import { PageIndicator } from './PageIndicator';
import { horizontalScale, moderateScale, verticalScale } from '../../../../../../utils/styleUtils';
import { COLORS } from '../../../../../../constants/colors';

type OwnProps = {
  cars: Car[];
  currentIndex: number;
  refreshing: boolean;
  setCurrentIndexHandler: (index: number) => void;
  onRefresh: () => void;
};

const viewabilityConfig = {
  itemVisiblePercentThreshold: 50,
  waitForInteraction: true,
};

const keyExtractor = (item: Car) => item.number;

const renderItem = ({ item: car }: ListRenderItemInfo<Car>) => <CarItem car={car}/>;

export const HeaderComponent = ({
  cars,
  currentIndex,
  refreshing,
  setCurrentIndexHandler,
  onRefresh,
}: OwnProps) => {
  const { top } = useSafeAreaInsets();

  const itemAmount = cars.length;

  const onViewableItemsChanged = useCallback((info: {viewableItems: ViewToken[], changed: ViewToken[]}) => {
      const newIndex = info.viewableItems[0]?.index || 0;
      setCurrentIndexHandler(newIndex);
  }, []);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Logo />
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.lightGray}
          />
        }
        style={styles.list}
      />
      <Profile />
      <PageIndicator itemAmount={itemAmount} currentIndex={currentIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: verticalScale(8),
    borderBottomLeftRadius: moderateScale(24),
    borderBottomRightRadius: moderateScale(24),
    backgroundColor: COLORS.mainGray,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 5,
    elevation: 18,
  },
  list: {
    alignSelf: 'center',
    maxWidth: horizontalScale(300),
    marginTop: verticalScale(16),
  },
});
