import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

// images
import ztyleSvg from '@/assets/images/ztyle_svg.png';

// styles 
import styles from '@/styles/styles';

// components

const Register = () => {

  // field accessories
  const [focusField, setfocusField] = useState(null);
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  

  return (
      <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

          <ScrollView
              contentContainerStyle={[styles.container, styles.authBackground, { paddingHorizontal: 14 }]}
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
                          <Text style={[styles.formGroupLabel, styles.textShadow]}>Full Name </Text>
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
                          <Text style={[styles.formGroupLabel, styles.textShadow]}>Shop Id </Text>
                          <TextInput
                              style={[styles.formGroupTextInput, focusField === 'shopId' && styles.formGroupTextInputFocused]}                            
                              placeholder='Type Shop Id'
                              placeholderTextColor='gray'
                              autoCapitalize='words'
                              autoCorrect={false}
                              onFocus={() => setfocusField('shopId')}
                              onBlur={() => setfocusField(null)}
                          />
                          {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
                      </View>
                      <View style={styles.formGroup}>
                          <Text style={[styles.formGroupLabel, styles.textShadow]}>Mobile Number </Text>
                          <TextInput
                              style={[styles.formGroupTextInput, focusField === 'email' && styles.formGroupTextInputFocused]}                            
                              placeholder='Your Mobile Number'
                              placeholderTextColor='gray'
                              keyboardType='number-pad'
                              autoCorrect={false}
                              onFocus={() => setfocusField('fullName')}
                              onBlur={() => setfocusField(null)}
                          />
                          {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
                      </View>
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
                      <View style={{ marginVertical: 40 }}>
                          <TouchableOpacity style={[styles.buttonLarge, styles.secondary]}>                           
                              <Text style={styles.buttonText}> Sign me up </Text>                        
                          </TouchableOpacity>                         
                      </View>                      
                      <Text style={styles.textGray}>                         
                          Already have an account?{" "}                         
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


export default Register