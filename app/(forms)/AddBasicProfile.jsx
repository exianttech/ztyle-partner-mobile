import Checkbox from 'expo-checkbox';
import React, { useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RadioGroup } from 'react-native-radio-buttons-group';

// data
import { languagedata } from '@/data/langualgeData';
import { weekdata } from '@/data/weekData';

// styles
import styles from '@/styles/styles';

// components
import DatePickerInput from '@/components/DatePickerInput';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';


const AddBasicProfile = () => {

  // error fields
  const [errors, seterrors] = useState({});
      
  
  // fields
  const [gender, setgender] = useState();
  const [dob, setdob] = useState();
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [holidaySchedule, setholidaySchedule] = useState(weekdata);
  const [languagesSpoken, setlanguagesSpoken] = useState(languagedata);
  

      
  // field accessories
  const [focusField, setfocusField] = useState(null);

  // values rendered in radio for gender
  const radioButtonsGender = useMemo(() => ([
    {
      id: "male",
      label: 'Male',
    },
    {
      id: "femmle",
      label: 'Female',
    },
    
  ]), []);
  
  // data for inputs
  const empStatData = [
    { label: "Self Employed", value: "Self Employed" },
    { label: "Full Time Employee", value: "Full Time Employee" },
    { label: "Part Time Employee", value: "Part Time Employee" },
    { label: "Others", value: "Others" },
  ];

  // handlers
  const holidayScheduleHandler = (index) => {
    const updatedSchedule = [...holidaySchedule];
    updatedSchedule[index].checked = !updatedSchedule[index].checked;
    setholidaySchedule(updatedSchedule);
  };

  const languagesSpokenHandler = (index) => {
    const updatedSchedule = [...languagesSpoken];
    updatedSchedule[index].checked = !updatedSchedule[index].checked;
    setlanguagesSpoken(updatedSchedule);
  };
  

  

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
                {/* section*/ }
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
                    />
                    {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
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
                    />
                    {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
                </View>
                <View style={styles.formGroup}>
                    <Text style={[styles.formGroupLabel, styles.textShadow]}>Mobile Number<Text style={styles.textDanger}>*</Text></Text>
                    <TextInput
                        placeholder='enter your phone number'
                        placeholderTextColor="#999"
                        style={[styles.formGroupTextInput,focusField === 'mobile' && styles.formGroupTextInputFocused]}
                        keyboardType='phone-pad'
                        // value={contactNumber}
                        // onChangeText={setcontactNumber}
                        onFocus={() => setfocusField('mobile')}
                        onBlur={() => setfocusField(null)}
                    />
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
                  />
                  {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
                </View>
                <View style={styles.formGroup}>
                  <Text style={[styles.formGroupLabel, styles.textShadow]}>Gender<Text style={styles.textDanger}>*</Text></Text>
                  <RadioGroup
                      radioButtons={radioButtonsGender}
                      onPress={setgender}
                      selectedId={gender}
                      layout='row'
                  />
                </View>
                <View style={[styles.formGroup, { marginBottom: 16 }]}>
                  <Text style={[styles.formGroupLabel, styles.textShadow]}>Date Of Birth<Text style={styles.textDanger}>*</Text></Text>
                  <DatePickerInput dob={dob} setdob={setdob} />
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
                  />
                    {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
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
                  />
                  
                  {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
                  
                </View>
                <View style={styles.formGroup}>
                  <Text style={[styles.formGroupLabel, styles.textShadow]}>Experience In Years <Text style={styles.textDanger}>*</Text></Text>
                  <TextInput
                    style={[styles.formGroupTextInput, focusField === 'experience' && styles.formGroupTextInputFocused]}
                    placeholder='Enter Your Experience In Years'
                    placeholderTextColor="#999"
                    autoCapitalize='words'
                    autoCorrect={false}
                    onFocus={() => setfocusField('experience')}
                    onBlur={() => setfocusField(null)}
                  />
                  
                  {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
                  
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
                 
                  {/* <Text style={[styles.textDanger,{fontSize:12}]}>error</Text> */}
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
                </View>

                <View style={styles.formGroup}>
                  <View style={styles.buttonContainer}>
                      <TouchableOpacity style={[styles.buttonLarge, styles.secondary]}>
                          <Text style={styles.buttonText}>Submit</Text>
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

export default AddBasicProfile