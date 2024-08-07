import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton } from '../CustomButton'
import { useRouter } from 'expo-router'

export function HomePage(): ReactElement {
  const router = useRouter()

  return (
    <View className='flex-1'>
      <SafeAreaView className='flex-1 mx-5 my-12'>
        <View className='flex-1 justify-center'>
          <Text className='text-center text-black font-bold text-4xl'>
            Next Arc
          </Text>
          <Text className='text-center text-black font-bold text-2xl mt-3'>
            Connect, Compete, Conquer
          </Text>
        </View>

        <View>
          <CustomButton
            onPress={() => router.push('/partners')}
            title='Get Started'
            textStyles='text-white'
          />
        </View>
        <StatusBar style='light' />
      </SafeAreaView>
    </View>
  )
}
