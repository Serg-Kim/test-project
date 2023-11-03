import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { DetailsScreenRouteProp } from '../../../../navigation/types';
import { horizontalScale, moderateScale, verticalScale } from '../../../../utils/styleUtils';
import { titles } from '../../../services/screens/Services/ServicesScreen';
import { COLORS } from '../../../../constants/colors';

export const DetailsScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute<DetailsScreenRouteProp>();

  const title = titles[params.key];

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          hitSlop={8}
          activeOpacity={0.8}
          onPress={goBack}
        >
          <Text style={styles.backButtonText}>Назад</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.spacer} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(8),
  },
  titleContainer: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(32),
    backgroundColor: COLORS.backgroundGray,
    borderRadius: 100,
  },
  title: {
    fontSize: moderateScale(18),
    textTransform: 'uppercase',
    color: COLORS.white,
  },
  backButton: {
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(12),
    borderRadius: moderateScale(4),
    borderWidth: moderateScale(1),
    borderColor: COLORS.mainGray,
  },
  backButtonText: {
    fontSize: moderateScale(12),
    color: COLORS.mainGray,
  },
  spacer: {
    width: horizontalScale(36),
  },
});
