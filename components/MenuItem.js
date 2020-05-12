import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Texto from './Texto';

const icons = {
  Assets: require('../images/assets.png'),
  Documents: require('../images/documents.png'),
  Cards: require('../images/cards.png'),
  Apps: require('../images/apps.png'),
};

export default function MenuItem({item}) {
  const icon = icons[item.name];

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Image source={icon} style={styles.icon} />
        <Texto style={styles.listItemText} type="menu">
          {item.name}
        </Texto>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    fontSize: 18,
    // textAlign: 'left',
  },
  listItemDelete: {
    width: 12,
    height: 14,
  },
  icon: {
    width: 28,
    height: 28,
    flexDirection: 'row',
  },
});
