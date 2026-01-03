import { View, ActivityIndicator } from 'react-native';

const Spinner = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#fff' />
    </View>
)

export default Spinner