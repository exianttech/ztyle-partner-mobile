import React from 'react';
import { View } from 'react-native';

// styles
import styles from '@/styles/styles';

// components
import SingleSlot from './SingleSlot';


const Slots = ({ slots }) => {
    
    return (
        <View style={styles.grayCardContainer}>
            {
                slots && slots.map((slot, idx) => (
                    <SingleSlot key={idx} slot={slot} />
                ))
            }
        </View>
    )
}

export default Slots