import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Alert, Text} from 'react-native';
import ListItem from '../components/ListItem';
import Navigation from '../layout/Navigation';
import Loading from '../components/Loading';
import host from '../Local';
import AddModal from '../components/AddModal';

const ItemsScreen = ({navigation, view}) => {
  const [items, setItems] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={() => setShowAdd(true)} style={styles.addButton}>
          +
        </Text>
      ),
    });
  }, [navigation]);

  const loadData = () => {
    fetch(`${host}:4000/api/v1/${view}`)
      .then(res => res.json())
      .then(data => {
        setItems(data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteItem = id => {
    Alert.alert('🗑️ Delete item', 'Are you sure you want to delete this?', [
      {
        text: 'OK',
        onPress: () => {
          fetch(`${host}:4000/api/v1/${view}/${id}`, {
            method: 'DELETE',
          }).then(() => {
            loadData();
          });
        },
      },
      {
        text: 'Cancel',
      },
    ]);
  };

  const addItem = item => {
    if (!item.name) {
      Alert.alert('⚠️', 'Name is required', [{text: 'OK'}]);
    } else {
      fetch(`${host}:4000/api/v1/${view}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...item}),
      })
        .then(() => {
          loadData();
          setShowAdd(false);
        })
        .catch(err => {
          Alert.alert('🔺', `Error: ${err.response.message}`, [{text: 'OK'}]);
        });
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loading />}
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />

      {showAdd && (
        <AddModal
          view={view}
          addItem={addItem}
          hide={() => setShowAdd(false)}
        />
      )}

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
  addButton: {
    color: '#fff',
    fontSize: 28,
    marginRight: 15,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default ItemsScreen;
