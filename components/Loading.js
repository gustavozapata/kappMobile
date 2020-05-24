import React, {useEffect} from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const spinAnim = new Animated.Value(0);

const spin = spinAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

export default function Loading() {
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  return (
    <View style={styles.loading}>
      <Animated.View style={{transform: [{rotate: spin}]}}>
        <Icon name="loading1" size={45} color={'#428bf7'} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 5,
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
