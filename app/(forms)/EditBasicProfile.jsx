import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useMemo, useState, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Checkbox from 'expo-checkbox';
import { Dropdown } from 'react-native-element-dropdown';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { useRouter, Link } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';


// data
import { languagedata } from '@/data/langualgeData';
import { weekdata } from '@/data/weekData';

// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SpinnerWhite from '@/components/SpinnerWhite';
import DatePickerInput from '@/components/DatePickerInput';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';

// actions
import {
  getProfile,
  updateProfile
} from '@/store/profile/profileActions';



const EditBasicProfile = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // auth redux states
    const { beauticianInfo } = useSelector(state => state.auth);
    
    // access your profile
    useEffect(() => {
        if (beauticianInfo?.email) {
        dispatch(getProfile({ email: beauticianInfo.email }))
        }
    }, [beauticianInfo, dispatch]);
    
    // profile redux states
    const { loading, profile, error, success } = useSelector(state => state.profile);
    // console.log(loading, profile, error, success);


    // error object for validation
    let errorsObj = { fullName: '', shopId: '', mobile: '', email: '', gender: '', dob: '', position: '', specialty: '', yearsOfExperience: '', employmentStatus: '', holidaySchedule: '', languagesSpoken: '' };
    const [errors, seterrors] = useState({});
        
    
    // fields
    const [id, setid] = useState('');
    const [fullName, setfullName] = useState('');
    const [shopId, setshopId] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('');
    const [dob, setdob] = useState('');
    const [position, setposition] = useState('');
    const [specialty, setspecialty] = useState('');
    const [yearsOfExperience, setyearsOfExperience] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [holidaySchedule, setholidaySchedule] = useState(weekdata);
    const [languagesSpoken, setlanguagesSpoken] = useState(languagedata);
    
    // set beautician details  
    useEffect(() => {
        if (beauticianInfo) {
            setfullName(beauticianInfo.fullName);
            setshopId(beauticianInfo.shopId);
            setemail(beauticianInfo.email);
            setmobile(beauticianInfo.mobile);
        }

    }, [beauticianInfo]);
    // set profile details
    useEffect(() => {
        if (profile) {
            setid(profile._id)
            setgender(profile.gender)
            setdob(profile?.dob ? profile.dob.split('T')[0] : '')
            setposition(profile.position)
            setspecialty(profile.specialty)
            setyearsOfExperience(profile.yearsOfExperience.toString())
            setEmploymentStatus(profile.employmentStatus)
            setholidaySchedule(profile.holidaySchedule)
            setlanguagesSpoken(profile.languagesSpoken)

        }
    }, [profile]);

        
    // field accessories
    const [focusField, setfocusField] = useState(null);

    // values rendered in radio for gender
        const baseradioButtonsGender = useMemo(() => ([
            {

                id: "male",
                label: 'Male',
            },
            {
                id: "female",
                label: 'Female',
            },

        ]), []);

        // derive active/inactive styles based on selected gender
        const radioButtonsGender = useMemo(() => (
            baseradioButtonsGender.map((btn) => ({
                ...btn,
                color: btn.id === gender ? 'black' : '#999',
                labelStyle: {
                    color: btn.id === gender ? 'black' : '#999',
                    fontWeight: btn.id === gender ? 'bold' : '#999'
                }
            }))
        ), [gender]);
    
    // data for inputs
    const empStatData = [
        { label: "Self Employed", value: "Self Employed" },
        { label: "Full Time Employee", value: "Full Time Employee" },
        { label: "Part Time Employee", value: "Part Time Employee" },
        { label: "Others", value: "Others" },
    ];

    // handlers adaptible for mongoDB objects
    const holidayScheduleHandler = (index) => { 
        setholidaySchedule(
            holidaySchedule.map((day, currentIndex) =>
                currentIndex === index ?
                    { ...day, checked: !day.checked } :
                    day
            )
        )
    }

    const languagesSpokenHandler = (index) => { 
        setlanguagesSpoken(
            languagesSpoken.map((lan, currentIndex) =>
                currentIndex === index ?
                    { ...lan, checked: !lan.checked } :
                    lan
            )
        )
    }
    

    const handleSubmit = () => {
        let error = false;
        const errorObj = { ...errorsObj };
            
        if (fullName === '') {
        errorObj.fullName = 'Your Full Name is Required';
        error = true;
        }
        if (shopId === '') {
        errorObj.shopId = 'Shop Id is Required';
        error = true;
        }
        if (mobile === '') {
        errorObj.mobile = 'Mobile Number is Required';
        error = true;
        }
        if (email === '') {
        errorObj.email = 'email Id is Required';
        error = true;
        }
        if (gender === '') {
        errorObj.gender = 'Gender is Required';
        error = true;
        }
        if (dob === '') {
        errorObj.dob = 'Date of Birth is Required';
        error = true;
        }
        if (position === '') {
        errorObj.position = 'Your Position is Required';
        error = true;
        }
        if (specialty === '') {
        errorObj.specialty = 'Your Specialty is Required';
        error = true;
        }
        if (yearsOfExperience === '') {
        errorObj.yearsOfExperience = 'Your Experience is Required';
        error = true;
        }
        if (employmentStatus === '') {
        errorObj.employmentStatus = 'Employment Status is Required';
        error = true;
        }

        const isHolidaySelected = holidaySchedule.some(day => day.checked)
        if (!isHolidaySelected) {
        errorObj.holidaySchedule = 'Please Select At Least One Holiday';
        error = true;
        }

        const isLanguageSelected = languagesSpoken.some(lan => lan.checked)
        if (!isLanguageSelected) {
        errorObj.languagesSpoken = 'At Least One Language is Required';
        error = true;
        }

        seterrors(errorObj);

        if (error) {
        return
        }

        const profileData = {
            id, fullName, shopId, mobile, email, gender, dob, position, specialty, yearsOfExperience: Number(yearsOfExperience),
            employmentStatus: typeof employmentStatus === 'string' ? employmentStatus : employmentStatus.value,
            holidaySchedule, languagesSpoken
        }

        dispatch(updateProfile({ profileData }))
        
    }
    useEffect(() => {
        if (success) {
        showMessage({
            message: "Profile Edited Successfuly",
            type: 'info'
        })
        router.push('/(screens)/BeauticianProfile')
        }
        if (error) {
        showMessage({
            message: error || 'An error occured',
            type: 'danger'
        })
        }
    }, [error, router, success]);


    if (!beauticianInfo) {
        return (
        <View
            style={[styles.container, { flex: 1 }]}
            contentContainerStyle={styles.center}
        >
            <Spinner />
        </View>
        )
    }
    
    else if (profile) {
        
        return (
        <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView
            style={[{ flex: 1 }, styles.container]}
            contentContainerStyle={{ paddingBottom: 8 }}
            extraScrollHeight={50} // pushes input above keyboard
            enableOnAndroid={true}
            >
            <PageTitle activeMenu="Basic" motherMenu="Profile" />
            <View style={styles.row}>
                <View style={styles.column}>
                <View style={styles.cardShadow}>
                    <View style={styles.cardHeader}>
                    <Text style={styles.cardBodyHeading}>Please Enter Following Details</Text>
                    </View>
                    <View style={styles.cardBody}>
                    {/* section*/}
                    <View style={{ marginBottom: 8 }}>
                        <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Personal Information </Text>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Full Name <Text style={styles.textDanger}>*</Text></Text>
                        <TextInput
                        style={[styles.formGroupTextInput, focusField === 'fullName' && styles.formGroupTextInputFocused]}
                        placeholder='Enter your Full Name..'
                        placeholderTextColor="#999"
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
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Shop Id <Text style={styles.textDanger}>*</Text></Text>
                        <TextInput
                        style={[styles.formGroupTextInput, focusField === 'shopId' && styles.formGroupTextInputFocused]}
                        placeholder='Shop Id Of Your Shop ..'
                        placeholderTextColor="#999"
                        autoCapitalize='words'
                        autoCorrect={false}
                        onFocus={() => setfocusField('shopId')}
                        onBlur={() => setfocusField(null)}
                        value={shopId}
                        onChangeText={setshopId}
                        />
                        {errors.shopId && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.shopId}</Text>}
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Mobile Number<Text style={styles.textDanger}>*</Text></Text>
                        <TextInput
                        placeholder='enter your phone number'
                        placeholderTextColor="#999"
                        style={[styles.formGroupTextInput, focusField === 'mobile' && styles.formGroupTextInputFocused]}
                        keyboardType='phone-pad'
                        onFocus={() => setfocusField('mobile')}
                        onBlur={() => setfocusField(null)}
                        value={mobile}
                        onChangeText={setmobile}
                        />
                        {errors.mobile && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.mobile}</Text>}
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>email Id<Text style={styles.textDanger}>*</Text></Text>
                        <TextInput
                        style={[styles.formGroupTextInput, focusField === 'email' && styles.formGroupTextInputFocused]}
                        placeholder='Enter a Valid email Id..'
                        placeholderTextColor="#999"
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address'
                        onFocus={() => setfocusField('email')}
                        onBlur={() => setfocusField(null)}
                        value={email}
                        onChangeText={setemail}
                        />
                        {errors.email && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.email}</Text>}
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Gender<Text style={styles.textDanger}>*</Text></Text>
                        <RadioGroup
                        radioButtons={radioButtonsGender}
                        onPress={setgender}
                        selectedId={gender}
                        layout='row'
                        />
                        {errors.gender && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.gender}</Text>}
                    </View>
                    <View style={[styles.formGroup, { marginBottom: 16 }]}>
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Date Of Birth<Text style={styles.textDanger}>*</Text></Text>
                            <DatePickerInput
                                value={dob}
                                onChange={setdob}
                                maxDate={new Date()}            
                            />
                        {errors.dob && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.dob}</Text>}
                    </View>
                    {/* section*/}
                    <View style={{ marginBottom: 8 }}>
                        <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Basic Info</Text>
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Position <Text style={styles.textDanger}>*</Text></Text>
                        <TextInput
                        style={[styles.formGroupTextInput, focusField === 'position' && styles.formGroupTextInputFocused]}
                        placeholder='Stylist,Hair Dresser,Barber etc'
                        placeholderTextColor="#999"
                        autoCapitalize='words'
                        autoCorrect={false}
                        onFocus={() => setfocusField('position')}
                        onBlur={() => setfocusField(null)}
                        value={position}
                        onChangeText={setposition}
                        />
                        {errors.position && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.position}</Text>}
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Specialty <Text style={styles.textDanger}>*</Text></Text>
                        <TextInput
                        style={[styles.formGroupTextInput, focusField === 'specialty' && styles.formGroupTextInputFocused]}
                        placeholder='Salon Services, Make Up, Nail Services etc'
                        placeholderTextColor="#999"
                        autoCapitalize='words'
                        autoCorrect={false}
                        onFocus={() => setfocusField('specialty')}
                        onBlur={() => setfocusField(null)}
                        value={specialty}
                        onChangeText={setspecialty}
                        />
                    
                        {errors.specialty && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.specialty}</Text>}
                    
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Experience In Years <Text style={styles.textDanger}>*</Text></Text>
                        <TextInput
                        style={[styles.formGroupTextInput, focusField === 'yearsOfExperience' && styles.formGroupTextInputFocused]}
                        placeholder='Enter Your Experience In Years'
                        placeholderTextColor="#999"
                        keyboardType='number-pad'
                        onFocus={() => setfocusField('yearsOfExperience')}
                        onBlur={() => setfocusField(null)}
                        value={yearsOfExperience}
                        onChangeText={setyearsOfExperience}
                        />
                    
                        {errors.yearsOfExperience&& <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.yearsOfExperience}</Text>}
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow]}>Employment Status <Text style={styles.textDanger}>*</Text></Text>
                        <Dropdown
                        style={styles.formGroupTextInput}
                        data={empStatData}
                        labelField="label"
                        valueField="value"
                        placeholder='Please Select'
                        placeholderStyle={styles.textGray}
                        selectedTextStyle={styles.textGray}
                        value={employmentStatus}
                        onChange={(item) => setEmploymentStatus(item)}
                        />
                    
                        {errors.employmentStatus && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.employmentStatus}</Text>}
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow, { marginBottom: 8 }]}>Holiday Schedule <Text style={styles.textDanger}>*</Text></Text>
                        {
                        holidaySchedule.map((day, idx) => (
                            <View
                            key={idx}
                            style={styles.checkboxContainer}
                            >
                            <Checkbox
                                value={day.checked}
                                onValueChange={() => holidayScheduleHandler(idx)}
                                color={day.checked ? "#17a2b8" : "#999"} // brand color when checked
                            />
                            <Text style={styles.checkboxLabel}>{day.name}</Text>
                            
                            </View>
                        ))
                        }
                        {errors.holidaySchedule && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.holidaySchedule}</Text>}
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.formGroupLabel, styles.textShadow, { marginBottom: 8 }]}>Languages Known <Text style={styles.textDanger}>*</Text></Text>
                        {
                        languagesSpoken.map((language, idx) => (
                            <View
                            key={idx}
                            style={styles.checkboxContainer}
                            >
                            <Checkbox
                                value={language.checked}
                                onValueChange={() => languagesSpokenHandler(idx)}
                                color={language.checked ? "#17a2b8" : "#999"} // brand color when checked
                            />
                            <Text style={styles.checkboxLabel}>{language.name}</Text>
                            
                            </View>
                        ))
                        }
                        {errors.languagesSpoken && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.languagesSpoken}</Text>}
        
                    </View>

                    <View style={styles.formGroup}>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge, styles.secondary, { paddingHorizontal: 24, minWidth: 120 }]}
                            onPress={handleSubmit}
                        >
                            {
                            loading ?
                                <SpinnerWhite /> :
                                <Text style={styles.buttonText}>Submit</Text>
                            }
                            
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                    </View>
                </View>
                </View>
            </View>
            <Footer />
            </KeyboardAwareScrollView>
            <FloatingBackButton fallback='/(tabs)/Dashboard' />
        </View>
        )
    }
    else {
        return (
        <View style={[styles.container, { flex: 1 }]}>
            <View style={[styles.center, { flex: 1 }]}>
                <View style={styles.centerAlertContainer}>
                    <View style={[styles.alert, styles.warning]}>
                        <Text style={[styles.alertText, styles.alertTextBold]}>profile does not exist !!!  </Text>
                            <Link href='/(forms)/AddBasicProfile' >
                            <Text style={styles.alertText}>please add a new profile </Text>
                        </Link>
                    </View>
                </View>
            </View>
        </View>
                    
        )
    }
}

export default EditBasicProfile