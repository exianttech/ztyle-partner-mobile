import { View } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import { useSelector } from 'react-redux';


export default function AuthLayout() {
    const router = useRouter();

    // JWT
    const token = useSelector(state => state.auth.token);
    
    useEffect(() => {
        if (token) {
            router.replace('/(tabs)/Dashboard')
        }
    }, [router, token]);

    if (!token) {
    
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Stack screenOptions={{ headerShown: false }} />
                </View>
            </SafeAreaView>
 
        )
    }
}
