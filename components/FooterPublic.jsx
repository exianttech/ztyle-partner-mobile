import { Link } from 'expo-router';
import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';

// style
import styles from '@/styles/styles';


const FooterPublic = () => {
  var d = new Date();
  
  return (
    <View style={styles.footerContainer}>
      <View style={styles.copyright}>
        <Text
        >
          Copyright © {d.getFullYear()} Designed &amp; Developed by{" "} 
          
        </Text>
        <Text
          style={styles.copyrightComp}
          onPress={()=>Linking.openURL('http://exianttech.com/')}
        >
          Exiant Tech Private Limited
        </Text>  
        <Text>
          

        </Text>  

      </View>
      <View style={styles.footerLinkContainer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>
            <Link href='/'>privacy policy
            </Link>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>
            <Link href='/'>terms of use
            </Link>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>
            <Link href='/'>refund policy
            </Link>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>
            <Link href='/'>contact
            </Link>
          </Text>
        </TouchableOpacity>

      </View>
    </View>
    
  )
}

export default FooterPublic