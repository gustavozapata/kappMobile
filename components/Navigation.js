import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Texto from './Texto';

export default function Navigation() {
  return (
    <View style={styles.navigation}>
      <View style={styles.navigationItem}>
        <Image source={require('../images/star_a.png')} style={styles.star} />
        <Texto type="navigation">Categories</Texto>
      </View>
      <View style={styles.navigationItem}>
        <Image source={require('../images/star.png')} style={styles.star} />
        <Texto type="navigation">Tags</Texto>
      </View>
      <View style={styles.navigationItem}>
        <Image source={require('../images/star.png')} style={styles.star} />
        <Texto type="navigation">Settings</Texto>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    width: 29,
    height: 29,
  },
  navigation: {
    height: 80,
    padding: 15,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#B2B2B2',
  },
  navigationItem: {
    alignItems: 'center',
  },
});
