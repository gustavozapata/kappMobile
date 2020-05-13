import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
// import Texto from '../components/Texto';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import tags from '../data/tags';

export default function Navigation({navigation, active}) {
  const iconColor = item => {
    return active === item ? '#198CFF' : '#B8BDCB';
  };
  return (
    <View style={styles.navigation}>
      <TouchableOpacity
        style={styles.navigationItem}
        onPress={() => navigation.navigate('Home')}>
        <Icon
          name="switcher"
          size={23}
          color={iconColor('categories')}
          style={styles.icon}
        />
        <Text
          style={{
            color: iconColor('categories'),
            position: 'absolute',
            fontSize: 12,
            fontWeight: '600',
            width: 100,
            bottom: -20,
            left: -21,
          }}>
          Categories
        </Text>
        {/* <Texto type="navigationActive">Categories</Texto> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigationItem}
        onPress={() => navigation.navigate('Tags', {tags})}>
        <Icon
          name="tag"
          size={23}
          color={iconColor('tags')}
          style={styles.icon}
        />
        {/* <Texto type="navigationTags">Tags</Texto> */}
        <Text
          style={{
            color: iconColor('tags'),
            position: 'absolute',
            fontSize: 12,
            fontWeight: '600',
            width: 100,
            bottom: -20,
            left: 0,
          }}>
          Tags
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigationItem}>
        <Icon
          name="setting"
          size={23}
          color={iconColor('settings')}
          style={styles.icon}
        />
        <Text
          style={{
            color: iconColor('settings'),
            position: 'absolute',
            fontSize: 12,
            fontWeight: '600',
            width: 100,
            bottom: -20,
            left: -10,
          }}>
          Settings
        </Text>
        {/* <Texto type="navigation">Settings</Texto> */}
      </TouchableOpacity>
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
    position: 'relative',
  },
  navigationText: {
    fontSize: 13,
    position: 'absolute',
    width: 100,
    bottom: -25,
    left: -10,
    color: '#929292',
    alignItems: 'center',
  },
  icon: {
    // marginBottom: 4,
  },
});
