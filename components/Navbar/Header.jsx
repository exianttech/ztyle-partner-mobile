import { View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

// styles
import styles from '@/styles/styles';

// actions
import { getNotifications } from '@/store/notification/notificationActions';



const Header = ({ toggleNot }) => {
  const dispatch = useDispatch();


  // profile redux 
  const { profile } = useSelector(state => state.profile);

  // notification
	useEffect(() => {
    if (profile) {
          dispatch(getNotifications({ id: profile._id }));
    }
        
  }, [dispatch, profile]);
  
  // notification redux
  const { notifications } = useSelector(state => state.notification);


  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity>
          <View style={styles.headerIconsole}>
            <FontAwesome6 name='comment-dots' size={24} />
            {/* <Text style={styles.headerIconText}> Service</Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.headerIconsole}>
            <FontAwesome name='heart-o' size={24} />
            {/* <Text style={styles.headerIconText}> Service</Text> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleNot}>
          <View style={styles.headerIconsole}>
            <FontAwesome name='bell-o' size={24} />
            {
              notifications ?
                notifications.readStatus === "unread" ?
                  <View style={styles.notificationDot} /> :
                  "" :
                ""
            }
            
            {/* <Text style={styles.headerIconText}> Service</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header