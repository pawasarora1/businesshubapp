import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AppIcon from '../components/AppIcon';
import {placesImages} from '../Utils/data';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import AdsReportModel from '../models/AdsReportModel';
const {width, height} = Dimensions.get('screen');

function FavouritesDetailsScreen({route}) {
  const navigation = useNavigation();
  const routeData = route.params;
  const [reportModalVisible, setReportModalVisible] = useState('');
  return (
    <ScreenComponent style={styles.container}>
      <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
        <AppIcon
          onPress={() => navigation.goBack()}
          source={require('../assets/leftArrow.png')}
          iconStyle={styles.icon}
          imageStyle={{tintColor: colors.white, height: 18, width: 18}}
        />
        <View style={{flex: 1}} />
        <AppIcon
          source={require('../assets/heart.png')}
          iconStyle={styles.icon}
          imageStyle={{tintColor: colors.white, height: 18, width: 18}}
        />
        <View style={{width: 10}} />
        <AppIcon
          source={require('../assets/share.png')}
          iconStyle={styles.icon}
          imageStyle={{tintColor: colors.white, height: 18, width: 18}}
        />
      </View>
      <FlatList
        data={[routeData.image, ...placesImages.slice(0, 3)]}
        style={{position: 'absolute', zIndex: -1}}
        horizontal
        pagingEnabled
        renderItem={({item}) => {
          return (
            <Image source={item} style={{width: width, height: width * 0.8}} />
          );
        }}
      />
      <View style={styles.bottomContainer}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 50}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.label, {marginTop: 0, color: colors.black}]}>
              {routeData.amount}
            </Text>
            <Text style={[styles.bold, {color: colors.gray}]}>
              {routeData.time}
            </Text>
          </View>
          <Text style={[styles.label, {marginTop: 5, color: colors.black}]}>
            {routeData.title}
          </Text>

          <Text style={styles.label}>Description</Text>
          <Text style={[styles.bold, {color: colors.gray, paddingTop: 10}]}>
            {routeData.body}
          </Text>

          <Text style={styles.label}>Seller Details</Text>
          <View style={styles.row}>
            <Text style={styles.bold}>Name</Text>
            <Text style={[styles.bold, {color: colors.gray}]}>Al Khwarzmi</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Phone</Text>
            <Text style={[styles.bold, {color: colors.gray}]}>+9234567890</Text>
          </View>

          <Text style={styles.label}>Ad Details</Text>
          <View style={styles.row}>
            <Text style={styles.bold}>Related</Text>
            <Text style={[styles.bold, {color: colors.gray}]}>Not matched</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Status</Text>
            <Text style={[styles.bold, {color: colors.gray}]}>Unavailable</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Verified</Text>
            <Text style={[styles.bold, {color: colors.gray}]}>No</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Featured</Text>
            <Text style={[styles.bold, {color: colors.gray}]}>No</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>SubCategory</Text>
            <Text style={[styles.bold, {color: colors.gray}]}></Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.bold}>Category</Text>
            <Text style={[styles.bold, {color: colors.gray}]}></Text>
          </View>
          <AppButton label="Make an Offer" style={{marginTop: 20}} />

          <Text style={styles.label}>Location</Text>
          <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
            <Image
              source={require('../assets/location.png')}
              style={{height: 20, width: 20}}
            />
            <Text style={[styles.bold, {color: colors.gray}]}>
              {routeData.location}
            </Text>
          </View>
          <View style={styles.mapContainer}></View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => setReportModalVisible(true)}>
              <Text style={styles.reportText}>Report the ad</Text>
            </TouchableOpacity>
          </View>
          <AppButton label="Chat" />
        </ScrollView>
      </View>
      <AdsReportModel
        visible={reportModalVisible}
        setVisible={() => setReportModalVisible(false)}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    backgroundColor: colors.primary,
    height: 40,
    width: 40,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    height: height - width * 0.8 + 40,
    width: width,
    backgroundColor: colors.white,
    marginTop: width * 0.8 - 20,
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingVertical: 15,
  },
  bold: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 15,
  },
  reportText: {
    color: colors.primary,
    textDecorationLine: 'underline',
    fontWeight: '500',
    marginBottom: 10,
  },
  mapContainer: {
    backgroundColor: colors.lightprimary,
    height: 200,
    borderRadius: 20,
    marginVertical: 10,
  },
});
export default FavouritesDetailsScreen;
