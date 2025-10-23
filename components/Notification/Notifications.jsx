import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';

// data
import { notificationsData } from '@/data/notificationsData';

// styles
import styles from '@/styles/styles';

// components
import SingleNotification from './SingleNotification';

const Notifications = () => {
  const [notifications, setnotifications] = useState(notificationsData)
  

  return (
      <ScrollView
        style={styles.notContainer}
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {
      
          1 ? // replace with notification redux state
            notifications.map((not, idx) => (
              <SingleNotification key={idx} not={not} />
            ))
            : <Text style={[styles.textCenter, styles.textBold]}>No New Notifications</Text>
          
        }
        
      </ScrollView>    
    )
}

export default Notifications