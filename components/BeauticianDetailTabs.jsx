import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/styles';

// utils
import extractActiveDays from '@/utils/extractActiveDays';

// components
import BeauticianReviews from './Reviews/BeauticianReviews/BeauticianReviews';
import Slots from './Slots/Slots';



const BeauticianDetailTabs = ({beautician}) => {

    // destructure
    const { fullName, shopId, mobile,
        email, gender, dob, position,
        specialty, yearsOfExperience, employmentStatus,
        holidaySchedule, languagesSpoken,
        advanceProfileStatus, availableSlots } = beautician;
    
    // format to display
    const dateOfBirth=new Date(dob);
    const dobDay = dateOfBirth.getDate();
    const dobMonth = dateOfBirth.getMonth();
    const dobYear = dateOfBirth.getFullYear();
    
    const activeHolidaySchedule = extractActiveDays(holidaySchedule);
    const activeLanguagesSpoken = extractActiveDays(languagesSpoken);
    // select tabs
    const [activeTab, setactiveTab] = useState("basicProfile");

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
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            {
                                // check existence of advance profile status
                                advanceProfileStatus ? (
                                    <>
                                        <View style={{ marginBottom: 8 }}>
                                            <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Time Slots For Booking : Working Day</Text>
                                        </View>
                                        <Slots slots={availableSlots} />
                                    </>
                                )
                                    :
                                    <>
                                        <View style={styles.cardHeader}>
                                            <Text style={styles.textBold}>Profile Status</Text>
                                        </View>
                                        <View style={styles.cardBody}>
                                            <View style={styles.alertContainer}>
                                                <View style={[styles.alert, styles.info]}>
                                                    <Text style={[styles.alertText, styles.alertTextBold]}>Booking Slot Info is Empty !!!</Text>
                                                    <Text style={styles.alertText}>Please wait for beutician to fill.</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </>   
                            }
                        </View>
                    </View>
                )
            case "reviews":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            <Text style={styles.cardBodySubHeading}>User Reviews</Text>
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
                        { key: "reviews", label: "Reviews" }
                    ].map((tab, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => setactiveTab(tab.key)}
                            style={[styles.tab, activeTab === tab.key && styles.activeTabUser]}
                        >
                            <Text style={[styles.tabText, activeTab === tab.key && styles.activeTabTextUser]}>
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

export default BeauticianDetailTabs