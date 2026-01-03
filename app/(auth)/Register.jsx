import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';



// images
import ztyleSvg from '@/assets/images/ztyle_svg.png';

// styles 
import styles from '@/styles/styles';

// components
import Error from '@/components/Error';
import EmailValidator from '@/components/EmailValidator';
import Spinner from '@/components/SpinnerWhite';

// actions
import {
    registerBeautician,
    getShopIds
} from '@/store/auth/authActions';


const Register = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShopIds({ type: 'beautician' }))
    }, [dispatch]);

    // redux states
    const { shopIds, loading, success, error } = useSelector(state => state.auth);
    
    // error object for validation
    let errorsObj = { fullName: '', shopId: '', mobile: '', email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [dispError, setdispError] = useState('');

    // field accessories
    const [focusField, setfocusField] = useState(null);
    const [isPasswordVisible, setisPasswordVisible] = useState(false);
    const [filteredIds, setfilteredIds] = useState([]);
    const [showList, setshowList] = useState(false);


    // fields
    const [fullName, setfullName] = useState('');
    const [shopId, setshopId] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
  

    const handleShopIdChange = (text) => {
        setshopId(text)

        if (text.length > 0) {
            const filtered = shopIds?.filter((id) =>
                id.toLowerCase().includes(text.toLowerCase())
            )
            setfilteredIds(filtered)
            setshowList(true)
        }
        else {
            setshowList(false)
        }

    }

    const handleSelectShopId = (id) => {
        setshopId(id)
        setshowList(false)
    }
    
    const handleRegister = () => {
        // front end validation
        let error = false;
        const errorObj = { ...errorsObj };
        if (fullName === '') {
            errorObj.fullName = 'Full Name is Required'
            error = true;
        }
        if (shopId === '') {
            errorObj.shopId = 'Shop Id is Required'
            error = true;
        }
        if (mobile === '') {
            errorObj.mobile = 'Mobile No is Required'
            error = true;
        }
        if (email === '') {
            errorObj.email = 'email id is Required'
            error = true;
        }
        if (email && !EmailValidator(email)) {
            errorObj.email = "Invalid email format";
            error = true
        }
        if (password === '') {
            errorObj.password = 'Password is Required'
            error = true;
        }
        if (password && password.length < 8) {
			errorObj.password = 'Password requires minimum of 8 characters';
            error = true;
        }

        setErrors(errorObj)
        if (error) {
            return;
        }
        const data = { fullName, shopId, mobile, email, password };

        dispatch(registerBeautician(data));
        
    }

    useEffect(() => {
        if (error) {
            showMessage({
                message: error,
                type:'danger'
            })
        }
        if (success && !error) {
            showMessage({
                message: "Registration Success",
                type: 'success'

            })
            router.push('/(tabs)/Dashboard')
        }
    }, [error, router, success]);
    

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
                        <View style={styles.dividerContainer}>
                            <View style={styles.line} />
                            <Text style={[styles.subHeading, styles.textCenter, { color: '#777' }, styles.textShadow]}>Sign up your account</Text>
                            <View style={styles.line} />
                        </View>
                    </View>
                    <Error>{error}</Error>

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
                                value={fullName}
                                onChangeText={setfullName}
                            />
                            {errors.fullName && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.fullName}</Text>}  
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={[styles.formGroupLabel, styles.textShadow]}>Shop Id </Text>
                            <View style={{ position: 'relative' }}>
                                <TextInput
                                    style={[styles.formGroupTextInput, focusField === 'shopId' && styles.formGroupTextInputFocused]}                            
                                    placeholder='Type Shop Id'
                                    placeholderTextColor='gray'
                                    autoCapitalize='words'
                                    autoCorrect={false}
                                    onFocus={() => setfocusField('shopId')}
                                    onBlur={() => setfocusField(null)}
                                    value={shopId}
                                    onChangeText={handleShopIdChange}
                                />
                                

                                {errors.shopId && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.shopId}</Text>}  
                                {
                                    showList && filteredIds.length > 0 && (
                                        <View style={styles.dataListContainer}>
                                            <ScrollView>
                                                {
                                                    filteredIds?.map((item) => (
                                                        <TouchableOpacity
                                                            key={item}
                                                            onPress={() => handleSelectShopId(item)}
                                                            style={styles.dataListItem}
                                                        >
                                                            <Text>{item}</Text>
                                                        </TouchableOpacity>
                                                    ))
                                                }
                                            </ScrollView>
                                        </View>
                                    )
                                }
                                
                            </View>                   
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={[styles.formGroupLabel, styles.textShadow]}>Mobile Number </Text>
                            <TextInput
                                style={[styles.formGroupTextInput, focusField === 'mobile' && styles.formGroupTextInputFocused]}                            
                                placeholder='Your Mobile Number'
                                placeholderTextColor='gray'
                                keyboardType='number-pad'
                                autoCorrect={false}
                                onFocus={() => setfocusField('fullName')}
                                onBlur={() => setfocusField(null)}
                                value={mobile}
                                onChangeText={setmobile}
                            />
                            {errors.mobile && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.mobile}</Text>}  
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
                        <View style={{ marginVertical: 40 }}>
                            <TouchableOpacity
                                style={[styles.buttonLarge, styles.secondary]}
                                onPress={handleRegister}
                            >      
                                {
                                    loading?
                                        <Spinner /> :
                                        <Text style={styles.buttonText}> Sign me up </Text> 
                                }       
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