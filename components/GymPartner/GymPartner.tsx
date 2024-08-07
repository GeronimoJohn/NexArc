import React, { useState, useRef } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { users } from './UsersData'
import { UserCard } from './UserCard'

const SCREEN_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SCREEN_WIDTH - 50

export function GymPartner() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  const handleSwipeRight = () => {
    console.log('Swiped right on:', users[activeIndex].name)
  }

  const handleSwipeLeft = () => {
    console.log('Swiped left on:', users[activeIndex].name)
  }

  console.log('users', users)

  return (
    <View className='flex-1 justify-center items-center bg-gray-100'>
      {/* <Carousel
        ref={carouselRef}
        data={users}
        renderItem={renderItem}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setActiveIndex(index)}
      /> */}
      <UserCard user={users[0]} />
    </View>
  )
}
