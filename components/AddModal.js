import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddModal({view, addItem, hide, isEdit, itemEdit}) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('Add');

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

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    setShow(false);
    setDate(currentDate);
    handleChange('expire', getDate(currentDate));
  };

  useEffect(() => {
    let elMode = isEdit ? 'Edit' : 'Add';
    setMode(elMode);
    if (isEdit) {
      setItem({...itemEdit});
      setKeywords([...itemEdit.keywords]);
    }
  }, []);

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

  const getDate = eldate => {
    const formatDate = new Date(eldate);
    return formatDate.toDateString();
  };

  const convertToStringDate = eldate => {
    let date_ = new Date(eldate).toDateString();
    return date_;
  };

  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {mode} {view.slice(0, -1)}
          </Text>
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
              onFocus={() => {
                setShow(true);
                Keyboard.dismiss();
              }}
              value={item.expire && convertToStringDate(item.expire)}
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

            <View style={styles.tagContainer}>
              <TextInput
                placeholder="Tags"
                style={styles.inputTag}
                onChangeText={value => setKeyword(value)}
                onSubmitEditing={addTag}
                value={keyword}
                autoCorrect={false}
              />
              <TouchableOpacity style={styles.btnView} onPress={addTag}>
                <Text style={styles.btnTag}>+</Text>
              </TouchableOpacity>
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
              <Text style={styles.textStyle}>{mode}</Text>
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fields: {
    flex: 2,
    // height: 300,
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
  tags: {
    flexDirection: 'row',
    marginTop: 1,
    flexWrap: 'wrap',
    flex: 1,
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
    marginBottom: 0,
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
    // height: 20,
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
    width: '95%',
    height: 550,
    // height: '75%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 15,
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
    marginBottom: 2,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: 250,
    paddingBottom: 2,
    marginBottom: 30,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
