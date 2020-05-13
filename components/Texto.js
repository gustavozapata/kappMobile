import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Texto({type, children}) {
  return <Text style={styles[type]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
  heading: {
    fontSize: 22,
    // fontFamily: 'Montserrat-Bold',
    color: 'white',
    textAlign: 'center',
  },
  navigation: {
    fontSize: 13,
    flexDirection: 'column',
    // fontFamily: 'Montserrat-Semibold',
    color: '#929292',
    alignItems: 'center',
  },
  navigationActive: {
    fontSize: 13,
    flexDirection: 'column',
    // fontFamily: 'Montserrat-Semibold',
    color: '#198CFF',
    alignItems: 'center',
  },
  menu: {
    fontSize: 20,
    color: '#4A4A4A',
    // fontFamily: 'Montserrat-Medium',
  },
});
