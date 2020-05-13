import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import Navigation from '../layout/Navigation';

const TagsScreen = ({route, navigation}) => {
  const {tags} = route.params;

  const deleteItem = id => {};
  return (
    <View style={styles.container}>
      <FlatList
        data={tags}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <Navigation navigation={navigation} active="tags" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default TagsScreen;
