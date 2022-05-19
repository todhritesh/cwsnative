import { View, Text , useWindowDimensions , StyleSheet } from 'react-native'
import React from 'react'

const Course = () => {
    const {height,width} = useWindowDimensions()
    const styles = StyleSheet.create({
        card:{
            minWidth:width-20,
            paddingHorizontal:10,
            marginVertical:20,
            backgroundColor:'#ecf0f1',
            margin:10,
            borderColor:'lightgrey',
            borderWidth:1,
            elevation:5,
        },
        cardBody:{
            paddingVertical:10,
            justifyContent:"center",
            alignItems:'center',
        },
        cardImage:{
            maxWidth:200,
            minWidth:200,
            height:200,
            backgroundColor:"grey",
            marginTop:5,


        },
        courseDetailsContainer:{
            marginTop:5,

        },
        leftText:{
            fontWeight:"bold",
            fontSize:18,
            color:'black'
        },
        rightText:{
            fontWeight:"normal"
        },
        cardTitleContainer:{
            marginTop:5,

        },
        cardTitle:{
            fontWeight:'bold',
            fontSize:22,
            color:"black"
        },
        cardDescriptionContainer:{
            marginTop:5,
        },
        cardDescription:{
            fontSize:17,
            color:"black",
            textAlign:'center'
        }
    })
  return (
    <View style={styles.card}>
        <View style={styles.cardBody}>
            <View style={styles.cardImage}>

            </View>
            <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>This is title</Text>
            </View>
            <View style={styles.courseDetailsContainer}>
                <Text style={styles.leftText} >Course Fee : <Text  style={styles.rightText}>Rs. 345</Text></Text>
                <Text style={styles.leftText} >Duration : <Text  style={styles.rightText}>3 Months</Text></Text>
                <Text style={styles.leftText} >Instructor : <Text  style={styles.rightText}>Abc Instruct</Text></Text>
            </View>
            <View style={styles.cardDescriptionContainer}>
                <Text style={styles.cardDescription}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        </View>
    </View>
  )
}

export default Course