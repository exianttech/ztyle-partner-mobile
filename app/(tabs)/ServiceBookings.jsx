import { ScrollView, Text, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';


// styles
import styles from '@/styles/styles';

// components
import PageTitle from '@/components/PageTitle';
import Spinner from '@/components/Spinner';
import SingleBookingList from '@/components/SingleBookingList';
import Footer from '@/components/Footer';

// actions
// import { getProfile } from '@/store/profile/profileActions';
import { getBookingsByBeautician } from '@/store/booking/bookingActions';



const ServiceBookings = () => {
  const dispatch = useDispatch();

  //profile redux
  const { profile } = useSelector(state => state.profile);
  

  

  useFocusEffect(
    useCallback(() => {
      if (profile) {
        dispatch(getBookingsByBeautician({ searchData: { beauticianId: profile._id } }))
      }
        
    }, [profile?._id, dispatch])
  );
  
  // booking redux
  const { loading, bookings, error } = useSelector(state => state.booking);
  


  // error display
  useEffect(() => {
    if (error) {
      showMessage({
        message: error || 'An error occured',
        type: 'danger'
      })
    }
  }, [error]);


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
  
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <PageTitle activeMenu="All Bookings" motherMenu="Service"/>
      <View style={{ paddingVertical: 16, flex: 1 }}>
        {
          bookings ? 
            bookings.map((booking, idx) => (
              <SingleBookingList key={idx} booking={booking} />
              
            )) :
            <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>You don't have any bookings now. Please wait a while for service request.</Text>
        }
      </View>
      <Footer />
    </ScrollView>
  )
}

export default ServiceBookings