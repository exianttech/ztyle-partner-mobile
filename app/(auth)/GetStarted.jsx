import { Text, View, ScrollView, KeyboardAvoidingView, Platform, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// styles
import styles from '@/styles/styles';

// images
import ztyleSvg from '@/assets/images/ztyle_svg.png';


const GetStarted = () => {

  const router = useRouter();


  // field accessories
  const [focusField, setfocusField] = useState(null);
  

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={[{ flex: 1 }, styles.container, styles.center,styles.authBackground,{ paddingHorizontal: 14 }]}
      >
        <View
          style={[styles.authContent, styles.whiteBackground, styles.shadow,{marginBottom:16}]}
        >
          <View style={[styles.center, { minWidth:250}]}>
            <Image
              source={ztyleSvg}
              style={styles.authBgImage}
            />
          </View>
        </View>
        <View style={[styles.authContent, styles.whiteBackground, styles.shadow]}>
          <Text style={[styles.cardBodyHeading, styles.textCenter,styles.textSecondary]}>Your All-in-One Beauty & Salon Booking App.</Text>
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={[styles.subHeading, styles.textCenter,{color:'#777'},styles.textShadow]}>Login Or Sign up</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.authFormContainer}>
            <View style={styles.formGroup}>
              <Text style={[styles.formGroupLabel, styles.textShadow]}>Mobile No </Text>
              <TextInput
                style={[styles.formGroupTextInput, focusField === 'mobile' && styles.formGroupTextInputFocused]}
                placeholder='Enter Mobile Number'
                placeholderTextColor='gray'
                keyboardType='name-phone-pad'
                autoCorrect={false}
                onFocus={() => setfocusField('mobile')}
                onBlur={() => setfocusField(null)}
                
              />
              {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
              <TouchableOpacity style={[styles.buttonLarge, styles.secondary, { marginTop: 16 }]}>
                <Text style={styles.buttonText}> Continue </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={[styles.subHeading, styles.textCenter,{color:'#777'},styles.textShadow]}>Or</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.serialRow}>
            <View style={styles.headerContainer}>
              <View style={styles.headerIconContainer}>
                {/* Google */}
                <TouchableOpacity>
                  <View style={[styles.headerIconsole,{marginHorizontal:10}]}>
                    <AntDesign name='google' size={26} color="#DB4437" />
                  </View>
                </TouchableOpacity>
                {/* Apple or Android equivalent */}
                {
                  Platform.OS === 'ios' ? (
                    <TouchableOpacity>
                      <View style={[styles.headerIconsole,{marginHorizontal:10}]}>
                        <AntDesign name='apple' size={26} color="#000" />
                      </View>
                    </TouchableOpacity>
                  ) :
                    (
                      <TouchableOpacity >
                        <View style={[styles.headerIconsole,{marginHorizontal:10}]}>
                          <MaterialIcons name="android" size={26} color="#3DDC84" />  
                        </View>
                      </TouchableOpacity>
                      
                  )
                }
                {/* Email */}
                <TouchableOpacity
                  onPress={() => router.push('/(auth)/Register')}
                >
                  <View style={styles.headerIconsole}>
                    <FontAwesome name="envelope" size={26} color="#555" />
                  </View>
                </TouchableOpacity>
              </View>
            </View> 
          </View>
        </View>
        
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default GetStarted