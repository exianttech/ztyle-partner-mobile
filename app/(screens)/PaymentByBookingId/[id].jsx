import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {useLocalSearchParams, useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

// data
import { monthdata } from '@/data/monthData';

// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import FloatingBackButton from '@/components/FloatingBackButton';
import Footer from '@/components/Footer';

// actions
import { getPaymentByBookingId } from '@/store/payment/paymentActions';
import { resetPayment } from '@/store/payment/paymentSlice';


const PaymentByBookingId = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const dispatch = useDispatch();

    // load payment details on pressing screen
    useFocusEffect(
        useCallback(() => {
            dispatch(getPaymentByBookingId({ id }))
        }, [dispatch, id])
    );

    // redux states
    const { loading, currentPayment, error } = useSelector(state => state.payment);

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
                dispatch(resetPayment());
            };
        }, [dispatch])
    );

    if (loading) {
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
    if (!currentPayment) {
        return (
            <View>
                <Text>Error</Text>
            </View>
        );
    }


     // manage date
    const dopay = currentPayment.createdAt;
    const dateOfPay = new Date(dopay);
    const dopayDay = dateOfPay.getDate();
    const dopayMonth = dateOfPay.getMonth();
    const dopayYear = dateOfPay.getFullYear();
    

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={[{ flex: 1 }, styles.container]}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <PageTitle activeMenu="Details" motherMenu="Payment" />
                <View style={{ paddingVertical: 16, flex: 1 }}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.cardShadow}>
                                <View style={[styles.cardHeader, styles.center]}>
                                    <Text style={[styles.largeHeading, styles.textSecondary, styles.textCenter]}>Service Payment</Text>
                                    <Text style={[styles.fieldText, styles.textGray]}>Booking Id:{currentPayment.bookingId}</Text>
                                </View>
                                <View style={styles.cardBody}>
                                    {/* section */}
                                    <View style={{ marginBottom: 8 }}>
                                        <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Your Payment Details</Text>
                                    </View>
                                    <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                        <Text style={styles.fieldHeading}>Date Of Payment</Text>
                                        <Text style={styles.textSecondary}> : </Text>
                                        <Text style={styles.fieldText}>{dopayDay}-{monthdata[dopayMonth]}-{dopayYear}</Text>
                                    </View>
                                    <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                        <Text style={styles.fieldHeading}>Payment Id</Text>
                                        <Text style={styles.textSecondary}> : </Text>
                                        <Text style={styles.fieldText}>{currentPayment.paymentId}</Text>
                                    </View>
                                    <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                        <Text style={styles.fieldHeading}>Order Id</Text>
                                        <Text style={styles.textSecondary}> : </Text>
                                        <Text style={styles.fieldText}>{currentPayment.orderId}</Text>
                                    </View>
                                    <View style={[styles.serialRow, { marginBottom: 8, paddingHorizontal: 12 }]}>
                                        <Text style={styles.fieldHeading}>Amount</Text>
                                        <Text style={styles.textSecondary}> : </Text>
                                        <Text style={styles.fieldText}>&#8377; {currentPayment.amount}</Text>
                                    </View>
                                    <View style={{ marginTop: 16 }}>
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity
                                                style={[styles.buttonLarge, styles.info]}
                                                onPress={() => router.push('/')}
                                            >
                                                <Text style={styles.buttonText}>Home</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                </View>
                <Footer/>
            </ScrollView>
            <FloatingBackButton fallback='/(tabs)/Dashboard' />
        </View>
    )
    
}

export default PaymentByBookingId