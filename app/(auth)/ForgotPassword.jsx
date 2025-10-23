import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

// images
import ztyleSvg from '@/assets/images/ztyle_svg.png';

// styles 
import styles from '@/styles/styles';

// components

const ForgotPassword = () => {

  // field accessories
  const [focusField, setfocusField] = useState(null);
  

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <ScrollView
        contentContainerStyle={[{ flex: 1 }, styles.container, styles.center, styles.authBackground, { paddingHorizontal: 14 }]}
      >
        <View style={[styles.authContent, styles.whiteBackground, styles.shadow]}>
          <View style={styles.center}>
            <Image
              source={ztyleSvg}
              style={styles.authBgImage}
            />
            <Text style={styles.subHeading}>Sign up your account</Text>
          </View>
          {/* <Error>Error Text</Error> */}
          
          <View style={styles.authFormContainer}>
            <View style={styles.formGroup}>
              <Text style={[styles.formGroupLabel, styles.textShadow]}>Email </Text>
              <TextInput
                style={[styles.formGroupTextInput, focusField === 'email' && styles.formGroupTextInputFocused]}
                placeholder='hello@example.com'
                placeholderTextColor='gray'
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
                onFocus={() => setfocusField('email')}
                onBlur={() => setfocusField(null)}
                
              />
              {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
            </View>
            <View style={{ marginVertical: 40 }}>
              <TouchableOpacity style={[styles.buttonLarge, styles.secondary]}>
                <Text style={styles.buttonText}> Submit </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textGray}>
              Back To?{" "}
              <Link href='/(auth)/Login'>
                <Text style={styles.textSecondary}> Log in</Text>
              </Link>
            </Text>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}


export default ForgotPassword