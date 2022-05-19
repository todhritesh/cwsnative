import { View, Text } from 'react-native'
import React from 'react'
import AdmissionForm from '../components/apply-for-admission/AdmissionForm'

const ApplyForAdmission = () => {
  return (
    <View style={{paddingBottom:120}}>
      <Text style={{fontSize:25,padding:10,fontWeight:"bold",color:'black'}}>Admission Form</Text>
      <AdmissionForm/>
    </View>
  )
}

export default ApplyForAdmission