import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

// data
import { monthdata } from '@/data/monthData';

// utils
import getInitials from '@/utils/getInitials';
import getStandardTime from '@/utils/getStandardTime';

// styles
import styles from '@/styles/styles';


const SingleNotification = ({ not }) => {

  // style states
  const [initBgStyle, setinitBgStyle] = useState('');
  const [initTextStyle, setinitTextStyle] = useState('');


  // initials from name
  const initials = getInitials(not.senderName);

  // notification date
  const createdAt = not.createdAt;

  // access slit date
  const date = new Date(createdAt);
  const Day = date.getDate();
  const Month = date.getMonth();
  const Year = date.getFullYear();

  // access time from date 
  let result = createdAt.match(/\d\d:\d\d/);  
  const time = getStandardTime(result[0]);

  useEffect(() => {
    if (not.notificationType === "secondary") {
      setinitBgStyle(styles.mediaSecondary)
      setinitTextStyle(styles.textSecondary)
    }
    else if (not.notificationType === "info") {
      setinitBgStyle(styles.mediaInfo)
      setinitTextStyle(styles.textInfo)
    }
    else if (not.notificationType === "success") {
      setinitBgStyle(styles.mediaSuccess)
      setinitTextStyle(styles.textSuccess)
    }
    else if (not.notificationType === "warning") {
      setinitBgStyle(styles.mediaWarning)
      setinitTextStyle(styles.textWarning)
    }
    else if (not.notificationType === "danger") {
      setinitBgStyle(styles.mediaDanger)
      setinitTextStyle(styles.textDanger)
    }


  }, [not.notificationType]);

  return (
    <View style={styles.singleNotContainer}>
      <View style={[styles.notInitials, initBgStyle]}>
        <Text style={[styles.notInitialsText, initTextStyle]}>{initials}</Text>
      </View>
      <View style={styles.notContent}>
        <Text style={styles.notMessage}>{not.message}</Text>
        <Text style={styles.notTime}>{Day}{" "}{monthdata[Month]} {" "} {Year} - {time}</Text>
      </View>
    </View>
  )

}


export default SingleNotification