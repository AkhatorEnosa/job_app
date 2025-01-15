import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Welcome, Popularjobs, Nearbyjobs } from '../components'

 import { COLORS, icons, images, SIZES } from '../constants'
import { Stack, useRouter } from 'expo-router'

const Home = () => {
    const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
       <Stack.Screen 
        options={{
            // headerStyle: {
            //     backgroundColor: COLORS.lightWhite
            // },
            // headerShadowVisible: false,
            headerShown: false
        }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                flex: 1,
                padding:   SIZES.medium
            }}>
                <Welcome />
                <Popularjobs />
                <Nearbyjobs />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home