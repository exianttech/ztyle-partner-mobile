import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// styles
import styles from '@/styles/styles';

// components
import Spinner from '@/components/Spinner';
import SingleReview from './SingleReview';

// actions
import { getBeauticianReviews } from '@/store/review/reviewActions';


const BeauticianReviews = () => {
    const dispatch = useDispatch();

    // profile redux
    const { profile } = useSelector(state => state.profile);

    // get reviews
    useEffect(() => {
        if (profile) {
            const id = profile._id;
                dispatch(getBeauticianReviews({ id }))
        }
    }, [profile, dispatch]);
    
    const { loading, beauticianReviews } = useSelector(state => state.review);

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
        <View
            style={{ paddingVertical: 16 }}
        >
            {
                profile ?
                    beauticianReviews?
                    beauticianReviews.map((review, idx) => (
                        <SingleReview key={idx} review={review} />
                    ))
                    :
                        <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No reviews found. please wait a while for a user to submit review.	</Text>
                    : <Text style={[styles.textCenter, styles.textBold, styles.textWarning]}>No Beautician exists for this Id.</Text>
            }
        </View>
    )
}

export default BeauticianReviews