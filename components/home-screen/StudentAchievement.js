import { View, Text, StyleSheet, useWindowDimensions, Image, ScrollView } from 'react-native'
import React from 'react'

const StudentAchievement = () => {
    const dimension = useWindowDimensions();
    const styles = StyleSheet.create({
        studentContainer: {
            width: dimension.width,
            height: 320,
            marginVertical: 20,
            flex:1
        },
        headerContianer: {
            borderLeftColor: "black",
            borderLeftWidth: 3,
            paddingLeft: 6,
        },
        header: {
            color: "black",
            fontWeight: 'bold',
            fontSize: 20,
        },
        cardContainer: {
            minWidth:'100%',
            height:'100%',
            flexDirection: 'row',
            paddingHorizontal:5,
            marginTop:10,
            paddingVertical:10,
        },
        card: {
            maxWidth: dimension.width < dimension.height ? (dimension.width*55)/100 : 200,
            minWidth: dimension.width < dimension.height ? (dimension.width*55)/100 : 200,
            height: "100%",
            marginRight: 10,
            borderColor:"#ecf0f1",
            borderWidth:2,
            paddingHorizontal:10,
            backgroundColor:"#ecf0f1",
            borderRadius:10,
            justifyContent:"space-evenly",borderColor:"lightgrey",
            borderWidth:2,
        },
        cardImageContainer:{
            maxHeight:"60%",
        },
        cardImage: {
            resizeMode:"stretch",
            // resizeMode:"contain",
            width:"100%",
            height:"100%",
        },
        cardTNameontainer:{
            // minHeight:"15%",
            // maxHeight:"20%",
            flex:1,
        },
        cardName: {
            fontSize:17,
            textAlign:'center',
            fontWeight:'bold',
            color:"black",
        },
        cardRoleContainer:{
            flex:1,
            borderTopColor:"lightgrey",
            borderTopWidth:1,
            alignItems:"center",
            justifyContent:"flex-end",
            paddingBottom:10,
            marginTop:10
        },
        cardRole: {
            fontSize:15,
            fontWeight:'400',
            color:"black",
            textAlign:'center',
        },
    })
    return (
        <View style={styles.studentContainer} >
            <View style={styles.headerContianer}>
                <Text style={styles.header}>Student Achievements</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View  style={styles.cardContainer} >
                    <View style={styles.card}>
                        <View style={styles.cardImageContainer}>
                            <Image style={styles.cardImage} source={require("../../images/random.webp")} />
                        </View>
                        <View style={styles.cardNameContainer}>
                            <Text style={styles.cardName}>React jsasdfasdfasdfasdf</Text>
                        </View>
                        <View style={styles.cardRoleContainer}>
                            <Text style={styles.cardRole}>Frontend developer</Text>
                            <Text style={styles.cardRole}>Abc Compnay</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImageContainer}>
                            <Image style={styles.cardImage} source={require("../../images/random.webp")} />
                        </View>
                        <View style={styles.cardNameContainer}>
                            <Text style={styles.cardName}>React jsasdfasdfasdfasdf</Text>
                        </View>
                        <View style={styles.cardRoleContainer}>
                            <Text style={styles.cardRole}>Frontend developer</Text>
                            <Text style={styles.cardRole}>Abc Compnay</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImageContainer}>
                            <Image style={styles.cardImage} source={require("../../images/random.webp")} />
                        </View>
                        <View style={styles.cardNameContainer}>
                            <Text style={styles.cardName}>React jsasdfasdfasdfasdf</Text>
                        </View>
                        <View style={styles.cardRoleContainer}>
                            <Text style={styles.cardRole}>Frontend developer</Text>
                            <Text style={styles.cardRole}>Abc Compnay</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default StudentAchievement