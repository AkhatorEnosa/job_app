import { View, SafeAreaView, ScrollView } from 'react-native'
import { Welcome, Popularjobs, Nearbyjobs } from '../components'

 import { COLORS, SIZES } from '../constants'
import { Stack, useRouter } from 'expo-router'
import { useState } from 'react'

const Home = () => {
    const router = useRouter()
    const [searchTerm, setsearchTerm] = useState("")

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen 
            options={{
                headerShown: false
            }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                flex: 1,
                padding: SIZES.medium
            }}>
                <Welcome 
                    searchTerm={searchTerm}
                    setsearchTerm={setsearchTerm}
                    handleClick={() => {
                        if(searchTerm) {
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                />
                <Popularjobs />
                <Nearbyjobs />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home