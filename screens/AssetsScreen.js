import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  Modal,
  TouchableHighlight,
  Text,
} from 'react-native';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import Navigation from '../layout/Navigation';
import host from '../Local';

const AssetsScreen = ({navigation}) => {
  const [items, setItems] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

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
    fetch(`${host}:4000/api/v1/assets`)
      .then(res => res.json())
      .then(data => setItems(data.data))
      .catch(err => {
        console.log(err);
      });
  };

  const deleteItem = id => {
    Alert.alert('Delete item', 'Are you sure you want to delete this?', [
      {
        text: 'OK',
        onPress: () => {
          fetch(`${host}:4000/api/v1/assets/${id}`, {
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

  const addItem = name => {
    if (!name) {
      Alert.alert('Error', 'Please enter an item', [{text: 'ACEPTAR'}]);
    } else {
      setItems(prevItems => {
        return [{id: prevItems.length + 2, name}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />

      <Modal animationType="fade" transparent={true} visible={showAdd}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Asset</Text>
            <AddItem addItem={addItem} />
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setShowAdd(!showAdd);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AssetsScreen;
