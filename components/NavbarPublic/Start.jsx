import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// styles
import styles from '@/styles/styles';

const Start = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.headerButton}
      onPress={() => router.replace('/(tabs)/Dashboard')}
    >
      
      <FontAwesome name='user-circle' color='white' size={12}/>
      <Text style={styles.headerButtonText}>Get Started</Text>
    </TouchableOpacity>
  )
}

export default Start