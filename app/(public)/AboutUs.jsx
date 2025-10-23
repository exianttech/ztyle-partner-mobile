import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

// styles
import styles from '@/styles/styles';

// images
import aboutimage from '@/assets/images/pages/aboutimage.jpg';

// components
import FooterPublic from '@/components/FooterPublic';

const AboutUs = () => {
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={styles.contentBody}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.card}>
              <View style={styles.cardBody}>
                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <Text style={[styles.cardBodyHeading, styles.textSecondary]}>About Ztyle</Text>
                    <Text style={styles.cardBodyText}>
                       At Ztyle, we believe that everyone deserves to feel confident and beautiful in their own skin.
                      Our app is designed to make it easy for you to discover and book the best beauty services, from hair styling and manicures to massages and facials.      
                      We're committed to connecting you with talented professionals who share your passion for self-care.   
                    </Text>
                    <Text style={styles.cardBodyText}>
                      Our user-friendly app allows you to browse through a wide range of beauty services offered by top salons and spas in your area.
                      With just a few taps, you can search for specific treatments, read reviews from other customers, and book appointments that fit your schedule.             
                      We prioritize convenience and quality, ensuring a seamless experience from start to finish.
                    </Text>
                    <Text style={styles.cardBodyText}>
                       Whether you're looking for a quick touch-up or a day of relaxation, Ztyle is your go-to destination for all things beauty.
                      We're dedicated to providing a platform that empowers you to prioritize self-care and look your best.              
                      Join our community of beauty enthusiasts and discover the transformative power of professional services.                    
                    </Text>
                  </View>
                </View>

                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <Image
                      source={aboutimage}
                      style={styles.imageFluid}
                      resizeMode='cover'
                    />
                    <Text style={styles.cardBodySubHeading}>We are here, for a better life for you...</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      
      <FooterPublic />
    </ScrollView>
  )
}

export default AboutUs