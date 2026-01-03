import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';


// images
import fullLogo from '@/assets/images/full_logo.png';

// styles
import styles from '@/styles/styles';

// components
import Error from '@/components/Error';
import Spinner from '@/components/SpinnerWhite';
import EmailValidator from '@/components/EmailValidator';

// actions
import { beauticianLogin } from '@/store/auth/authActions';


const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // redux states
  const { loading, beauticianInfo, error } = useSelector(state => state.auth);

  // field accessories
  const [focusField, setfocusField] = useState(null);
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

   // fields
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  // error field for validation
  let errorsObj = { email: '', password: '' };
  const [errors, setErrors] = useState(errorsObj);

  const handleLogin = () => {
     // front end validation
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === '') {
      errorObj.email = "email is required";
      error =true
    }
    if (password === '') {
      errorObj.password = "Password is required";
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
    const data = { email, password };
    dispatch(beauticianLogin(data));
  }

  useEffect(() => {
    if (beauticianInfo) {
      showMessage({
        message: "You Are Now Logged In",
        type: 'info'
      })
      router.push('/(tabs)/Dashboard')
    }
  }, [beauticianInfo, router]);
  

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
          <Error>{error}</Error>
          <View style={styles.dividerContainer}>
            <View style={styles.whiteLine} />
            <Text style={[styles.subHeading, styles.textCenter, { color: '#fff' }]}>Login to your account</Text>
            <View style={styles.whiteLine} />
          </View>

          <View style={styles.authFormContainer}>

            <View style={styles.formGroup}>
              <Text style={[styles.formGroupLabel, styles.textShadow]}>Email</Text>
             <TextInput
                style={[styles.formGroupTextInput, focusField === 'email' && styles.formGroupTextInputFocused]}
                placeholder='Enter Registered email'
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
                  value={password}
                  onChangeText={setpassword}
                
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
              {errors.password && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.password}</Text>}
            </View>
            <Text style={[styles.textGray,{marginTop:16}]}>
              forgot password?{" "}
              <Link href='/(auth)/ForgotPassword'>
                <Text style={styles.textSecondary}> Click to Reset Your Password</Text>
              </Link>
            </Text>

            <View style={{ marginBottom: 10,marginTop:20 }}>
              <TouchableOpacity
                style={[styles.buttonLarge, styles.secondary]}
                onPress={handleLogin}
              >
                {
                  loading ? <Spinner />
                    :
                    <Text style={styles.buttonText}> Login </Text>
                }
                
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