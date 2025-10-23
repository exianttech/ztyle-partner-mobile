import { useRouter } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

// images 
import logo from '@/assets/images/logo_header.png';

// style
import styles from '@/styles/styles';

const NavHader = () => {

  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.replace('/')}
    > 
      <Image
        source={logo}
        style={styles.navHeaderLogo}
        resizeMode='cover'
      />
    </TouchableOpacity>
    
  )
}


export default NavHader