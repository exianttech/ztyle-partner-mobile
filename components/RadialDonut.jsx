import React from 'react';
import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

// styles
import styles from '@/styles/styles';

const RadialDonut = ({profileCompletion}) => {
    return (
        <View style={styles.radialDonutContainer}>
            <AnimatedCircularProgress
                size={150}
                width={15}
                fill={Number(profileCompletion)}
                tintColor='#008fb3'
                backgroundColor='#e0e0e0'
                rotation={0}  // start at top
                lineCap='round'

            >
                {
                    (fill) => (
                        <Text style={styles.radialDonutText}>
                            {`${Math.round(fill)}%`}
                        </Text>
                    )
                }

            </AnimatedCircularProgress>
        </View>
    )
}

export default RadialDonut