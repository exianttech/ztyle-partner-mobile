import { Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import Navbar from '@/components/Navbar';

export default function ScreensBeauticianLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Navbar />
                <Stack screenOptions={{ headerShown: false }} />
            </View>
        </SafeAreaView>
    )
} 
