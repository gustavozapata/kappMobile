import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Navigation from '../layout/Navigation';

const TagsScreen = ({route, navigation}) => {
  const {tags} = route.params;

  const deleteItem = id => {};

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Tags</Text>
      <Navigation navigation={navigation} active="tags" />
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TagsScreen;
