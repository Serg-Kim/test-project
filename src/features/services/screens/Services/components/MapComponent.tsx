import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { horizontalScale, moderateScale, verticalScale } from '../../../../../utils/styleUtils';
import { COLORS } from '../../../../../constants/colors';
import { deviceWidth } from '../../../../../utils/deviceUtils';

type OwnProps = {
  latitude: number;
  longitude: number;
  address: string;
};

export const MapComponent = ({ latitude, longitude, address}: OwnProps) => (
  <View style={styles.mapContainer}>
    <View style={styles.mapTitleContainer}>
      <Text style={styles.mapTitle}>{address}</Text>
    </View>
    <MapView
      style={styles.map}
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Marker
        coordinate={{
          latitude,
          longitude,
        }}
      />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  mapContainer: {
    alignSelf: 'center',
    marginTop: verticalScale(28),
    overflow: 'hidden',
    borderRadius: moderateScale(16),
  },
  mapTitleContainer: {
    position: 'absolute',
    top: verticalScale(8),
    left: horizontalScale(8),
    paddingVertical: verticalScale(6),
    paddingLeft: horizontalScale(12),
    paddingRight: horizontalScale(24),
    backgroundColor: COLORS.white,
    borderRadius: 100,
    zIndex: 1,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 12,
  },
  mapTitle: {
    fontSize: moderateScale(12),
    color: COLORS.mainGray,
  },
  map: {
    width: deviceWidth - horizontalScale(32),
    height: verticalScale(240),
    borderRadius: moderateScale(16),
  },
});
