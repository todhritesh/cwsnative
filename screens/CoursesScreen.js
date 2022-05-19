import { View, Text } from 'react-native'
import React from 'react'
import Course from '../components/course-screen/Course'
import { ScrollView } from 'react-native-gesture-handler'


const CoursesScreen = () => {
  return (
    <View>
      <ScrollView>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
      </ScrollView>
    </View>
  )
}

export default CoursesScreen