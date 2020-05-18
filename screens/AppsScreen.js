import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import Navigation from '../layout/Navigation';

const AppsScreen = ({navigation}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.29:4000/api/v1/apps')
      .then(res => res.json())
      .then(data => setItems(data.data))
      .catch(err => {
        console.log(err);
      });
  }, []);

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