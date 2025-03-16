import { Text } from 'react-native'
import { Slot } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <>
      <Text className="!text-red-500">Header</Text> 
    <Slot/>
    <Text>Footer</Text>
    </>
  )

  // return(
  //   <Stack.Screen name="index" options={{
  //     headerShown: false
  //   }}/>
  // )
}

export default RootLayout

