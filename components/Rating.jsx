import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

// styles
import styles from '@/styles/styles';


const Rating = ({ rating = 0, size = 16, color = "#FFBC39" }) => {
    return (
        <View style={styles.startRow}>
            {[...Array(5)].map((_, idx) => {
                const current = idx + 1
                return (
                    <FontAwesome
                        key={idx}
                        name='star'
                        size={size}
                        style={styles.star}
                        color={current <= rating ? color : '#ccc'}
                    />
                )
            })}
        </View>
    )
}

export default Rating