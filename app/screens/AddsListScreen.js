import React, {useState} from 'react';
import {View, StyleSheet, Image, TextInput, FlatList} from 'react-native';
import AddCard from '../components/AddCard';
import AppIcon from '../components/AppIcon';
import ScreenComponent from '../components/ScreenComponent';
import colors from '../config/colors';
import AddsFilterModel from '../models/AddsFilterModel';
import AddsSortModel from '../models/AddsSortModel';
import {adds} from '../Utils/data';

function AddsListScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Default');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  return (
    <>
      <ScreenComponent style={styles.container}>
        <View style={styles.header}>
          <AppIcon
            onPress={() => navigation.goBack()}
            source={require('../assets/leftArrow.png')}
            iconStyle={styles.icon}
            imageStyle={{tintColor: colors.white, height: 18, width: 18}}
          />
          <View style={styles.searchbar}>
            <Image
              source={require('../assets/search.png')}
              style={{height: 30, width: 30}}
            />
            <TextInput
              placeholder="Search for adds"
              placeholderTextColor={colors.black}
              style={{fontSize: 15, width: '70%'}}
              value={search}
              onChangeText={setSearch}
            />
          </View>
          {search.length == 0 && (
            <>
              <View style={{width: 10}} />
              <AppIcon
                source={require('../assets/filter.png')}
                iconStyle={styles.icon}
                imageStyle={{tintColor: colors.white}}
                onPress={() => setFilterModalVisible(true)}
              />
              <View style={{width: 10}} />
              <AppIcon
                source={require('../assets/sort.png')}
                iconStyle={styles.icon}
                imageStyle={{tintColor: colors.white, height: 18, width: 18}}
                onPress={() => setSortModalVisible(true)}
              />
            </>
          )}
        </View>
        <FlatList
          contentContainerStyle={{paddingTop: 10, paddingBottom: 50}}
          data={adds}
          renderItem={({item}) => {
            return <AddCard item={item} />;
          }}
        />
      </ScreenComponent>

      <AddsFilterModel
        visible={filterModalVisible}
        setVisible={() => setFilterModalVisible(false)}
      />
      <AddsSortModel
        visible={sortModalVisible}
        setVisible={() => setSortModalVisible(false)}
        selected={selectedSort}
        setSelected={val => {
          setSelectedSort(val);
          setSortModalVisible(false);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  searchbar: {
    flex: 1,
    height: 40,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: colors.inputField,
    gap: 5,
    marginStart: 10,
  },
  icon: {
    backgroundColor: colors.primary,
    height: 40,
    width: 40,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AddsListScreen;
