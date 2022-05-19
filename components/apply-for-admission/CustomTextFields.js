import { View, Text , StyleSheet , TextInput } from 'react-native'
import React from 'react'

const CustomTextFields = (props) => {
    const styles = StyleSheet.create({
        form:{
            padding:10
        },
        formControl:{
            padding:5,
            marginVertical:5
        },
        formLabel:{
            fontSize:17,
            color:'black',
            fontWeight:"400",
            
        },
        formInput:{
            borderColor:"lightgrey",
            borderWidth:2,
            borderRadius:10,
            paddingLeft:10,
            fontSize:18,
            marginTop:5,
            color:"black",
        }
    })
    const {label} = props
    return (
        <View style={styles.formControl}>
            <Text style={styles.formLabel}>{label}</Text>
            <TextInput  height={45} {...props} style={styles.formInput} />
        </View>
    )
}

export default CustomTextFields