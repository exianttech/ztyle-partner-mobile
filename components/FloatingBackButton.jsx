import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from '@/styles/styles';


const FloatingBackButton = ({ fallback = '/' }) => {
    const router = useRouter();
    
    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        }
        else {
            router.replace(fallback);
        }
    }
    return (
        <TouchableOpacity
            style={[styles.floatBackButton, styles.secondary]}
            onPress={handleBack}
            activeOpacity={0.8}
        >
            <Ionicons name='arrow-back' size={24} color="#fff" />
        </TouchableOpacity>
  )
}

export default FloatingBackButton