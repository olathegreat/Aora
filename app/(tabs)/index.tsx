
import {  Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'


// const StyledView = styled(View)
const index = () => {
  return (
    <View className='' style={styles.container}>
      <Text className="text-green-600 font-semibold text-3xl">Aora</Text>
      <StatusBar style="auto"/>
      <Link href="/profile" style={{color:'blue'}}>Go to profile</Link>
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})

