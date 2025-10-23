import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

// styles
import styles from '@/styles/styles';


const TimePickerInput = ({ value, onChange }) => {
    
    const [show, setshow] = useState(false);
    
    const formatTime = d =>
        d ? d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Not Set';
    
    const handleChange = (event, selectedDate) => {
        // Android: close after pick; ignore dismiss
        if (Platform.OS === 'android') setshow(false);
        if (event.type === 'dismissed') return;
        onChange(selectedDate || value || new Date());
    };
    
    return (
        <View>
            <View style={styles.formGroupTextInput}>
                <Text style={styles.formGroupLabel}>{formatTime(value)}</Text>
            </View>

            <TouchableOpacity
                onPress={() => setshow(s => !s)}
                style={[styles.buttonLarge, styles.primary, styles.center, { marginVertical: 8 }]}
            >
                <Text style={styles.buttonText}>{show ? "Hide Time" : "Select Time"}</Text>
            </TouchableOpacity>
            {
                show && (
                    <View style={styles.center}>
                        <DateTimePicker
                            value={value || new Date}
                            mode='time'
                            display='default'
                            is24Hour={true}
                            onChange={handleChange}
                        />
                    </View>
                )
            }
        </View>
    )
}

export default TimePickerInput