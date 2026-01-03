import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';


// images
import defaultProfilePic from '@/assets/images/avatar/defaultProfilePic.png';

// styles
import styles from '@/styles/styles';

// components
import Logout from '../Logout';

const UserInfo = () => {
  const router = useRouter();

  // toggle 
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => setshowMenu(prev => !prev);
  
  // header states
  const [profilePic, setprofilePic] = useState(defaultProfilePic);

  // redux states
  const { profile } = useSelector(state => state.profile);
  
  // profile pic

  useEffect(() => {
    
    if (profile && profile.profilePic) {
      setprofilePic({ uri: profile.profilePic })
    }
    else {
      setprofilePic(defaultProfilePic)
    }
  
  }, [profile]);


  
  return (
    <>
      <View>
        {/* Avatar */}
        <TouchableOpacity onPress={toggleMenu}>
          <Image
            source={profilePic}
            onError={() => setprofilePic(defaultProfilePic)}
            style={styles.avatar}
            resizeMode='cover'
          />
        </TouchableOpacity>
      </View>
      {/* Dropdown Menu */}
      {
        showMenu && (
          <Pressable
            style={styles.overlay}
            onPress={() => setshowMenu(false)}
          >
            <Pressable
              style={styles.dropdownMenu}
              onPress={(e) => e.stopPropagation()}
            >
              <TouchableOpacity
                style={styles.dropdownItem}            
                onPress={() => router.push('/(screens)/BeauticianProfile')}           
              >
                <FontAwesome name='user' size={16} color='#17a2b8' />
                <Text style={styles.dropdownText}>Profile</Text>
              </TouchableOpacity>

                <TouchableOpacity style={styles.dropdownItem}>
                <FontAwesome name="inbox" size={16} color="black" />
                <Text style={styles.dropdownText}>Inbox</Text>
              </TouchableOpacity>           
              <Logout />
            </Pressable>
          </Pressable>
          )
        }
    </>
  )
}

export default UserInfo