import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import Navigation from '../layout/Navigation';

const CardsScreen = ({navigation}) => {
  const [items, setItems] = useState([
    {id: 1, name: 'Barclays'},
    {id: 2, name: 'Nationwide'},
    {id: 3, name: 'Monzo'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
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
    // paddingTop: 40,
  },
});

export default CardsScreen;
