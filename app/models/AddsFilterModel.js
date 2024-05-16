import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import ScreenComponent from '../components/ScreenComponent';
import SliderComponent from '../components/SliderComponent';
import colors from '../config/colors';

function AddsFilterModel({visible, setVisible}) {
  const [location, setLocation] = useState('');
  const [Keyword, setKeyword] = useState('');
  const [sliderPrice, setSliderPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      style={{flex: 1}}>
      <ScreenComponent style={styles.container}>
        <Header onPressBack={setVisible} label="Filters" />
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <ScrollView>
            <Text style={styles.inputLable}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Dubai Mariana"
              autoCapitalize="none"
              value={location}
              onChangeText={setLocation}
            />
            <Text style={{color: colors.gray, marginTop: 5}}>
              Select the cities neighbourhood or buildings that you want to
              search in
            </Text>
            <Text style={styles.inputLable}>Keyword</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: XYZ Buisness for sale"
              autoCapitalize="none"
              value={Keyword}
              onChangeText={setKeyword}
            />
            <Text style={styles.inputLable}>Price</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder="Start"
                autoCapitalize="none"
                value={'0'}
                editable={false}
                pointerEvents="none"
              />
              <Text
                style={{
                  color: colors.black,
                  marginHorizontal: 10,
                  fontWeight: '600',
                }}>
                To
              </Text>
              <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder="End"
                autoCapitalize="none"
                value={sliderPrice.toString()}
                editable={false}
                pointerEvents="none"
              />
            </View>
            <SliderComponent
              value={sliderPrice}
              onChange={val => setSliderPrice(val[0].toFixed(0))}
              minValue={0}
              maxValue={50000}
            />
            <Text style={styles.inputLable}>Categories</Text>
            <TextInput
              style={styles.input}
              placeholder="Select Category"
              autoCapitalize="none"
              value={category}
              onChangeText={setCategory}
            />
            <Text style={styles.inputLable}>Sub Categories</Text>
            <TextInput
              style={styles.input}
              placeholder="Select Sub Category"
              autoCapitalize="none"
              value={subCategory}
              onChangeText={setSubCategory}
            />
            <View style={styles.bottomContainer}>
              <TouchableOpacity
                style={{paddingVertical: 5}}
                onPress={setVisible}>
                <Text style={styles.resetText}>Reset Filters</Text>
              </TouchableOpacity>
              <AppButton
                label="Apply Filters"
                style={{width: '35%'}}
                onPress={setVisible}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScreenComponent>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  topLable: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
  },
  inputLable: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 10,
    marginTop: 15,
  },
  input: {
    backgroundColor: colors.inputField,
    borderRadius: 12,
    fontSize: 16,
    padding: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resetText: {
    color: colors.primary,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
export default AddsFilterModel;
