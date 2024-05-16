import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function VerifyAccountModel({visible, setVisible}) {
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
        <Image
          source={require('../assets/verifyVector.jpg')}
          style={{height: 200, width: '100%', marginVertical: '10%'}}
        />
        <Text style={[styles.label, {fontSize: 20}]}>
          Get a Verified on Buissness Hub!
        </Text>
        <View style={styles.line} />
        <Text style={styles.label}>Build Trust</Text>
        <Text>Verify user and get upto 5x engagements.</Text>
        <Text style={styles.label}>Build Trust</Text>
        <Text>Verify user and get upto 5x engagements.</Text>
        <Text style={styles.label}>Build Trust</Text>
        <Text>Verify user and get upto 5x engagements.</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '10%',
          }}>
          <AppButton
            onPress={setVisible}
            textStyle={{color: colors.primary}}
            label="Skip"
            style={{
              width: '45%',
              backgroundColor: colors.lightprimary,
              borderWidth: 1,
              borderColor: colors.primary,
            }}
          />
          <AppButton
            onPress={setVisible}
            label="Get Verified"
            style={{width: '45%'}}
          />
        </View>
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
  label: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 2,
  },
  line: {
    height: 1,
    backgroundColor: colors.black,
    opacity: 0.2,
    marginTop: 5,
  },
});
export default VerifyAccountModel;
