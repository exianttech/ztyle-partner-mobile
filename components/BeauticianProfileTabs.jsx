import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';


// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/styles';

// utils
import extractActiveDays from '@/utils/extractActiveDays';

// components
import BasicModal from './Modals/BasicModal';
import BeauticianReviews from './Reviews/BeauticianReviews/BeauticianReviews';
import Slots from './Slots/Slots';

const BeauticianProfileTabs = ({ profile }) => {
    // destructure
    const { fullName, shopId, mobile,
        email, gender, dob, position,
        specialty, yearsOfExperience, employmentStatus,
        holidaySchedule, languagesSpoken,
        advanceProfileStatus, availableSlots, profilePic } = profile;
    
    // format to display
    const dateOfBirth=new Date(dob);
    const dobDay = dateOfBirth.getDate();
    const dobMonth = dateOfBirth.getMonth();
    const dobYear = dateOfBirth.getFullYear();
    
    const activeHolidaySchedule = extractActiveDays(holidaySchedule);
    const activeLanguagesSpoken = extractActiveDays(languagesSpoken);

    // select tabs
    const [activeTab, setactiveTab] = useState("basicProfile");

    // modal
    const [modalVisible, setmodalVisible] = useState(false);
    
    const handleDelete = () => {
        setmodalVisible(false);
        console.log("profile deleted")
        // replace backend
    }


    const renderedContent = () => {
        switch (activeTab) {
            case "basicProfile":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            {/* subsection */}
                            <View style={{ marginBottom: 8 }}>
                                <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Personal Information</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Full Name</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{fullName}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Shop Id</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{shopId}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Mobile Number</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{mobile}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>email Id</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{email}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Gender</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{gender}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Date of Birth</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{dobDay} - {monthdata[dobMonth]} - {dobYear}</Text>
                            </View>
                            {/* subsection */}
                            <View style={{ marginBottom: 8 }}>
                                <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Basic Info</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Position</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{position}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Specialty</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{specialty}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Experience</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{yearsOfExperience} years</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Employement Status</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{employmentStatus}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8, alignItems: 'flex-start' }]}>
                                <Text style={styles.fieldHeading}>Holiday Schedule</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <View style={{ flexDirection: 'column' }}>
                                    {
                                        activeHolidaySchedule.map((day, idx) => (
                                            <Text key={idx} style={styles.fieldText}>{day}</Text>
                                        ))
                                    }
                                </View>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8, alignItems: 'flex-start' }]}>
                                <Text style={styles.fieldHeading}>Languages Known</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <View style={{ flexDirection: 'column' }}>
                                    {
                                        activeLanguagesSpoken.map((language, idx) => (
                                            <Text key={idx} style={styles.fieldText}>{language}</Text>
                                        ))
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                )
            case "advancedInfo":
                return (
                    <>
                        <View style={styles.cardBody}>
                            {
                                // check existence of advance profile status
                                !advanceProfileStatus ? (
                                    <>
                                        <View style={{ marginBottom: 8 }}>
                                            <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Time Slots For Booking : Working Day</Text>
                                        </View>
                                        <Slots slots={availableSlots} />
                                    </>
                                )
                                    :
                                    <>
                                        <View style={styles.cardShadow}>
                                            <View style={styles.cardHeader}>
                                                <Text style={styles.textBold}>Profile Status</Text>
                                            </View>
                                            <View style={styles.cardBody}>
                                                <View style={styles.alertContainer}>
                                                    <View style={[styles.alert, styles.info]}>
                                                        <Text style={[styles.alertText, styles.alertTextBold]}>Your Booking Slot Info is Empty !!!</Text>
                                                        <Text style={styles.alertText}>Please Fill up the same.</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.cardShadow}>
                                            <View style={styles.cardBody}>
                                                <Link href='/(forms)/AddAdvanceProfile'>
                                                    <Text style={styles.textGray}>Click Here to Fill up Booking Slot Info</Text>
                                                </Link>
                                            </View>
                                        </View>
                                        
                                    </>

                            }
                        </View>
                    </>
                )
            case "profileSettings":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            <View style={styles.cardHeader}>
                                <Text style={[styles.textBold,{marginBottom:8}]}>Manage Your Profile</Text>
                                <Text style={[styles.textGray, styles.textShadow]}>here you can manage your  profile  as editing or deleting completely.</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <View style={styles.alertContainer}>
                                    <View style={[styles.alert, styles.secondary]}>
                                        <Text style={[styles.alertText, styles.alertTextBold]}>Edit Your Basic Profile</Text>
                                        <Link href='/(forms)/AddBasicProfile'>
                                            <Text style={styles.alertText}>click here to edit your basic profile</Text>
                                        </Link>
                                    </View>
                                </View>
                            </View>
                            {
                                advanceProfileStatus ? (
                                    <View style={styles.cardBody}>
                                        <View style={styles.alertContainer}>
                                            <View style={[styles.alert, styles.info]}>
                                                <Text style={[styles.alertText, styles.alertTextBold]}>Edit Your Booking Slot</Text>
                                                <Link href='/()'>
                                                    <Text style={styles.alertText}>click here to edit your slot info</Text>
                                                </Link>
                                            </View>
                                        </View>
                                    </View>
                                )
                                    :
                                    ""
                                
                            }
                            <View style={styles.cardBody}>
                                <View style={styles.alertContainer}>
                                    <View style={[styles.alert, styles.primary]}>
                                        <Text style={[styles.alertText, styles.alertTextBold]}>Delete Your Entire Profile</Text>
                                        <TouchableOpacity
                                            onPress={() => setmodalVisible(true)}
                                        >
                                            <Text style={styles.alertText}>click here to delete your profile</Text>
                                        </TouchableOpacity>
                                        {/* Modal */}
                                        <BasicModal
                                            visible={modalVisible}
                                            onClose={() => setmodalVisible(false)}
                                            onConfirm={handleDelete}
                                            title="Are you sure you want to delete?"
                                            message="Click Delete if you still want to delete your profile. Otherwise click Close."
                                            confirmText='Delete'
                                            cancelText='Close'
                                        />
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                )
            case "photo":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            <Image
                                source={profilePic}
                                style={styles.profilePicPhoto}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={styles.cardBody}>
                            <Text style={[styles.cardBodySubHeading, { marginLeft: 8 }]}>This is your profile pic</Text>
                            <Text style={[styles.generalDescription,styles.textGray,styles.textShadow]}>Here you can update your profile picture which appears in your profile. Select an image file from your device and click 'Upload.' Your new profile picture will be displayed once the upload is complete.</Text>
                        </View>
                        
                        {
                            1 ? // replace with is profilePicEdit
                                <View style={[styles.cardBody, { marginTop: 16 }]}>
                                    <View style={styles.formGroup}>
                                        <Text style={[styles.formGroupLabel, styles.textShadow]}> Select Profile Pic<Text style={styles.textDanger}>*</Text></Text>
                                        <Pressable
                                            style={styles.formGroupTextInput}
                                        >
                                            <Text style={styles.textGray}>Choose Image</Text>
                                        </Pressable>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={[styles.buttonLarge, styles.secondary]}>
                                            <FontAwesome name='upload' size={16} color='#fff' />
                                            <Text style={[styles.buttonText, { marginLeft: 8 }]}>Upload</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.buttonLarge, styles.primary, { marginLeft: 8 }]}>
                                            <FontAwesome name='close' size={16} color='#fff' />
                                            <Text style={[styles.buttonText, { marginLeft: 8 }]}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* {errors.currentProfilePic && <div className="text-danger fs-12">{errors.currentProfilePic}</div>} */}
                                </View>
                        
                                : ""
                            
                        }
                        {
                            1 ? // replace with !profilePicEdit
                                <View style={styles.cardBody}>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            style={[styles.buttonLarge,styles.secondary]}
                                        >
                                            <FontAwesome name='user' size={16} color="#fff" />
                                            <Text style={[styles.buttonText, { marginLeft: 8 }]}>{profilePic ? "Edit Photo" : "Add Photo"}</Text>
                                        </TouchableOpacity>
                                        {
                                            profilePic && (
                                                <TouchableOpacity
                                                    style={[styles.buttonLarge, styles.primary,{ marginLeft: 8 }]}
                                                >
                                                    
                                                    <FontAwesome name='trash' size={16} color="#fff" />
                                                    <Text style={[styles.buttonText, { marginLeft: 8 }]}>Delete</Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                    </View>
                                </View>
                                : ""
                        }

                    </View>
                )
            case "reviews":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            <Text style={styles.cardBodySubHeading}>Your Reviews</Text>
                            <BeauticianReviews />
                        </View>
                    </View>
                )
        }
    }
    

    return (
        <View style={{ flex: 1 }}>
            {/* Tabs Header */}

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tabHeader}
            >
                {
                    [
                        { key: "basicProfile", label: "Basic Profile" },
                        { key: "advancedInfo", label: "Available Slots For Booking" },
                        { key: "profileSettings", label: "Profile Settings" },
                        { key: "photo", label: "Photo" },
                        { key: "reviews", label: "Reviews" }
                    ].map((tab, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => setactiveTab(tab.key)}
                            style={[styles.tab, activeTab === tab.key && styles.activeTab]}
                        >
                            <Text style={[styles.tabText, activeTab === tab.key && styles.activeTabText]}>
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    ))
                }

            </ScrollView>
            {/* Tab Content */}
            <ScrollView style={styles.tabContent}>
                {
                    renderedContent()
                }
            </ScrollView>
            
        </View>
    )
}


export default BeauticianProfileTabs