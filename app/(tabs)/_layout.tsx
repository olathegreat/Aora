import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text> 
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

