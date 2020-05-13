import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from '../components/Texto';
import Icon from 'react-native-vector-icons/dist/AntDesign';

export default function Navigation() {
  return (
    <View style={styles.navigation}>
      <View style={styles.navigationItem}>
        <Icon name="switcher" size={25} color="#198CFF" style={styles.icon} />
        <Texto type="navigationActive">Categories</Texto>
      </View>
      <View style={styles.navigationItem}>
        <Icon name="tag" size={25} color="#B8BDCB" style={styles.icon} />
        <Texto type="navigation">Tags</Texto>
      </View>
      <View style={styles.navigationItem}>
        <Icon name="setting" size={25} color="#B8BDCB" style={styles.icon} />
        <Texto type="navigation">Settings</Texto>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    height: 80,
    padding: 45,
    paddingTop: 8,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navigationItem: {
    alignItems: 'center',
    // alignContent: 'flex-end',
    justifyContent: 'flex-start',
  },
  icon: {
    // marginBottom: 4,
  },
});
