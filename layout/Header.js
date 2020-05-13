import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from '../components/Texto';

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
    justifyContent: 'flex-end',
    paddingBottom: 13,
    backgroundColor: '#428BF7',
  },
});

export default Header;
