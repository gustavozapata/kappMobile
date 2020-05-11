import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, name: 'Assets'},
    {id: 2, name: 'Documents'},
    {id: 3, name: 'Credit Cards'},
    {id: 4, name: 'Apps'},
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
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default App;
