import React, { ReactElement } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export function UserCard({ user }): ReactElement {
  return (
    <ScrollView className='bg-white'>
      <View className='mx-4 my-10'>
        <View className='relative'>
          <Image
            source={{ uri: user.imageUrl }}
            className='w-full h-80 rounded-lg mb-4'
            style={{ alignSelf: 'center' }}
          />
        </View>
        <Text className='text-2xl font-bold text-black'>
          {user.name}, {user.age}
        </Text>
        <Text className='text-black'>{user.gymLevel}</Text>
        <Text className='text-black'>{user.distance}</Text>
      </View>

      <View className='bg-gray-800 p-4 rounded-lg shadow-md m-4'>
        <Text className='text-lg font-semibold text-white mb-2'>Profile</Text>
        <Text className='text-gray-200'>{user.profile}</Text>
      </View>

      <View className='bg-gray-800 p-4 rounded-lg shadow-md m-4'>
        <Text className='text-lg font-semibold text-white mb-2'>
          Personal Information
        </Text>
        <View className='flex-row flex-wrap'>
          {Object.entries(user.personalInfo).map(([key, value]) => (
            <View
              key={key}
              className='bg-gray-700 rounded-full px-3 py-1 m-1 flex-row items-center'
            >
              <FontAwesome5 name='user-alt' size={12} color='white' />
              <Text className='text-sm text-white ml-2'>{`${value}`}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className='bg-gray-800 p-4 rounded-lg shadow-md m-4'>
        <Text className='text-lg font-semibold text-white mb-2'>
          Workout Split
        </Text>
        <Text className='text-gray-200'>{user.workoutSplit}</Text>
      </View>

      <View className='bg-gray-800 p-4 rounded-lg shadow-md m-4'>
        <Text className='text-lg font-semibold text-white mb-2'>Interests</Text>
        <View className='flex-row flex-wrap'>
          {user.interests.map((interest, index) => (
            <View
              key={index}
              className='bg-gray-700 rounded-full px-3 py-1 m-1'
            >
              <Text className='text-sm text-white'>{interest}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className='bg-gray-800 p-4 rounded-lg shadow-md m-4'>
        <Text className='text-lg font-semibold text-white mb-2'>
          Fitness Goal
        </Text>
        <Text className='text-gray-200'>{user.fitnessGoal}</Text>
      </View>

      <View className='bg-gray-800 p-4 rounded-lg shadow-md m-4'>
        <Text className='text-lg font-semibold text-white mb-2'>
          Workout Jam
        </Text>
        <Text className='text-gray-200'>{`${user.workoutJam.song} - ${user.workoutJam.artist}`}</Text>
      </View>
    </ScrollView>
  )
}
