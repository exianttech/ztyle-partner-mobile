import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

// styles
import styles from '@/styles/styles';


const Header = ({toggleNot}) => {
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
            <View style={styles.notificationDot} />
            {/* <Text style={styles.headerIconText}> Service</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header