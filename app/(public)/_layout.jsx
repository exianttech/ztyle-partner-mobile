import { Stack } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import NavbarPublic from '@/components/NavbarPublic';

export default function PublicLayout() {
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <NavbarPublic />
                <Stack screenOptions={{ headerShown: false }} />
            </View>
        </SafeAreaView>
    )
}