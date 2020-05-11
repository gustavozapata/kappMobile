import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

export default function AddItem({addItem}) {
  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);

  const addNewItem = () => {
    addItem(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item"
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addNewItem(text)}>
        <Text style={styles.btnText}>
          <Image source={require('../images/add.png')} style={styles.img} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
  img: {
    width: 15,
    height: 15,
  },
});
