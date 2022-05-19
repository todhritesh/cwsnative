import { View , ScrollView} from 'react-native'
import React from 'react'
import Banner from '../components/home-screen/Banner'
import Courses from '../components/home-screen/Courses'
import StudentAchievement from '../components/home-screen/StudentAchievement'

const HomeScreen = () => {
  return (
    <ScrollView>
      <Banner/>
      <View style={{paddingHorizontal:5}}>
        <Courses/>
        <StudentAchievement/>
      </View>
    </ScrollView>
  )
}

export default HomeScreen