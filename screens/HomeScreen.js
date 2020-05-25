import React, {useState} from 'react';
import {View, StyleSheet, FlatList, StatusBar, Platform} from 'react-native';
// import Header from '../layout/Header';
import MenuItem from '../components/MenuItem';
import Navigation from '../layout/Navigation';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const HomeScreen = ({navigation}) => {
  const [items, setItems] = useState([
    {id: 1, name: 'Assets', image: 'assets.png'},
    {id: 2, name: 'Documents', image: 'documents.png'},
    {id: 3, name: 'Cards', image: 'cards.png'},
    {id: 4, name: 'Apps', image: 'apps.png'},
  ]);

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="#428BF7" barStyle="light-content" />
      {/* <View style={styles.appBar} /> */}
      {/* <Header /> */}
      <FlatList
        data={items}
        renderItem={({item}) => (
          <MenuItem item={item} navigation={navigation} />
        )}
      />
      <Navigation navigation={navigation} active="categories" />
    </View>
  );
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    // height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});

export default HomeScreen;
