import React from 'react';
import { Text, View } from 'react-native';

// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/styles';

// utils 
import getInitials from '@/utils/getInitials';
import getStandardTime from '@/utils/getStandardTime';


const SingleBooking = ({ book }) => {
  
   // access slit date
  const date = new Date(book.bookDate);
  const Day = date.getDate();
  const Month = date.getMonth();
  const Year = date.getFullYear();

  // manage time
  const stdStart = getStandardTime(book.slot.start);
  const stdEnd = getStandardTime(book.slot.end);
  
  // initials
  const initials = getInitials(book.userFullName);
  

  return (
    <View style={styles.smallListCardContainer}>
      <View style={[styles.squareInitials, styles.mediaSecondary, { marginHorizontal: 12 }]}>
        <Text style={[styles.notInitialsText, styles.textSecondary]}>{initials}</Text>
      </View>
      <View style={styles.listCardContent}>
        <Text style={styles.listCardTitle}>Service : {book.service}</Text>
        <Text style={styles.listCardDate}>{Day}{" "}{monthdata[Month]}{" "},{" "} {Year} {" "}  </Text>
        <Text style={styles.textInfo}>From: {stdStart} To : {stdEnd}</Text>
      </View>
      
    </View>
  )
}

export default SingleBooking