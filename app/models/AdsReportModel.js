import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import colors from '../config/colors';
import {reportTypes} from '../Utils/data';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../components/AppButton';

function AdsReportModel({visible, setVisible}) {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      style={{flex: 1}}>
      <TouchableOpacity
        onPress={setVisible}
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
      <View style={styles.container}>
        <Text style={styles.topLable}>Report an Ad</Text>
        <FlatList
          scrollEnabled={false}
          data={reportTypes}
          renderItem={({item}) => {
            const isSelected = selected == item;
            return (
              <TouchableOpacity
                style={styles.txtRow}
                onPress={() => setSelected(item)}>
                <View style={styles.circle}>
                  {isSelected && <View style={styles.dot} />}
                </View>
                <Text style={styles.txt}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
        {selected !== '' && (
          <AppButton
            label="Report"
            style={{marginTop: 10}}
            onPress={() => {
              setVisible();
              setTimeout(() => {
                navigation.goBack();
              }, 200);
            }}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    paddingBottom: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  topLable: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
  },
  txtRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  txt: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '500',
  },
});
export default AdsReportModel;