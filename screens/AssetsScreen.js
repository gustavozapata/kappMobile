import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import Navigation from '../layout/Navigation';

const AssetsScreen = ({navigation}) => {
  const [items, setItems] = useState([
    {id: 1, name: 'iPad Pro'},
    {id: 2, name: 'iPhone 11 Pro'},
    {id: 3, name: 'MacBook Pro 2011'},
    {id: 4, name: 'Apple Watch'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      //prevItems is the state as it is now (above)
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = name => {
    if (!name) {
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems(prevItems => {
        return [{id: prevItems.length + 2, name}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <AddItem addItem={addItem} />
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
    // paddingTop: 40,
  },
});

export default AssetsScreen;
