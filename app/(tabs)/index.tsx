
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import "../global.css"
const index = () => {
  return (
    <View  className='bg-red-500'>
      <Text className="text-3xl">Aorass</Text>
      <StatusBar style="auto"/>
      <Link href="/profile" style={{color:'blue'}}>Go to profile</Link>
    </View>
  )
}

export default index

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'#fff',
//     alignItems:'center',
//     justifyContent:'center'
//   }
// })

