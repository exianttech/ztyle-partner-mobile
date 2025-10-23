import React from 'react';
import { Text, View } from 'react-native';

// styles 
import styles from '@/styles/styles';

const PageTitle = ({ activeMenu, motherMenu }) => {
    return (
        <View style={styles.pageTitleContainer}>
            <Text style={styles.motherMenu}>{motherMenu}</Text>
            <Text style={styles.menuSeparator}>/</Text>
            <Text style={styles.activeMenu}>{activeMenu}</Text> 
        </View>
    )
}

export default PageTitle