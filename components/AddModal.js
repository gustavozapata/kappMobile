import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Text,
  TextInput,
} from 'react-native';

export default function AddModal({view, addItem, hide}) {
  const [keyword, setKeyword] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [item, setItem] = useState({
    name: '',
    description: '',
    currentlyAt: {
      city: '',
    },
    expire: '',
    keywords: [],
  });

  useEffect(() => {
    handleChange('keywords', keywords);
  }, [keywords]);

  const handleChange = (field, value) => {
    setItem(prevState => {
      switch (field) {
        case 'city':
          return {...prevState, currentlyAt: {[field]: value}};
        default:
          return {...prevState, [field]: value};
      }
    });
  };

  const addTag = () => {
    if (keyword !== '') {
      setKeywords([...keywords, keyword]);
      setKeyword('');
    }
  };

  const removeTag = key => {
    let keys = keywords.filter(el => el !== key);
    setKeywords([...keys]);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add {view.slice(0, -1)}</Text>
          {/* <AddItem /> */}
          <View style={styles.fields}>
            <TextInput
              placeholder="Name"
              style={styles.input}
              onChangeText={value => handleChange('name', value)}
              value={item.name}
            />
            <TextInput
              placeholder="Description"
              style={styles.input}
              onChangeText={value => handleChange('description', value)}
              value={item.description}
            />
            <TextInput
              placeholder="Location"
              style={styles.input}
              onChangeText={value => handleChange('city', value)}
              value={item.currentlyAt.city}
            />
            <TextInput
              placeholder="Expire Date"
              style={styles.input}
              onChangeText={value => handleChange('expire', value)}
              value={item.expire}
            />
            <View style={styles.tagContainer}>
              <TextInput
                placeholder="Tags"
                style={styles.inputTag}
                onChangeText={value => setKeyword(value)}
                value={keyword}
              />
              <TouchableHighlight style={styles.btnView} onPress={addTag}>
                <Text style={styles.btnTag}>+</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.tags}>
              {keywords.map(key => (
                <View style={styles.eachTag}>
                  <Text style={styles.tagText}>{key}</Text>
                  <Text onPress={() => removeTag(key)} style={styles.deleteTag}>
                    x
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.buttons}>
            <TouchableHighlight
              style={{...styles.button, backgroundColor: '#2196F3'}}
              onPress={() => addItem(item)}>
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{...styles.button, backgroundColor: '#2196F3'}}
              onPress={hide}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fields: {
    flex: 3,
  },
  tags: {
    flexDirection: 'row',
    marginTop: 5,
    flexWrap: 'wrap',
  },
  deleteTag: {
    paddingLeft: 5,
    borderLeftWidth: 1,
    borderLeftColor: '#7033FF',
  },
  tagText: {
    paddingRight: 3,
  },
  eachTag: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#7033FF',
    borderRadius: 4,
    padding: 3,
    marginRight: 7,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputTag: {
    width: 200,
    paddingBottom: 4,
    marginBottom: 4,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  btnView: {
    width: 30,
    height: 20,
    padding: 1,
  },
  btnTag: {
    borderWidth: 2,
    borderColor: '#2196F3',
    borderRadius: 5,
    padding: 2,
    width: 30,
    textAlign: 'center',
    fontSize: 15,
    color: '#2196F3',
  },
  modalView: {
    width: 350,
    height: 480,
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
  button: {
    borderRadius: 5,
    padding: 6,
    width: 60,
    elevation: 2,
  },
  buttons: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: 250,
    paddingBottom: 4,
    marginBottom: 4,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
