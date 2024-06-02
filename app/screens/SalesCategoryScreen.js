import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import {
  exportSalesCategories,
  salesCatogries,
  sharesSalesCategories,
} from '../Utils/data';

function SalesCategoryScreen({route, navigation}) {
  const routeData = route.params;
  const title = routeData.title;
  const data =
    title == 'Shares for Sale'
      ? sharesSalesCategories
      : title == 'Export & Import Trade'
      ? exportSalesCategories
      : salesCatogries;
  return (
    <ScreenComponent style={styles.container}>
      <Header label={routeData.title} />
      <FlatList
        data={data}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 10}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('AddsList', item)}
              style={styles.chevronButton}
              activeOpacity={0.5}>
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={styles.chevronText}>
                {item}
              </Text>
              <Image
                source={require('../assets/leftArrow.png')}
                style={styles.chevronImage}
              />
            </TouchableOpacity>
          );
        }}
      />
    </ScreenComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  chevronButton: {
    backgroundColor: colors.lightprimary,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: width - 30,
  },
  chevronText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
    width: '90%',
  },
  chevronImage: {
    transform: [{rotate: '180deg'}],
    height: 20,
    width: 20,
  },
});
export default SalesCategoryScreen;
