import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from './Texto';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Texto type="heading">{title}</Texto>
    </View>
  );
};

Header.defaultProps = {
  title: 'Kapp',
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 15,
    backgroundColor: '#428BF7',
  },
});

export default Header;
