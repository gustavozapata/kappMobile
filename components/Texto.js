import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Texto({type, children}) {
  return <Text style={styles[type]}>{children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: '700',
    // fontFamily: 'Montserrat-Bold',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    // fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
  navigation: {
    fontSize: 13,
    // fontFamily: 'Montserrat-Semibold',
    position: 'absolute',
    width: 100,
    bottom: -25,
    left: -10,
    color: '#929292',
    alignItems: 'center',
  },
  navigationTags: {
    fontSize: 13,
    // fontFamily: 'Montserrat-Semibold',
    position: 'absolute',
    width: 100,
    bottom: -25,
    left: 0,
    color: '#929292',
    alignItems: 'center',
  },
  navigationActive: {
    fontSize: 13,
    position: 'absolute',
    width: 100,
    bottom: -25,
    left: -21,
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
