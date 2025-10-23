import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

// images
import defaultProfilePic from '@/assets/images/avatar/defaultProfilePic.png';


// styles
import styles from '@/styles/styles';


const UserInfo = () => {
  const router = useRouter();

  // toggle 
  const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => setshowMenu(prev => !prev);

  return (
    <>
      <View>
        {/* Avatar */}
        <TouchableOpacity onPress={toggleMenu}>
          <Image
            source={defaultProfilePic}
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

                <TouchableOpacity style={styles.dropdownItem}>
                  <FontAwesome name="sign-out" size={16} color='#FF6746' />
                  <Text style={styles.dropdownText}>Logout</Text>
                </TouchableOpacity>

              </Pressable>
            </Pressable>
          )
        }
    </>
  )
}

export default UserInfo