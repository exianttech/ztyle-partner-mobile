import React from 'react';
import { View } from 'react-native';

// styles
import styles from '@/styles/styles';

// components
import Header from './Header';
import NavHader from './NavHader';
import Start from './Start';

const index = () => {
  return (
    <View style={styles.navBarContainer}>
      <NavHader />
      <Header />
      <Start />
    </View>
  )
}

export default index