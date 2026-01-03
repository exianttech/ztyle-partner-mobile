import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState,useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// images
import ztyleSvg from '@/assets/images/ztyle_svg.png';

// styles 
import styles from '@/styles/styles';

// components
import Error from '@/components/Error';
import Spinner from '@/components/SpinnerWhite';
import EmailValidator from '@/components/EmailValidator';

// actions
import { requestResetPassword } from '@/store/auth/authActions';


const ForgotPassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // redux states
  const { loading, message, error } = useSelector(state => state.auth);

  // console.log(loading, message, error);


  // field accessories
  const [focusField, setfocusField] = useState(null);
  
  // field states
  const [email, setemail] = useState('');

  // error field for validation
  let errorsObj = { email: '' };
  const [errors, setErrors] = useState(errorsObj);

  const handleSubmit = () => {
    // front end validation
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === '') {
      errorObj.email = "email is required";
      error =true
    }
    if (email && !EmailValidator(email)) {
      errorObj.email = "Invalid email format";
      error =true
    }
    setErrors(errorObj)
    if (error) {
      return;
    }
    const data = { email };
    dispatch(requestResetPassword(data));

  }

  useEffect(() => {
    if (error) {
      showMessage({
        message: error,
        type: 'danger'
      })
    }
    if (message === "success") {
      showMessage({
        message: "Request to reset password is success",
        type: 'success'
      })
      router.push('/(auth)/PasswordMailsendStatus')
    }
  }, [error, message, router]);
  

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
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={[styles.subHeading, styles.textCenter, { color: '#777' }, styles.textShadow]}>Reset your password</Text>
              <View style={styles.line} />
            </View>
            
          </View>
          <Error>{error}</Error>
          
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
                value={email}
                onChangeText={setemail}
              />

              {errors.email && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.email}</Text>}
            </View>
            <View style={{ marginVertical: 40 }}>
              <TouchableOpacity
                style={[styles.buttonLarge, styles.secondary]}
                onPress={handleSubmit}
              >
                {
                  loading ?
                    <Spinner />
                    :
                    <Text style={styles.buttonText}> Submit </Text>
                }
                
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