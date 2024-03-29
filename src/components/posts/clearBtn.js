import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const ClearBtn = ({ onClear }) => {
  if(Platform.OS == 'ios') {
    return (
      <TouchableOpacity style={styles.btn} onPress={onClear}>
        <Text style={styles.title}>Delete All</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity style={styles.btnFloat} onPress={onClear}>
      <IonIcons name="md-trash" size={24} color="#fff" />
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  btn: {
    backgroundColor: '#C02828',
    alignContent: 'center',
    justifyContent: 'center',
    height: 40
  },
  btnFloat: {
    backgroundColor: '#C02828',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    right: 16,
    bottom: 8,
    elevation: 8
  }

});

export default ClearBtn;