import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

// styles
import styles from '@/styles/styles';


const DatePickerInput = ({
    value,
    onChange,
    minDate,
    maxDate,
    placeholder = 'Not set'
}) => {

    const [show, setshow] = useState(false);

    const handleChange = (event, selectedDate) => {
        if (Platform.OS !== 'ios') {
             setshow(false);
        }
        if (selectedDate) {
            onChange(selectedDate.toISOString().split('T')[0]) // Format: YYYY-MM-DD
        }

    }
    return (
        <View>
            <View style={styles.formGroupTextInput}>
                <Text style={styles.formGroupLabel}>{value || placeholder}</Text>
            </View>
            <TouchableOpacity
                onPress={() => setshow(!show)}
                style={[styles.buttonLarge, styles.secondary, styles.center, { marginVertical: 8 }]}
            >
                <Text style={styles.buttonText}>{!show ? "Select Date" : "Hide Date"}</Text>
            </TouchableOpacity>
            {
                show && (
                    <View style={styles.center}>
                        <DateTimePicker
                            value={value ? new Date(value) : new Date()}
                            mode='date'
                            display='default'
                            minimumDate={minDate}
                            maximumDate={maxDate} // optional: restrict future dates
                            onChange={handleChange}
                        />
                    </View>
                )
            }

        </View>
    )

}

export default DatePickerInput