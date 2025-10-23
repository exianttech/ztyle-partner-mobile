import React from 'react';
import { ScrollView, Text, View } from 'react-native';

// data
import { beauticianBookingsData } from '@/data/beauticianBookingsData';

// styles
import styles from '@/styles/styles';

// components
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import SingleBookingList from '@/components/SingleBookingList';

const ServiceBookings = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <PageTitle activeMenu="All Bookings" motherMenu="Service"/>
      <View style={{ paddingVertical: 16, flex: 1 }}>
        {
          1 ? // replace with redux/backend
            beauticianBookingsData.map((booking, idx) => (
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