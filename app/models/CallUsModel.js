import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppIcon from '../components/AppIcon';
import colors from '../config/colors';

function CallUsModel({visible, setVisible}) {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <TouchableOpacity style={styles.bg} onPress={setVisible}>
        <TouchableOpacity style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={setVisible}
              style={{top: -15, right: -15, padding: 5}}>
              <Image
                style={styles.img}
                source={require('../assets/cross.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: -25,
            }}>
            <Image
              source={require('../assets/call.png')}
              style={{height: 30, width: 30}}
            />
            <Text style={styles.callLabel}>Call us get in touch</Text>
            <Text style={{color: colors.black}}>
              9:00 to 6:00PM, Monday to friday
            </Text>

            <AppButton label="800-385363807" style={{marginVertical: 15}} />
            <Text style={{color: colors.black}}>Or email us at</Text>
            <Text style={{color: colors.black}}>
              customersupport@buisnesshub.com
            </Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    width: '90%',
    padding: 15,
    borderRadius: 15,
  },
  img: {
    height: 40,
    width: 40,
    tintColor: colors.black,
  },
  callLabel: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
    color: colors.black,
  },
});
export default CallUsModel;
