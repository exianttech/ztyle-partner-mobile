import { ScrollView, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// styles
import styles from '@/styles/styles';

// components
import SingleNotification from './SingleNotification';

// actions
import { readNotifications } from '@/store/notification/notificationActions';


const Notifications = () => {
  const dispatch = useDispatch();

  // profile redux
  const { profile } = useSelector(state => state.profile);

  useEffect(() => {
    if (profile) {
      dispatch(readNotifications({ id: profile._id }))
    }
  }, [dispatch, profile]);

  // notification redux 
  const { notifications } = useSelector(state => state.notification);
  
  return (
      <ScrollView
        style={styles.notContainer}
        contentContainerStyle={{ paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {
        notifications ? // replace with notification redux state
          notifications?.notifications?.map((not, idx) => (
              <SingleNotification key={idx} not={not} />
            ))
            : <Text style={[styles.textCenter, styles.textBold]}>No New Notifications</Text>
          
        }
        
      </ScrollView>    
    )
}

export default Notifications