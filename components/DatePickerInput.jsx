import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

// styles
import styles from '@/styles/styles';


const DatePickerInput = ({ dob, setdob }) => {

    const [show, setshow] = useState(false);

    const handleChange = (event, selectedDate) => {
        setshow(Platform.OS === 'ios' || Platform.OS === 'web') // Keep picker open on iO
        if (selectedDate) {
            setdob(selectedDate.toISOString().split('T')[0]) // Format: YYYY-MM-DD
        }

    }
    return (
        <View>
            <View style={styles.formGroupTextInput}>
                <Text style={styles.formGroupLabel}>{dob || 'Not set'}</Text>
            </View>
            <TouchableOpacity
                onPress={() => setshow(!show)}
                style={[styles.buttonLarge, styles.secondaryBeautician, styles.center, { marginVertical: 8 }]}
            >
                <Text style={styles.buttonText}>{!show ? "Select Date" : "Hide Date"}</Text>
            </TouchableOpacity>
            {
                show && (
                    <View style={styles.center}>
                        <DateTimePicker
                            value={dob ? new Date(dob) : new Date()}
                            mode='date'
                            display='default'
                            maximumDate={new Date()} // optional: restrict future dates
                            onChange={handleChange}
                        />
                    </View>
                )
            }
        </View>
    )

}

export default DatePickerInput