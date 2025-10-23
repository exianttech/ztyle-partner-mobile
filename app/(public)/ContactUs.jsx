import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';


// styles
import styles from '@/styles/styles';

// images
import contactimg from '@/assets/images/pages/contactimg.png';

// components
import FooterPublic from '@/components/FooterPublic';

const ContactUs = () => {
  return (
    <ScrollView style={styles.container}>
     <View style={styles.contentBody}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.card}>
              <View style={styles.cardBody}>
                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <Text style={[styles.cardBodyHeading, styles.textSecondary]}>Our Contact Detail</Text>
                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>
                      <FontAwesome name='map-marker' size={20} /> {" "}
                      Address
                    </Text>
                    <Text style={styles.cardBodyText} >
                      ZTYLE PRIVATE LIMITED {"\n"}
                      Building No 5.339, ISRO QTRS Road, {"\n"}
                      Erumathala P.O Aluva, Ernakulam, {"\n"}                    
                      Kerala, India, 683112                       
                    </Text>
                     <Text style={[styles.cardBodySubHeading, styles.textInfo]}>
                      <FontAwesome name='envelope' size={20} /> {" "}
                      email
                    </Text>
                    <Text style={styles.cardBodyText}>
                      info@ztyle.com
                    </Text>
                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>
                      <FontAwesome name='phone' size={20} /> {" "}
                      Phone
                    </Text>
                    <Text style={styles.cardBodyText}>
                      +91 484 2837374
                    </Text>
                  </View>
                </View>

                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <Image
                      source={contactimg}
                      style={styles.imageFluid}
                      resizeMode='cover'
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      
      <FooterPublic />
    </ScrollView>
  )
}

export default ContactUs