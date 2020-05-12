import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import Navigation from './components/Navigation';
// import Assets from './components/Assets';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, name: 'Assets', image: 'assets.png'},
    {id: 2, name: 'Documents', image: 'documents.png'},
    {id: 3, name: 'Cards', image: 'cards.png'},
    {id: 4, name: 'Apps', image: 'apps.png'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <MenuItem item={item} />}
      />
      {/* <Assets /> */}
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
