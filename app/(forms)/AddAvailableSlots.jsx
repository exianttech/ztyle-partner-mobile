import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState,useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, Link } from 'expo-router';
import { showMessage } from 'react-native-flash-message';

// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SpinnerWhite from '@/components/SpinnerWhite';
import TimePickerInput from '@/components/TimePickerInput';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';

// actions
import { getProfile, updateProfile } from '@/store/profile/profileActions';


const AddAvailableSlots = () => {
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

  // error object for validation
  let initialErrors = { availableSlots: '' };
  const [errors, seterrors] = useState(initialErrors);

  // fields
  const [id, setid] = useState('');
  const [availableSlots, setavailableSlots] = useState([{ start: null, end: null }]);

  // set profile details
  useEffect(() => {
    if (profile) {
      setid(profile._id)
  
    }
  }, [profile]);

  
  // handlers
  const handleTimeChange = (index, key) => (selectedDate) => {
    setavailableSlots(prev => {
      const next = [...prev];
      next[index] = { ...next[index], [key]: selectedDate };
      return next;
    })
  }

  const handleDeleteInput = (index) => {
    setavailableSlots(prev => prev.filter((_, i) => i !== index));
  }
  const handleAddInput = () => {
    setavailableSlots(prev => [...prev, { start: null, end: null }]);
  }
  

  // helpers (put them above handleSubmit)
  const toHHMM = d => d ? `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}` : '';
  
  // minutes since midnight for comparison
  const toMinutes = d => (d instanceof Date) ? d.getHours() * 60 + d.getMinutes() : null;

  // format interval for messages
  const fmtInterval = (s, e) => `${toHHMM(s)} - ${toHHMM(e)}`;
  
  
  const handleSubmit = () => {

    // reset errors
    const errorObj = { availableSlots: '' };
    seterrors(initialErrors);

    // 1) If user left the single default empty slot or all slots empty

    const allEmpty = availableSlots.every(s => !s.start && !s.end);
    if (allEmpty) {
      errorObj.availableSlots = 'You need to enter at least one slot.';
      seterrors(errorObj);
      return;
    }
    
    // 2) Validate each slot: both start & end present, start < end

    let error = false;
    const validIntervals = []; // will hold {startMin, endMin, origIndex, startDate, endDate}
    
    for (let i = 0; i < availableSlots.length; i++) {
      
      const s = availableSlots[i];
      
      // skip completely empty entries (both null) — user might have added then removed times
      if (!s.start && !s.end) continue;

      if (!s.start || !s.end) {
        errorObj.availableSlots = `Slot ${i + 1}: both start and end times are required.`;
        error = true;
        break;
      }
      
      const sMin = toMinutes(s.start);
      const eMin = toMinutes(s.end);
      
      if (sMin === null || eMin === null) {
        errorObj.availableSlots = `Slot ${i + 1}: invalid time.`;
        error = true;
        break;
      }
      
      if (sMin >= eMin) {
        errorObj.availableSlots = `Slot ${i + 1}: start time must be before end time (${fmtInterval(s.start, s.end)}).`;
        error = true;
        break;
      }

      validIntervals.push({ startMin: sMin, endMin: eMin, origIndex: i, startDate: s.start, endDate: s.end });

    }
    
    if (error) {
      seterrors(errorObj);
      return;
    }
    
    // 3) Check overlaps — sort by start and ensure previous end <= current start

    validIntervals.sort((a, b) => a.startMin - b.startMin);

    for (let i = 1; i < validIntervals.length; i++) { 
      const prev = validIntervals[i - 1];
      const curr = validIntervals[i];
      if (prev.endMin > curr.startMin) {
        errorObj.availableSlots = `Slot ${prev.origIndex + 1} (${fmtInterval(prev.startDate, prev.endDate)}) overlaps with slot ${curr.origIndex + 1} (${fmtInterval(curr.startDate, curr.endDate)}).`;
        error = true;
        break;
      }
    }

    if (error) {
      seterrors(errorObj);
      return;
    }

    // 4) All good — build formatted slots, but only for validated intervals (preserve the order user expects)

    const formatedSlots = validIntervals
      // optionally re-sort by original index to keep user order: validIntervals.sort((a,b)=>a.origIndex-b.origIndex)
      .map(i => ({ start: toHHMM(i.startDate), end: toHHMM(i.endDate) }));
    
    
    const profileData = {
      id,
      availableSlots: formatedSlots,
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
          <PageTitle activeMenu="Advance" motherMenu="Profile" />
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.cardShadow}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardBodyHeading}>Enter Your Booking Slot Details</Text>
                </View>
                <View style={styles.cardBody}>
                  {/* section*/}
                  <View style={{ marginBottom: 8 }}>
                    <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Add Slots For Booking </Text>
                  </View>
                  {
                    availableSlots.map((item, index) => (
                      <View
                        style={styles.formGroup}
                        key={index}
                      >
                        <Text style={[styles.cardBodySubHeading, styles.textInfo, { marginBottom: 16 }]}>Time Slot</Text>
                        <Text style={[styles.formGroupLabel, styles.textShadow, { marginBottom: 16 }]}>Starting Time<Text style={styles.textDanger}>*</Text></Text>
                        <TimePickerInput
                          value={item.start}
                          onChange={handleTimeChange(index, 'start')}
                        />
                        <Text style={[styles.formGroupLabel, styles.textShadow, { marginBottom: 16 }]}>Ending Time<Text style={styles.textDanger}>*</Text></Text>
                        <TimePickerInput
                          value={item.end}
                          onChange={handleTimeChange(index, 'end')}
                        />
                        <View style={[styles.buttonContainer, { marginTop: 16, }]}>
                          {
                            availableSlots.length > 1 && (
                              <TouchableOpacity
                                style={[styles.buttonLarge, styles.danger, { paddingHorizontal: 24, minWidth: 100 }]}
                                onPress={() => handleDeleteInput(index)}
                              >
                                <Text style={styles.buttonText}>Delete</Text>
                              
                              </TouchableOpacity>
                            )
                          }
                          {
                            index === availableSlots.length - 1 && (
                              <TouchableOpacity
                                style={[styles.buttonLarge, styles.secondary, { paddingHorizontal: 24, minWidth: 100, marginLeft: 8 }]}
                                onPress={handleAddInput}
                              >
                                <Text style={styles.buttonText}>Add</Text>
                              
                              </TouchableOpacity>
                            )
                          }
                        </View>

                      </View>
                    ))
                  
                  }
                  {errors.availableSlots && <Text style={[styles.textDanger, { fontSize: 12 }]}>{errors.availableSlots}</Text>}
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.cardShadow}>
                <View style={styles.cardBody}>
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

export default AddAvailableSlots