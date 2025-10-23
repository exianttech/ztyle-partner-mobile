import React, { useState } from 'react';
import { View } from 'react-native';

// styles
import styles from '@/styles/styles';

// components
import Notifications from '../Notification/Notifications';
import Header from './Header';
import NavHader from './NavHader';
import UserInfo from './UserInfo';


const index = () => {

  // toggle
  const [showNot, setshowNot] = useState(false);
  const toggleNot = () => setshowNot(prev => !prev);


  return (
    <View>
      <View style={styles.navBarContainer}>
        <NavHader />
        <Header toggleNot={toggleNot} />
        <UserInfo />
      </View>
      {/* Dropdown Menu */}
      {
        
        showNot && (  
            <View
                style={styles.notDropMenu}    
            >
                <Notifications />
            </View>
                    
        )
      }
    </View>
    
  )
}

export default index