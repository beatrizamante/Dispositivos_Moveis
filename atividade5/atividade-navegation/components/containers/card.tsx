import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'

type cardProps = {
    title: string,
    children: ReactNode
}

export default function card({ title, children } : cardProps) {
  return (
    <View>
      {children}
    </View>
  )
}