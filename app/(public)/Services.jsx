import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

// styles
import styles from '@/styles/styles';

// data
import { servicesData } from '@/data/servicesData';

// images 
import serviceimage from '@/assets/images/pages/serviceimage.jpg';


// components
import FooterPublic from '@/components/FooterPublic';


const Services = () => {


  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentBody}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.card}>
              <View style={styles.cardBody}>
                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <Text style={[styles.cardBodyHeading, styles.textSecondary]}>Our Services</Text>
                    <Text style={styles.cardBodyText}>
                       At Ztyle, we're committed to connecting you with the best beauty professionals in your area.
                      Whether you're looking for a relaxing spa day or a quick touch-up, our platform offers a wide range of services to meet your needs.
                    </Text>
                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Discover the Best Salons and Spas</Text>
                    <Text style={styles.cardBodyText}>
                      Browse through our extensive network of salons and spas, each carefully selected for their expertise and commitment to quality.
                      Find the perfect location based on your preferences, services offered, and proximity.                   
                    </Text>
                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Enjoy the Convenience of Home Service</Text>
                    <Text style={styles.cardBodyText}>
                      Need a beauty treatment at home? Our platform allows you to book home services directly with the same talented professionals you'd find in salons and spas.
                      Enjoy the convenience of having your favorite treatments delivered to your doorstep.
                    </Text>
                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Our Wide Range of Services Includes:</Text>
                    <View>
                      {
                        servicesData.map((service, idx) => (
                          <View key={idx}>
                            <Text style={[styles.cardBodyText, { marginBottom: 8 }]}>
                              <Text style={{ fontWeight: 'bold' }}>{service.title}</Text>
                              {service.desc}
                            </Text>

                          </View>
                        ))
                      }
                    </View>
                    <Text style={[styles.cardBodySubHeading, styles.textInfo]}>Book Your Appointment Today </Text>
                    <Text style={styles.cardBodyText}>
                      Ready to elevate your beauty routine? Download our app or visit our website to explore our services, find your ideal salon or spa, and book your appointment with ease.
                      Let us help you discover the transformative power of professional beauty treatments.
                    </Text>
                  </View>
                </View>

                <View style={styles.card}>
                  <View style={styles.cardBody}>
                    <Image
                      source={serviceimage}
                      style={styles.imageFluid}
                      resizeMode='cover'
                    />
                    <Text style={styles.cardBodySubHeading}>Service with unparallel quality , for you</Text>

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

export default Services