import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import { useSelector } from 'react-redux';

// components
import Navbar from '@/components/Navbar';

export default function TabsBeauticianLayout() {

    const router = useRouter();

     // JWT
    const token = useSelector(state => state.auth.token);

     // redirect logic 
    useEffect(() => {
        if (!token) {
            router.replace('/')
        }
    }, [router, token]);
    
    if (!token) return null;
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Navbar />
                <Tabs
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: '#17a2b8',
                        tabBarInactiveTintColor: 'gray',
                        tabBarLabelStyle: { fontSize: 12 },
                        tabBarStyle: { paddingVertical: 5, height: 60 }
                    }}
                >
                     <Tabs.Screen
                        name='Dashboard'
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name='home-outline' size={size} color={color} />
                            )
                        }}

                    />
                    <Tabs.Screen
                        name='ServiceBookings'
                        options={{
                            tabBarLabel: 'Service Bookings',
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome5 name='calendar-check' size={size} color={color} />
                            )
                        }}
                        
                    />
                </Tabs>
            </View>
        </SafeAreaView>
    )
} 