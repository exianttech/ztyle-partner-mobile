import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

// images
import ztyleSvg from '@/assets/images/ztyle_svg.png';

// styles
import styles from '@/styles/styles';


const PasswordMailsendStatus = () => {
  return (
      <ScrollView
          contentContainerStyle={[{ flex: 1 }, styles.container, styles.center, styles.authBackground, { paddingHorizontal: 14 }]}
      >
          <View style={[styles.authContent, styles.whiteBackground, styles.shadow]}>
              <View style={styles.center}>
                   <Image
                      source={ztyleSvg}
                      style={styles.authBgImage}
                  />
                <Text style={styles.subHeading}>Request Succeess</Text>
              </View>
              <View style={styles.card}>
                  <View style={styles.cardBody}>
                      
                      <View style={styles.alertContainer}>
                          <View style={[styles.alert, styles.secondary]} >
                              <Text style={[styles.alertText, styles.textBold]} >  Check Your e-mail for the reset link</Text>
                             
                                  <Text style={styles.alertText}>or check your spam mail</Text>
                                                                                    
                          </View>
                      </View>
                  </View>
              </View>
          </View>
      </ScrollView>
    )
}

export default PasswordMailsendStatus