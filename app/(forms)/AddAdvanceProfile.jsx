import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


// styles
import styles from '@/styles/styles';

// components
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import TimePickerInput from '@/components/TimePickerInput';


const AddAdvanceProfile = () => {

  // fields
  const [availableSlots, setavailableSlots] = useState([{ start: null, end: null }]);
  
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
  
  // access time from date
  const toHHMM = d => d ? `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}` : '';
  
  const handleSubmit = () => {
    
    const formatedSlots = availableSlots.map(s => ({
      start: toHHMM(s.start),
      end: toHHMM(s.end)
    }))
    
    const profileData = {
      availableSlots: formatedSlots,
      advadvanceProfileStatus: true,
      profileCompletion: "100"
    }

    console.log(profileData);

  }
  
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
                {/* section*/ }
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
                        onChange={handleTimeChange(index,'end')}
                      />
                      <View style={[styles.buttonContainer, { marginTop: 16 }]}>
                        {
                          availableSlots.length > 1 && (
                            <TouchableOpacity
                              style={[styles.buttonLarge, styles.danger]}
                              onPress={() => handleDeleteInput(index)}
                            >
                              <Text style={styles.buttonText}>Delete</Text>
                              
                            </TouchableOpacity>
                          )
                        }
                        {
                          index === availableSlots.length - 1 && (
                            <TouchableOpacity
                              style={[styles.buttonLarge, styles.secondary,{marginLeft:8}]}
                              onPress={ handleAddInput}
                            >
                              <Text style={styles.buttonText}>Add</Text>
                              
                            </TouchableOpacity>
                          )
                        }
                      </View>

                    </View>
                  ))
                  
                }
                {/* {errors.availableSlots && <div className="text-danger fs-12">{errors.availableSlots}</div>} */}

              </View>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.cardShadow}>
              <View style={styles.cardBody}>
                <View style={styles.formGroup}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={[styles.buttonLarge, styles.secondary]}
                      onPress={handleSubmit}
                    >
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
      <FloatingBackButton fallback='/(tabsBeautician)/Dashboard' />
      
    </View>
  )
}

export default AddAdvanceProfile