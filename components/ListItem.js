import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import Texto from './Texto';
import Icon from 'react-native-vector-icons/dist/Octicons';

export default function ListItem({item, deleteItem}) {
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText} type="text">
          {item.name}
        </Text>
        <Icon name="pencil" size={15} />
      </View>
      <View style={styles.info}>
        <Icon name="location" size={15} color={'#428BF7'} style={styles.icon} />
        <Text style={styles.infoText}>{item.currentlyAt.city}</Text>
        {item.expire && (
          <View style={styles.info}>
            <Text> | </Text>
            <Icon
              name="calendar"
              size={15}
              color={'#428bf7'}
              style={styles.icon}
            />
            <Text style={styles.infoText}>{getDate(item.expire)}</Text>
          </View>
        )}
      </View>
      <View style={styles.bottomPart}>
        {item.keywords && (
          <View style={styles.keywords}>
            {item.keywords.map(key => (
              <Text style={styles.keyword}>{key}</Text>
            ))}
          </View>
        )}
        <TouchableOpacity onPress={() => deleteItem(item._id)}>
          <Image
            source={require('../images/bin.png')}
            style={styles.listItemDelete}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getDate = date => {
  const formatDate = new Date(date);
  return formatDate.toDateString();
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    // backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    marginBottom: 3,
    justifyContent: 'space-between',
  },
  listItemText: {
    fontSize: 16,
    // marginBottom: 8,
  },
  listItemDelete: {
    width: 12,
    height: 14,
    // marginTop: -17,
  },
  info: {
    flexDirection: 'row',
    // marginTop: 5,
  },
  bottomPart: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  keywords: {
    flexDirection: 'row',
  },
  keyword: {
    marginRight: 3,
    borderWidth: 1,
    borderColor: '#428bf7',
    borderRadius: 3,
    // paddingVertical: 0,
    paddingHorizontal: 2,
    // paddingLeft: 2,
    fontSize: 10,
    color: '#fff',
    backgroundColor: '#428bf7',
    height: 15,
  },
  infoText: {
    fontSize: 13,
  },
  icon: {
    marginRight: 4,
    // marginTop: 2,
  },
});
