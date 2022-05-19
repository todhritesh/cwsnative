import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import CustomTextFields from '../components/apply-for-admission/CustomTextFields'

const Login = () => {
    const styles = StyleSheet.create({
        form: {
            paddingHorizontal: 10,
        },
        formControl: {
            padding: 5,
            marginVertical: 5
        }
    })

    return (
        <View style={styles.form}>
            <Text style={{fontSize:25,padding:10,fontWeight:"bold",color:'black'}}>Login Form</Text>
            <CustomTextFields label="Email" placeholder="Email..." />
            <CustomTextFields secureTextEntry={true} label="Password" placeholder="Password..." />

            <View style={styles.formControl}>
                <TouchableOpacity>
                    <Button title='Login' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login