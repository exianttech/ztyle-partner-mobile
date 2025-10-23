import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// data
import { beauticianBookingsData } from '@/data/beauticianBookingsData';
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/styles';

// config
import { bookingStatusConfig } from '@/config/bookingStatusConfig';

// utils
import getStandardTime from '@/utils/getStandardTime';

// components
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';

const CurrentBooking = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const currentBooking = beauticianBookingsData.find(booking => booking._id === id);
    // destructure
    const { date,
        slot,
        shopName,
        service,
        user,
        status } = currentBooking;

    // manage date
    const dobook = date;
    const dateOfBook = new Date(dobook);
    const dobookDay = dateOfBook.getDate();
    const dobookMonth = dateOfBook.getMonth();
    const dobookYear = dateOfBook.getFullYear();
        
    // manage time
    const stdStart = getStandardTime(slot.start);
    const stdEnd = getStandardTime(slot.end);

    // status  access
    const config = bookingStatusConfig[status] || {};
    if (!config.text) return null; // fallback

    const renderBookingAction = () => {
        switch (status) {
            case "confirmed":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge,styles.secondaryBeautician]}
                        >
                            <Text style={styles.buttonText}>Mark As Complete</Text>
                        </TouchableOpacity>
                    </View>
                )
            case "pending":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge,styles.info]}
                        >
                            <Text style={styles.buttonText}>Confirm </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttonLarge, styles.danger, { marginLeft: 8 }]}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                )
            case "completed":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge, styles.success]}
                            onPress={() => router.push('/')}
                        >
                            <Text style={styles.buttonText}>View Payment Details</Text>
                        </TouchableOpacity>
                    </View>
                    
                )
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <PageTitle activeMenu="Status" motherMenu="Booking" />
                <View style={styles.row}>
                    <View style={styles.column}>
                        <View style={styles.cardShadow}>
                            <View style={[styles.cardHeader, styles.center]}>
                                <Text style={[styles.largeHeading, styles.textSecondaryBeautician,styles.textCenter]}>Status Of Selected Booking</Text>
                                <Text style={[styles.fieldText, styles.textGray]}>{dobookDay} - {monthdata[dobookMonth]} - {dobookYear}</Text>
                            </View>
                            <View style={styles.cardBody}>
                                {/* section */}
                                <View style={{ marginBottom: 8 }}>
                                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Service Booking Details</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Booked Shop</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{shopName}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Selected Service</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{service}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Customer Name</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{user}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Status</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles[config.textVariant]}>{config.text}</Text>
                                </View>
                                {/* section */}
                                <View style={{ marginBottom: 8 }}>
                                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Time Slot</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>Start</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{stdStart}</Text>
                                </View>
                                <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                    <Text style={styles.fieldHeading}>End</Text>
                                    <Text style={styles.textSecondary}> : </Text>
                                    <Text style={styles.fieldText}>{stdEnd}</Text>
                                </View>
                                <View style={{ marginTop: 16 }}>
                                    {
                                        renderBookingAction()
                                    }
                                
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Footer />
            </ScrollView>
            <FloatingBackButton fallback='/(tabsBeautician)/Dashboard'/>
        </View>
    )
}

export default CurrentBooking