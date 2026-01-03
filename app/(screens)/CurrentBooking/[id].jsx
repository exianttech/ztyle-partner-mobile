import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';


// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/styles';

// config
import { bookingStatusConfig } from '@/config/bookingStatusConfig';

// utils
import getStandardTime from '@/utils/getStandardTime';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import BasicModal from '@/components/Modals/BasicModal';
import WarningModal from '@/components/Modals/WarningModal';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';

// actions
import { resetBooking } from '@/store/booking/bookingSlice';
import {
    getBookingById, changeBookingStatusByBeauticianById
 } from '@/store/booking/bookingActions';
import { addNotification } from '@/store/notification/notificationActions';

const CurrentBooking = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const dispatch = useDispatch();

    // load booking on pressing screen
    useFocusEffect(
        useCallback(() => {
            dispatch(getBookingById({ id }))
        }, [dispatch, id])
    );

    // redux states
    const { currentBooking, error } = useSelector(state => state.booking);
    const bookingLoding = useSelector(state => state.booking.loading);

    // states for modals
    const [cancelBookingModal, setcancelBookingModal] = useState(false);
    const [confirmBookingModal, setconfirmBookingModal] = useState(false);


    useEffect(() => {
        if (error) {
            showMessage({
                message: error || 'An error occured',
                type: 'danger'
            })
        }
    }, [error]);
    
    // clear states on return
    useFocusEffect(
        useCallback(() => {
            return () => {
                dispatch(resetBooking());
            };
        }, [dispatch])
    );

     if (bookingLoding) {
        return (
            <View
                style={[styles.container, { flex: 1 }]}
                contentContainerStyle={styles.center}
            >
                <Spinner />
            </View>
        )
    }
    
    // ⛔ safety guard
    if (!currentBooking) {
        return (
            <View>
                <Text>Error</Text>
            </View>
        );
    }

    const handleConfirmBooking = () => {
        setconfirmBookingModal(false)
        const notification = {
            senderName: currentBooking.beauticianName,
            senderId: currentBooking.beauticianId,
            receiverId: currentBooking.userId,
            message: "Service Booking Confirmed",
            notificationType:"info"
        }
        dispatch(addNotification({ notification }));
        dispatch(changeBookingStatusByBeauticianById({ id: currentBooking._id, bookingData: { action: "confirmed" } }));
    
    }

    const handleCancelBooking = () => { 
        setcancelBookingModal(false)
        const notification = {
            senderName: currentBooking.beauticianName,
            senderId: currentBooking.beauticianId,
            receiverId: currentBooking.userId,
            message: "Service Booking Confirmed",
            notificationType:"danger"
        }
        dispatch(addNotification({ notification }));
        dispatch(changeBookingStatusByBeauticianById({ id: currentBooking._id, bookingData: { action: "canceledByBeautician" } }));
    }

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
                            style={[styles.buttonLarge,styles.secondary]}
                        >
                            <Text style={styles.buttonText}>Mark As Complete</Text>
                        </TouchableOpacity>
                    </View>
                )
            case "pending":
                return (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttonLarge, styles.info]}
                            onPress={() => setconfirmBookingModal(true)}
                        >
                            <Text style={styles.buttonText}>Confirm </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttonLarge, styles.danger, { marginLeft: 8 }]}
                            onPress={() => setcancelBookingModal(true)}
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
                            onPress={() => router.push(`/(screens)/PaymentByBookingId/${id}`)}
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
                                <Text style={[styles.largeHeading, styles.textSecondary,styles.textCenter]}>Status Of Selected Booking</Text>
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
                                    <BasicModal
                                            visible={confirmBookingModal}
                                            onClose={() => setconfirmBookingModal(false)}
                                            onConfirm={handleConfirmBooking}
                                            title="Are You Sure You want to Confirm This Slot"
                                            message="Click Confirm if you are ready for this slot .. . otherwise click close"
                                            confirmText='Confirm'
                                            cancelText='Close'
                                    />
                                    <WarningModal
                                            visible={cancelBookingModal}
                                            onClose={() => setcancelBookingModal(false)}
                                            onConfirm={handleCancelBooking}
                                            title="Are You Sure You want to Cancel Booking"
                                            message="Click Cancel if you still want to calncel this booking .. . otherwise click close"
                                            confirmText='Cancel'
                                            cancelText='Close'
                                    />
                                
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Footer />
            </ScrollView>
            <FloatingBackButton fallback='/(tabsBeautician)/Dashboard' />
        </View>
    )

}

export default CurrentBooking