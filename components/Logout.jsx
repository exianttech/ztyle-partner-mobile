import { Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistor } from '@/store';

// styles
import styles from '@/styles/styles';

// modal
import BasicModal from '@/components/Modals/BasicModal';

// actions
import { resetAll } from '@/store/resetAll';


const Logout = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // modal
    const [modalVisible, setmodalVisible] = useState(false);

    const handleLogout = async () => {
        try {
            setmodalVisible(false);
            dispatch(resetAll());
            await AsyncStorage.removeItem('token');
            await persistor.purge();
            setTimeout(() => {
                router.replace('/(auth)/Login');
            }, 100);
        }
        
        catch (err) {
            console.error('Logout failed:', err);
        }
       
    }
    
    return (
        <>
            <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => setmodalVisible(true)}
            >
                <FontAwesome name="sign-out" size={16} color='#FF6746' />
                <Text style={styles.dropdownText}>Logout</Text>
            </TouchableOpacity>
            
            <BasicModal
                visible={modalVisible}
                onClose={() => setmodalVisible(false)}
                onConfirm={handleLogout}
                title="Are you sure you want to logout?"
                message="Click Logout if you still want to logout from your account. Otherwise click Cancel."
                confirmText='Logout'
                cancelText='Cancel'
            />
        </>
    )
}

export default Logout