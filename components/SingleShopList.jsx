import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// styles
import styles from '@/styles/componentStyles';

const SingleShopList = ({ shop }) => {
    const router = useRouter();

    const {
        _id,
        shopImage,
        shopName,
        shopId,
        ownerFullName
    } = shop;
    
    return (
        <View style={styles.listContainer}>
            <Image
                source={shopImage}
                style={styles.listImage}
            />
            <Text style={[styles.listTitle, styles.textSecondary]}>{shopName}</Text>
            <Text style={[styles.listText, styles.textGray, styles.textShadow]}>Owner : {ownerFullName}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.buttonLarge, styles.secondary]}>
                    <FontAwesome5 name='arrow-alt-circle-right' size={16} color="#fff" />
                    <Text style={[styles.buttonText, { paddingLeft: 8 }]}>Book A Service</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonLarge, styles.primary]}
                    onPress={() => router.push(`(screensUser)/shopDetails/${_id}`)}
                >
                    <FontAwesome name='info' size={16} color="#fff" />
                    <Text style={[styles.buttonText, { paddingLeft: 8 }]}>Shop Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SingleShopList