import React from 'react';
import { Text, View } from 'react-native';

// data
import { bookingData } from '@/data/bookingData';

// styles
import styles from '@/styles/styles';

// components
import SingleBooking from './SingleBooking';


const LatestBookings = () => {
  
  return (
    <View
      style={{ paddingVertical: 16 }}
    >
      {
        1 ? // replace with redux/backend 
        bookingData.map((book, idx) => (
          <SingleBooking key={idx} book={book} />
        ))
          :
          <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Bookings For Now</Text>
      }
    </View>
  )
}

export default LatestBookings