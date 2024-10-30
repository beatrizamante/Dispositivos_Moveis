import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

type headerTitleProps = {
    title: string
}

export default function headerTitle({ title }: headerTitleProps) {
  return (
    <Stack.Screen options={{ title }}/>
        
  )
}