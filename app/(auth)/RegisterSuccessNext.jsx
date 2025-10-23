import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

// images
import ztyleSvg from '@/assets/images/ztyle_svg.png';

// styles
import styles from '@/styles/styles';


const RegisterSuccessNext = () => {
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
                <Text style={styles.subHeading}>Registration Success</Text>
              </View>
              <View style={styles.card}>
                  <View style={styles.cardBody}>
                      
                      <View style={styles.alertContainer}>
                          <View style={[styles.alert, styles.secondary]} >
                              <Text style={[styles.alertText, styles.textBold]} > Your Registration is successful</Text>
                              <Link href='/(auth)/LoginBeautician'>
                                  <Text style={styles.alertText}>please login again</Text>
                              </Link>                                                         
                          </View>
                      </View>
                  </View>
              </View>
              <Text style={[styles.textGray ,styles.textCenter]}>
                  please click to {" "}
                  <Link href='/(auth)/LoginBeautician'>
                      <Text style={styles.textSecondaryBeautician}> Log in</Text>
                  </Link>
              </Text>
          </View>
      </ScrollView>
    )
}

export default RegisterSuccessNext