import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import Navigation from '../layout/Navigation';

const AppsScreen = ({navigation}) => {
  const [items, setItems] = useState([
    {id: 1, name: 'Coda 2'},
    {id: 2, name: 'Clear'},
    {id: 3, name: 'Logic Pro 2011'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      //prevItems is the state as it is now (above)
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <Navigation navigation={navigation} active="categories" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppsScreen;
