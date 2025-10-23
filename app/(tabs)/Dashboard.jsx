import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// styles
import styles from '@/styles/styles';

// components
import Achievers from '@/components/Achievers/Achievers';
import Footer from '@/components/Footer';
import LatestBookings from '@/components/LatestBookings/LatestBookings';
import RadialDonut from '@/components/RadialDonut';

const Dashboard = () => {
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={styles.row}>
        {/* card 1 */}
        <View style={styles.column}>
          <TouchableOpacity>
            <View style={[styles.dashCard, styles.dashBg1]}>
              <View style={[styles.cardBody, styles.serialRow, styles.between]}>
                <View style={{ marginBottom: 8 }}>
                  <Text style={[styles.dashCardCount, styles.textWhite]}>10</Text>
                  <Text style={[styles.textWhite, styles.textBold]}>Today’s Appointments</Text>
                </View>
                <View style={{ marginBottom: 8 }}>
                  <FontAwesome5 name='calendar-check' size={36} color="#fff" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* card 2 */}
        <View style={styles.column}>
          <TouchableOpacity>
            <View style={[styles.dashCard, styles.dashBg2]}>
              <View style={[styles.cardBody, styles.serialRow, styles.between]}>
                <View style={{ marginBottom: 8 }}>
                  <Text style={[styles.dashCardCount, styles.textWhite]}>4</Text>
                  <Text style={[styles.textWhite, styles.textBold]}>Pending Requests</Text>
                </View>
                <View style={{ marginBottom: 8 }}>
                  <FontAwesome5 name='inbox' size={36} color="#fff" />
                </View>
              </View>
            </View>
          </TouchableOpacity>

        </View>
        {/* card 3 */}
        <View style={styles.column}>
          <TouchableOpacity>
            <View style={[styles.dashCard, styles.dashBg3]}>
              <View style={[styles.cardBody, styles.serialRow, styles.between]}>
                <View style={{ marginBottom: 8 }}>
                  <Text style={[styles.dashCardCount, styles.textWhite]}>8</Text>
                  <Text style={[styles.textWhite, styles.textBold]}>Monthly Earnings</Text>
                </View>
                <View style={{ marginBottom: 8 }}>
                  <FontAwesome5 name='rupee-sign' size={36} color="#fff" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* card 4 */}
        <View style={styles.column}>
          <TouchableOpacity>
            <View style={[styles.dashCard, styles.dashBg4]}>
              <View style={[styles.cardBody, styles.serialRow, styles.between]}>
                <View style={{ marginBottom: 8 }}>
                  <Text style={[styles.dashCardCount, styles.textWhite]}>15</Text>
                  <Text style={[styles.textWhite, styles.textBold]}>Customer Reviews</Text>
                </View>
                <View style={{ marginBottom: 8 }}>
                  <FontAwesome name='star' size={36} color="#fff" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.card}>
            <View style={[styles.cardBody, styles.center]}>

              <RadialDonut profileCompletion='20' />

              <Text style={styles.dashCardCount}>0</Text>
              <Text> Profile Completion</Text>
              <View style={{ marginTop: 16 }}>
                <Text style={[styles.cardBodyHeading, styles.textDanger]}>Your Profile is empty</Text>
                <Link href='/(forms)/AddBasicProfile'>
                  <Text style={[styles.textGray, styles.textCenter]}> Click Here to Fill up Your Profile </Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <Text style={styles.cardBodySubHeading}>Latest Booking Requests</Text>
              <LatestBookings />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <Text style={styles.cardBodySubHeading}>Top Achievers</Text>
              <Achievers />
            </View>
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  )
}

export default Dashboard