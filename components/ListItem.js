import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Texto from './Texto';

export default function ListItem({item, deleteItem}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Texto style={styles.listItemText} type="text">
          {item.name}
        </Texto>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Image
            source={require('../images/bin.png')}
            style={styles.listItemDelete}
          />
        </TouchableOpacity>
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
  },
  listItemDelete: {
    width: 12,
    height: 14,
  },
});
