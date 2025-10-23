import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

// images
import fullLogo from '@/assets/images/full_logo.png';

// styles
import styles from '@/styles/styles';

// components


const Login = () => {

  // field accessories
  const [focusField, setfocusField] = useState(null);
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <View style={[{ paddingVertical: 24 }, styles.center, styles.whiteBackground]}>
          <Text style={[styles.subHeading, { marginBottom: 8 }]}>Welcome back!</Text>
          <Text style={styles.textGray}>Showcase your skills, grow your earnings ...</Text>
          <Image
            source={fullLogo}
            style={styles.loginBgImage}
            resizeMode='cover'
          />

        </View>
        <View style={[{ paddingVertical: 24 }, styles.authBackground]}>
          {/* <Error>The Error</Error> */}
          <Text style={[styles.subHeading,styles.textCenter,{fontSize:24,marginBottom:16}]}>Sign up your account</Text>
          <View style={styles.authFormContainer}>

            <View style={styles.formGroup}>
              <Text style={[styles.formGroupLabel, styles.textShadow]}>Email</Text>
              <TextInput
                style={[styles.formGroupTextInput, focusField === 'fullName' && styles.formGroupTextInputFocused]}
                placeholder='Your Full Name'
                placeholderTextColor='gray'
                autoCapitalize='words'
                autoCorrect={false}
                onFocus={() => setfocusField('fullName')}
                onBlur={() => setfocusField(null)}
                
              />
              {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}

            </View>
            <View style={styles.formGroup}>
              <Text style={[styles.formGroupLabel, styles.textShadow]}>Password </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.formGroupTextInput,
                    focusField === 'password' && styles.formGroupTextInputFocused,
                    styles.inputWithIcon
                  ]}
                  placeholder='**************'
                  placeholderTextColor='gray'
                  secureTextEntry={!isPasswordVisible}
                  autoCapitalize='words'
                  autoCorrect={false}
                  onFocus={() => setfocusField('password')}
                  onBlur={() => setfocusField(null)}
                
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => setisPasswordVisible(!isPasswordVisible)}
                >
                  <FontAwesome
                    name={isPasswordVisible ? 'eye' : 'eye-slash'}
                    size={18}
                    color='#969ba0'
                  />
                </TouchableOpacity>
              </View>
              {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
            </View>
            <Text style={[styles.textGray,{marginTop:16}]}>
              forgot password?{" "}
              <Link href='/(auth)/ForgotPassword'>
                <Text style={styles.textSecondary}> Click to Reset Your Password</Text>
              </Link>
            </Text>

            <View style={{ marginBottom: 10,marginTop:20 }}>
              <TouchableOpacity style={[styles.buttonLarge, styles.secondary]}>
                <Text style={styles.buttonText}> Login </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textGray}>
              Don't have an account?{" "}
              <Link href='/(auth)/Register'>
                <Text style={styles.textSecondary}> Sign up</Text>
              </Link>
            </Text>
            
          </View>
        </View>
        
      </ScrollView>
      
    </KeyboardAvoidingView>
  )
}

export default Login