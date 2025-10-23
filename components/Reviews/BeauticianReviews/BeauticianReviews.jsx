import React from 'react';
import { Text, View } from 'react-native';

// data
import { beauticianReviewsData } from '@/data/beauticianReviewsData';

// styles
import styles from '@/styles/styles';

// components
import SingleReview from './SingleReview';


const BeauticianReviews = () => {
    return (
        <View
            style={{ paddingVertical: 16 }}
        >
            {
                1 ?// replace with redux/backend
                    beauticianReviewsData.map((review, idx) => (
                        <SingleReview key={idx} review={review} />
                    ))
                    :
                    <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Reviews Till Now</Text>
            }
        </View>
    )
}

export default BeauticianReviews