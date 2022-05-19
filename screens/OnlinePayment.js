import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'

const OnlinePayment = () => {
    const styles = StyleSheet.create({
        form: {
            paddingHorizontal: 10,
        },
        formControl: {
            padding: 5,
            marginVertical: 5
        },
        formLabel: {
            fontSize: 17,
            color: 'black',
            fontWeight: "400",

        },
        formInput: {
            borderColor: "lightgrey",
            borderWidth: 2,
            borderRadius: 10,
            paddingLeft: 10,
            fontSize: 18,
            marginTop: 5,
            color: "black",
        }
    })

    return (
        <View style={styles.form}>
            <View style={styles.formControl}>
                <Text style={styles.formLabel}>Enter Phone Number</Text>
                <TextInput keyboardType='numeric' height={45} placeholder="Enter Phone Number..." style={styles.formInput} />
            </View>

            <View style={styles.formControl}>
                <TouchableOpacity>
                    <Button title='Check' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnlinePayment